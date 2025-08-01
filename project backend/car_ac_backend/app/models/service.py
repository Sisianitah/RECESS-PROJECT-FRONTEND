from app import db


class Service(db.Model):
    __tablename__="services"
    service_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    description = db.Column(db.String(100), nullable=False)
    price = db.Column(db.String(200), nullable=False)
    estimated_time = db.Column(db.String(50))



    def to_dict(self):
        return{
            "service_id": self.service_id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "estimated_time": self.estimated_time
        }