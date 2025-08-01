# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy 
# from flask_migrate import Migrate
# from app.extensions import db, migrate, jwt
# from flask_bcrypt import Bcrypt

# from app.controllers.admin_controller import admin_bp
# from app.controllers.blog_article_controller import blog_article_bp
# from app.controllers.booking_controller import booking_bp
# from app.controllers.contact_message_controller import contact_message_bp
# from app.controllers.customer_controller import Customer_bp
# from app.controllers.payment_controller import payment_bp
# from app.controllers.service_controller import service_bp
# from app.controllers.testimonial_controller import testimonial_bp

# from app.controllers.auth_controller import auth_bp
# def create_app():

# #app instance
#     app = Flask(__name__)
#     app.config.from_object('config.Config')
#     app.config['DEBUG'] = True
#     jwt.init_app(app)
#     db.init_app(app)
#     migrate.init_app(app,db)
#     app.debug = True





#     #import models
#     from app.models.admin import Admin
#     from app.models.blog_article import BlogArticle
#     from app.models.booking import Booking
#     from app.models.contact_message import ContactMessage
#     from app.models.customer import Customer
#     from app.models.payment import Payment
#     from app.models.service import Service
#     from app.models.testimonial import Testimonial
    



#     app.register_blueprint(admin_bp)
#     app.register_blueprint(blog_article_bp)
#     app.register_blueprint(booking_bp)
#     app.register_blueprint(contact_message_bp)
#     app.register_blueprint(Customer_bp)
#     app.register_blueprint(payment_bp)
#     app.register_blueprint(service_bp)
#     app.register_blueprint(testimonial_bp)
    
#     app.register_blueprint(auth_bp)



    
#     @app.route("/")
#     def home():
#         return " Welcome To Car A-C Masters"
    
    
#     return app















from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS  # ✅ Add this

from app.extensions import db, migrate, jwt

from app.controllers.admin_controller import admin_bp
from app.controllers.blog_article_controller import blog_article_bp
from app.controllers.booking_controller import booking_bp
from app.controllers.contact_message_controller import contact_message_bp
from app.controllers.customer_controller import Customer_bp
from app.controllers.payment_controller import payment_bp
from app.controllers.service_controller import service_bp
from app.controllers.testimonial_controller import testimonial_bp
from app.controllers.auth_controller import auth_bp
from app.controllers.dashboard_controller import dashboard_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    app.config['DEBUG'] = True

    # ✅ Enable CORS for all routes
    CORS(app)  # 👈 OR customize it: CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    
    # CORS(app, supports_credentials=True, resources={
    #           r"/api/*": {"origins": "http://localhost:3000"}
    #         })

    # Initialize extensions
    jwt.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    app.debug = True

    # Import models
    from app.models.admin import Admin
    from app.models.blog_article import BlogArticle
    from app.models.booking import Booking
    from app.models.contact_message import ContactMessage
    from app.models.customer import Customer
    from app.models.payment import Payment
    from app.models.service import Service
    from app.models.testimonial import Testimonial

    # Register blueprints
    app.register_blueprint(admin_bp)
    app.register_blueprint(blog_article_bp)
    app.register_blueprint(booking_bp)
    app.register_blueprint(contact_message_bp)
    app.register_blueprint(Customer_bp)
    app.register_blueprint(payment_bp)
    app.register_blueprint(service_bp)
    app.register_blueprint(testimonial_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)

    @app.route("/")
    def home():
        return "Welcome To Car A-C Masters"

    return app
