from flask import Blueprint, request, jsonify
from app import db
from app.models.payment import Payment

payment_bp = Blueprint('payments', __name__, url_prefix='/api/payments')

# Create a new payment
@payment_bp.route('/', methods=['POST'])
def create_payment():
    data = request.get_json()
    new_payment = Payment(
        booking_id=data['booking_id'],
        amount=data['amount'],
        payment_method=data['payment_method'],
        payment_date=data.get('payment_date', ''),
        status=data.get('status', 'Pending')
    )
    db.session.add(new_payment)
    db.session.commit()
    return jsonify(new_payment.to_dict()), 201

# Get all payments
@payment_bp.route('/', methods=['GET'])
def get_payments():
    payments = Payment.query.all()
    return jsonify([p.to_dict() for p in payments])

# Get a specific payment
@payment_bp.route('/<int:payment_id>', methods=['GET'])
def get_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    return jsonify(payment.to_dict())

# Update a payment
@payment_bp.route('/<int:payment_id>', methods=['PUT'])
def update_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    data = request.get_json()

    payment.amount = data.get('amount', payment.amount)
    payment.payment_method = data.get('payment_method', payment.payment_method)
    payment.payment_date = data.get('payment_date', payment.payment_date)
    payment.status = data.get('status', payment.status)

    db.session.commit()
    return jsonify(payment.to_dict())

# Delete a payment
@payment_bp.route('/<int:payment_id>', methods=['DELETE'])
def delete_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    db.session.delete(payment)
    db.session.commit()
    return jsonify({"message": "Payment deleted successfully"})
