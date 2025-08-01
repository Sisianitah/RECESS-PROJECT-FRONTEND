from app import db
from datetime import datetime

class Testimonial(db.Model):
    __tablename__="testimonials"
    testimonial_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=False)
    rating = db.Column(db.Integer)
    comment = db.Column(db.String (200))
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)


    def to_dict(self):
        return{
            "testimonial_id": self.testimonial_id,
            "customer_id": self.customer_id,
            "rating": self.rating,
            "comment": self.comment,
            "date_posted": self.date_posted
        }