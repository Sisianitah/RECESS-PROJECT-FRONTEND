from datetime import timedelta
from flask import Flask
from flask_jwt_extended import JWTManager
app = Flask(__name__)

class Config:
     SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost/ac_masters_db'

     JWT_SECRET_KEY = "car_ac_masters_admin"


app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=10)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(minutes=7)



app.debug = True




