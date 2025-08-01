# app/controllers/dashboard_controller.py

from flask import Blueprint, jsonify
from app.models.customer import Customer
from app.models.payment import Payment
from app.models.service import Service
from app.extensions import db

dashboard_bp = Blueprint('dashboard', __name__, url_prefix='/api/dashboard')

@dashboard_bp.route('/summary', methods=['GET'])
def get_summary():
    total_customers = Customer.query.count()
    total_services = Service.query.count()
    total_payments = Payment.query.count()
    total_revenue = db.session.query(db.func.sum(Payment.amount)).scalar() or 0

    return jsonify({
        "total_customers": total_customers,
        "total_services": total_services,
        "total_payments": total_payments,
        "total_revenue": total_revenue,
        "average_rating": 4.3  # Placeholder or compute from testimonials if needed
    })
