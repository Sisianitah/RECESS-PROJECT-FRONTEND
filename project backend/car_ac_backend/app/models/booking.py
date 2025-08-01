from datetime import datetime
from app.extensions import db

class Booking(db.Model):
    __tablename__ = "bookings"

    booking_id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('services.service_id'), nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=False) 
    status = db.Column(db.String(50))
    notes = db.Column(db.Text)


    def to_dict(self):
        return {
            "booking_id": self.booking_id,
            "customer_id": self.customer_id,
            "service_id": self.service_id,
            "status": self.status,
            "notes": self.notes
        }



    
