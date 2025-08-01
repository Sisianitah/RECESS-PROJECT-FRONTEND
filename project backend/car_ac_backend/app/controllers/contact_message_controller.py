from flask import Blueprint, request, jsonify
from app import db
from app.models.contact_message import ContactMessage

contact_message_bp = Blueprint('contact_messages', __name__, url_prefix='/api/messages')

# Create a new contact message
@contact_message_bp.route('/', methods=['POST'])
def create_message():
    data = request.get_json()
    new_message = ContactMessage(
        customer_name=data['customer_name'],
        email=data['email'],
        subject=data['subject'],
        message=data['message'],
        date_sent=data.get('date_sent', '')
    )
    db.session.add(new_message)
    db.session.commit()
    return jsonify(new_message.to_dict()), 201

# Get all contact messages
@contact_message_bp.route('/', methods=['GET'])
def get_messages():
    messages = ContactMessage.query.all()
    return jsonify([m.to_dict() for m in messages])

# Get a single message
@contact_message_bp.route('/<int:message_id>', methods=['GET'])
def get_message(message_id):
    message = ContactMessage.query.get_or_404(message_id)
    return jsonify(message.to_dict())

# Delete a message
@contact_message_bp.route('/<int:message_id>', methods=['DELETE'])
def delete_message(message_id):
    message = ContactMessage.query.get_or_404(message_id)
    db.session.delete(message)
    db.session.commit()
    return jsonify({"message": "Message deleted successfully"})
