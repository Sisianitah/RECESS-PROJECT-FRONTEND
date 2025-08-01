from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.admin import Admin
from flask_jwt_extended import get_jwt
from app.models.customer import Customer
from flask_jwt_extended import get_jwt_identity,  jwt_required
# from werkzeug.security import generate_password_hash, check_password_hash
from app.extensions import bcrypt
from app.status_codes import (
    HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_409_CONFLICT,
    HTTP_403_FORBIDDEN, HTTP_500_INTERNAL_SERVER_ERROR,
    HTTP_201_CREATED, HTTP_200_OK, HTTP_401_UNAUTHORIZED
)
admin_bp = Blueprint('admins', __name__, url_prefix='/api/admins')


# create a new admin
@admin_bp.route('/', methods=['POST'])
def create_admin():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')  

    new_admin = Admin(
        name=data['name'],
        email=data['email'],
        password=hashed_password,
        role=data.get('role', 'staff')
    )
    db.session.add(new_admin)
    db.session.commit()
    return jsonify({
        "message": "New admin created.",
        "admin": {
            "name": new_admin.name,
            "email": new_admin.email,
            "role": new_admin.role
        }
    }), HTTP_201_CREATED




# #get all admin
# @admin_bp.route('/', methods=['GET'])
# @jwt_required()
# def get_all_admins():
#     user_id = get_jwt_identity()
#     current_user = Admin.query.get(user_id)  # Corrected this line

#     if not current_user or current_user.role != 'admin':
#         return jsonify({"error": "Admin access required"}), HTTP_403_FORBIDDEN

#     admins = Admin.query.filter_by(role='admin').all()  # Also corrected this line
#     return jsonify([admin.to_dict() for admin in admins]), HTTP_200_OK






@admin_bp.route('/', methods=['GET'])
@jwt_required()
def get_all_admins():
    claims = get_jwt()
    if claims.get("role") != "admin":
        return jsonify({"error": "Admin access required"}), HTTP_403_FORBIDDEN

    admins = Admin.query.all()
    return jsonify([admin.to_dict() for admin in admins]), HTTP_200_OK


#get a single admin
@admin_bp.route('/<int:admin_id>', methods=['GET'])
def get_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    return jsonify(admin.to_dict())


#update an admin (excluding password reset here)
@admin_bp.route('/<int:admin_id>', methods=['PUT'])
def update_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    data = request.get_json()


    admin.name = data.get('name', admin.name)
    admin.email = data.get('email', admin.email)
    admin.role = data.get('role', admin.role)


    db.session.commit()
    return jsonify(admin.to_dict())



#delete an admin
@admin_bp.route('/<int:admin_id>', methods=['DELETE'])
def delete_admin(admin_id):
    admin = Admin.query.get_or_404(admin_id)
    db.session.delete(admin)
    db.session.commit()
    return jsonify({"message": "Admin deleted successfully"})