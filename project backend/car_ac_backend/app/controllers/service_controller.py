from flask import Blueprint, request, jsonify
from app import db
from app.models.service import Service


service_bp = Blueprint('services', __name__, url_prefix='/api/services')

#create a new service
@service_bp.route('/', methods=['POST'])
def create_service():
    data = request.get_json()
    new_service = Service(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        estimated_time=data['estimated_time']




# description=data.get('description', ''),
#         price=data.get('price',0.0),
#         estimated_time=data.get('estimated_time', '')
    )
    db.session.add(new_service)
    db.session.commit()
    return jsonify(new_service.to_dict()), 201 

#get all services
@service_bp.route('/', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])


#get a specific service
@service_bp.route('/<int:service_id>', methods=['GET'])
def get_service(service_id):
    service = Service.query.get_or_404(service_id)
    return jsonify(service.to_dict())


# Update a service
@service_bp.route('/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    service = Service.query.get_or_404(service_id)
    data = request.get_json()

    service.name = data.get('name', service.name)
    service.description = data.get('description', service.description)
    service.price = data.get('price', service.price)
    service.estimated_time = data.get('estimated_time', service.estimated_time)

    db.session.commit()
    db.session.refresh(service)  # <-- Ensures we get the latest values
    return jsonify(service.to_dict())



#delete a service
@service_bp.route('/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    service = Service.query.get_or_404(service_id)
    db.session.delete(service)
    db.session.commit()
    return jsonify({"message": "Service deleted successfully"})
    



