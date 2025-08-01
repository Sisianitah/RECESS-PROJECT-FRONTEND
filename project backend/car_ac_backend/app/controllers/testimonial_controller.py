from flask import Blueprint, request, jsonify
from app import db
from app.models.testimonial import Testimonial

testimonial_bp = Blueprint('testimonials', __name__, url_prefix='/api/testimonials')

# Create a new testimonial
@testimonial_bp.route('/', methods=['POST'])
def create_testimonial():
    data = request.get_json()
    new_testimonial = Testimonial(
        customer_id=data['customer_id'],
        rating=data.get('rating', 5),
        comment=data.get('comment', ''),
        date_posted=data.get('date_posted', '')
    )
    db.session.add(new_testimonial)
    db.session.commit()
    return jsonify(new_testimonial.to_dict()), 201

# Get all testimonials
@testimonial_bp.route('/', methods=['GET'])
def get_testimonials():
    testimonials = Testimonial.query.all()
    return jsonify([t.to_dict() for t in testimonials])

# Get a single testimonial
@testimonial_bp.route('/<int:testimonial_id>', methods=['GET'])
def get_testimonial(testimonial_id):
    testimonial = Testimonial.query.get_or_404(testimonial_id)
    return jsonify(testimonial.to_dict())

# Update a testimonial
@testimonial_bp.route('/<int:testimonial_id>', methods=['PUT'])
def update_testimonial(testimonial_id):
    testimonial = Testimonial.query.get_or_404(testimonial_id)
    data = request.get_json()

    testimonial.rating = data.get('rating', testimonial.rating)
    testimonial.comment = data.get('comment', testimonial.comment)
    testimonial.date_posted = data.get('date_posted', testimonial.date_posted)

    db.session.commit()
    return jsonify(testimonial.to_dict())

# Delete a testimonial
@testimonial_bp.route('/<int:testimonial_id>', methods=['DELETE'])
def delete_testimonial(testimonial_id):
    testimonial = Testimonial.query.get_or_404(testimonial_id)
    db.session.delete(testimonial)
    db.session.commit()
    return jsonify({"message": "Testimonial deleted successfully"})
