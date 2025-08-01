from app import db



class ContactMessage(db.Model):
    __tablename__="contact_messages"
    message_id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(70))
    email = db.Column(db.String(60))
    subject = db.Column(db.String(150))
    message = db.Column(db.Text)
    date_sent = db.Column(db.String(100))
 

    def to_dict(self):
        return{
            "message_id": self.message_id,
            "customer_name": self.customer_name,
            "email": self.email,
            "subject": self.subject,
            "message": self.message,
            "date_sent": self.date_sent
        }