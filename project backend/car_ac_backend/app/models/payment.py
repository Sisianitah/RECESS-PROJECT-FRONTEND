from app import db
from datetime import datetime

class Payment(db.Model):
    __tablename__= "payments"
    payment_id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.Integer, db.ForeignKey('bookings.booking_id'), nullable=False)
    amount = db.Column(db.Float)
    payment_method = db.Column(db.String(50))
    payment_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(50))



    def to_dict(self):
        return{
            "payment_id": self.payment_id,
            "booking_id": self.booking_id,
            "amount": self.amount,
            "payment_method": self.payment_method,
            "payment_date": self.payment_date,
            "status": self.status
        }