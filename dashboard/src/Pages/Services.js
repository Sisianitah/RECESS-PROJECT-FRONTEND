import React, { useEffect, useState } from 'react';
import api from '../api';
import {
  Container, Table, Button, Card, Modal, Form, Alert
} from 'react-bootstrap';

function Services() {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalMode, setModalMode] = useState('view');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await api.get('/services/');
      setServices(res.data);
    } catch (err) {
      console.error('Failed to load services', err);
    }
  };

  const handleView = (service) => {
    setSelected(service);
    setModalMode('view');
    setShowModal(true);
  };

  const handleEdit = (service) => {
    setForm({ ...service });
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await api.delete(`/services/${id}`);
        fetchServices();
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/services/${form.service_id}`, form);
      setShowModal(false);
      fetchServices();
    } catch (err) {
      setError('Update failed');
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4 text-center">
            <h3 style={{ color: '#FF9751' }}>All Services</h3>
          </Card.Title>

          <Table bordered hover responsive style={{ borderColor: '#FF9751' }}>
            <thead style={{ backgroundColor: '#FF9751', color: 'white' }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price (UGX)</th>
                <th>Time (mins)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(s => (
                <tr key={s.service_id}>
                  <td>{s.service_id}</td>
                  <td>{s.name}</td>
                  <td>{s.description}</td>
                  <td>{s.price}</td>
                  <td>{s.estimated_time}</td>
                  <td>
                    <Button
                      size="sm"
                      className="me-2"
                      style={{ backgroundColor: '#FFB066', borderColor: '#FF9751', color: 'white' }}
                      onClick={() => handleView(s)}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="me-2"
                      style={{ backgroundColor: '#FF9751', borderColor: '#FF9751', color: 'white' }}
                      onClick={() => handleEdit(s)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(s.service_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for View/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === 'view' ? 'Service Details' : 'Edit Service'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMode === 'view' && selected && (
            <>
              <p><strong>ID:</strong> {selected.service_id}</p>
              <p><strong>Name:</strong> {selected.name}</p>
              <p><strong>Description:</strong> {selected.description}</p>
              <p><strong>Price:</strong> {selected.price}</p>
              <p><strong>Estimated Time:</strong> {selected.estimated_time} mins</p>
            </>
          )}

          {modalMode === 'edit' && form && (
            <Form>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price (UGX)</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Estimated Time (mins)</Form.Label>
                <Form.Control
                  name="estimated_time"
                  type="number"
                  value={form.estimated_time}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        {modalMode === 'edit' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button
              style={{ backgroundColor: '#FF9751', borderColor: '#FF9751' }}
              onClick={handleUpdate}
            >
              Save
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
}

export default Services;

