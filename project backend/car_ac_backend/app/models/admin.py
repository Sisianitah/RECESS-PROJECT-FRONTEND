from app import db

class Admin(db.Model):
    __tablename__ = "admins"
    admin_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(50))
    role = db.Column(db.String(60))


    def to_dict(self):
      return {
        "admin_id": self.admin_id,
        "name": self.name,
        "email": self.email,
        "role": self.role
    }
