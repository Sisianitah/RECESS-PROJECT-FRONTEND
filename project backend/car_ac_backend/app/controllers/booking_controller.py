from flask import Blueprint, request, jsonify
from app import db
from app.models.booking import Booking 



booking_bp= Blueprint('bookings', __name__, url_prefix='/api/bookings')

#create a new booking
@booking_bp.route('/', methods=['POST'])
def create_booking():
    data = request.get_json()
    new_booking = Booking(
        customer_id=data['customer_id'],
        service_id=data['service_id'],
        status=data.get('status', 'pending'),
        notes=data.get('notes', '')

    )

    db.session.add(new_booking)
    db.session.commit()
    return jsonify(new_booking.to_dict()), 201

# Get all bookings
@booking_bp.route('/', methods=['GET'])
def get_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings])



# Get a specific booking
@booking_bp.route('/<int:booking_id>', methods=['GET'])
def get_booking(booking_id):
    booking = Booking.query.get_or_404(booking_id)
    return jsonify(booking.to_dict())



#update a booking
@booking_bp.route('/<int:booking_id>',methods=['PUT'])
def update_booking(booking_id):
    booking = Booking.query.get_or_404(booking_id)
    data = request.get_json()

    booking.customer_id = data.get('customer_id', booking.customer_id)
    booking.service_id = data.get('service_id', booking.service_id)
    booking.status = data.get('status', booking.status)
    booking.notes = data.get('notes',booking.notes)

    db.session.commit()
    return jsonify(booking.to_dict())


# delete a booking
@booking_bp.route('/<int:booking_id>', methods=['DELETE'])
def delete_booking(booking_id):
    booking = Booking.query.get_or_404(booking_id)
    db.session.delete(booking)
    db.session.commit()
    return jsonify({"message": "Booking deleted Successfully"})
