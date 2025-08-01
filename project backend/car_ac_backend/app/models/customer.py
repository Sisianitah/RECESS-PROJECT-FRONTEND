from app import db
from datetime import datetime

class Customer(db.Model):
    __tablename__ = "customers"
    
    customer_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), default="user") 
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "customer_id": self.customer_id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "role": self.role,
            "created_at": self.created_at.isoformat()
        }
