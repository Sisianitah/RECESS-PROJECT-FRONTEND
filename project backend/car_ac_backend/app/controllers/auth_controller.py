from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    jwt_required, get_jwt_identity
)
from app.extensions import db, bcrypt
from app.models.customer import Customer
from app.models.admin import Admin
from app.status_codes import (
    HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED,
    HTTP_403_FORBIDDEN, HTTP_404_NOT_FOUND, HTTP_409_CONFLICT, HTTP_500_INTERNAL_SERVER_ERROR
)
from datetime import datetime
import uuid

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

# Temporary in-memory token storage (mocked)
reset_tokens = {}
verification_tokens = {}

# Register (Customer Only)
@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        # phone = data.get('phone')
        # address = data.get('address')

        if not all([name, email, password]):
            return jsonify({'error': 'Missing required fields'}), HTTP_400_BAD_REQUEST

        if len(password) < 8:
            return jsonify({'error': 'Password must be at least 8 characters'}), HTTP_400_BAD_REQUEST

        if Admin.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), HTTP_409_CONFLICT

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        new_admin= Admin(
            name=name,
            email=email,
            # phone=phone,
            # address=address,
            password=hashed_password,
            role='admin',
            # created_at=datetime.utcnow()
        )

        db.session.add(new_admin)
        db.session.commit()

        token = str(uuid.uuid4())
        verification_tokens[email] = token

        return jsonify({'message': 'Registered successfully. Verify phone.', 'verification_token': token}), HTTP_201_CREATED

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), HTTP_500_INTERNAL_SERVER_ERROR


@auth_bp.post('/login')
def login():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not all([email, password]):
            return jsonify({'error': 'Email and password are required'}), HTTP_400_BAD_REQUEST

        # Check Customer first
        user = Customer.query.filter_by(email=email).first()

        # If not a Customer, try Admin
        if not user:
            user = Admin.query.filter_by(email=email).first()

        # if not user or not bcrypt.check_password_hash(user.password, password):
        #     return jsonify({'error': 'Invalid email or password'}), HTTP_401_UNAUTHORIZED

        # Get user_id or admin_id depending on the model
        user_id = getattr(user, 'user_id', getattr(user, 'admin_id', None))

        # access_token = create_access_token(identity=str(user_id))
        # refresh_token = create_refresh_token(identity=str(user_id))

        access_token = create_access_token(
             identity=str(user_id),
             additional_claims={"role": user.role}
            )
        refresh_token = create_refresh_token(identity=str(user_id))


        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'refresh_token': refresh_token,
            'user': {
                'id': user_id,
                'name': user.name,
                'email': user.email,
                'role': user.role
            }
        }), HTTP_200_OK

    except Exception as e:
        return jsonify({'error': str(e)}), HTTP_500_INTERNAL_SERVER_ERROR


# Refresh Token
@auth_bp.route('/token/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify({'access_token': access_token}), HTTP_200_OK


# Logout (Mocked)
@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    return jsonify({'message': 'Successfully logged out'}), HTTP_200_OK


# Request Password Reset
@auth_bp.route('/request-password-reset', methods=['POST'])
def request_password_reset():
    email = request.json.get('email')
    user = Customer.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), HTTP_404_NOT_FOUND

    token = str(uuid.uuid4())
    reset_tokens[email] = token
    return jsonify({'message': 'Reset token generated', 'reset_token': token}), HTTP_200_OK


# Reset Password
@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    email = request.json.get('email')
    token = request.json.get('token')
    new_password = request.json.get('new_password')

    if reset_tokens.get(email) != token:
        return jsonify({'error': 'Invalid or expired token'}), HTTP_401_UNAUTHORIZED

    user = Customer.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), HTTP_404_NOT_FOUND

    user.password = bcrypt.generate_password_hash(new_password).decode('utf-8')
    db.session.commit()
    reset_tokens.pop(email)

    return jsonify({'message': 'Password reset successful'}), HTTP_200_OK


# Phone Verification
@auth_bp.route('/verify', methods=['POST'])
def verify():
    email = request.json.get('email')
    token = request.json.get('token')

    if verification_tokens.get(email) != token:
        return jsonify({'error': 'Invalid or expired verification token'}), HTTP_401_UNAUTHORIZED

    user = Customer.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), HTTP_404_NOT_FOUND

    user.is_verified = True
    db.session.commit()
    verification_tokens.pop(email)

    return jsonify({'message': 'Phone number verified successfully'}), HTTP_200_OK


# Get Current User Info
@auth_bp.route('/me', methods=['GET'])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = Customer.query.get(user_id) or Admin.query.get(user_id)

    if not user:
        return jsonify({'error': 'User not found'}), HTTP_404_NOT_FOUND

    return jsonify({'user': user.to_dict()}), HTTP_200_OK
