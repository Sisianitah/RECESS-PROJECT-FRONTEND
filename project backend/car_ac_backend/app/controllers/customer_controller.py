from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from flask import request, jsonify
from app.models.customer import Customer  # adjust this import if needed
from app.extensions import db
from app.status_codes import HTTP_201_CREATED, HTTP_400_BAD_REQUEST

Customer_bp = Blueprint('cutomers', __name__, url_prefix='/api/customer')

#create a new customer
# @Customer_bp.route('/', methods=['POST'])
# def create_customer():
#     data = request.get_json()
#     new_customer = Customer(
#         name=data['name'],
#         email=data['email'],
#         phone=data['phone']
#     )
#     db.session.add(new_customer)
#     db.session.commit()
#     return jsonify(new_customer.to_dict()),201




@Customer_bp.route('/', methods=['POST'])
def create_customer():
    data = request.get_json()

    # Validate required fields
    required_fields = ['name', 'email', 'phone', 'password']
    for field in required_fields:
        if not data.get(field):
            return jsonify({"error": f"{field} is required"}), HTTP_400_BAD_REQUEST

    # Hash password
    hashed_password = generate_password_hash(data['password'])

    # Create customer
    new_customer = Customer(
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        password=hashed_password,
        # role=data.get('role', 'user')  # optional
    )

    db.session.add(new_customer)
    db.session.commit()

    return jsonify(new_customer.to_dict()), HTTP_201_CREATED

#get all customers
@Customer_bp.route('/', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])


#get a single customer by id
@Customer_bp.route('/<int:customer_id>', methods=['GET'])
def get_customer(customer_id):
    customer = Customer.query.get_or_404(customer_id)
    return jsonify(customer.to_dict())


#update  a customer
@Customer_bp.route('/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    customer = Customer.query.get_or_404(customer_id)
    data = request.get_json()

    customer.name = data.get('name', customer.name)
    customer.email = data.get('email', customer.email)
    customer.phone = data.get('phone', customer.phone)
    # customer.role = data.get('role', customer.role)  # ✅ This is important!

    db.session.commit()
    db.session.refresh(customer)  # Optional but ensures latest data is returned

    return jsonify(customer.to_dict())



#delete a customer
@Customer_bp.route('/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    customer = Customer.query.get_or_404(customer_id)
    db.session.delete(customer)
    db.session.commit()
    return jsonify({"message": "Customer deleted successfully"})