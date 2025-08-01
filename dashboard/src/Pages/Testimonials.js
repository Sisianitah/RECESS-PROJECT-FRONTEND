import React, { useEffect, useState } from 'react';
import api from '../api';
import { Table, Button, Modal } from 'react-bootstrap';


function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = () => {
    api.get('/testimonials/').then(res => setTestimonials(res.data));
  };

  const handleView = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await api.delete(`/testimonials/${id}`);
        fetchTestimonials();
      } catch (error) {
        alert('Failed to delete testimonial.');
      }
    }
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#e6f0fa', minHeight: '100vh' }}>
      <h2 style={{ color: '#005b96', marginBottom: '20px' }}>All Testimonials</h2>

      <Table striped bordered hover responsive style={{ backgroundColor: 'white' }}>
        <thead style={{ backgroundColor: '#3399ff', color: 'white' }}>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map(t => (
            <tr key={t.testimonial_id}>
              <td>{t.testimonial_id}</td>
              <td>{t.customer_id}</td>
              <td>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ color: i < t.rating ? '#ffc107' : '#e4e5e9' }}>
                    ★
                  </span>
                ))}
              </td>

              <td>{t.comment.length > 30 ? t.comment.slice(0, 30) + '...' : t.comment}</td>
              <td>{new Date(t.date_posted).toLocaleDateString()}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  style={{ marginRight: '10px' }}
                  onClick={() => handleView(t)}
                >
                  View
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(t.testimonial_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* View Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton style={{ backgroundColor: '#005b96', color: 'white' }}>
          <Modal.Title>Testimonial Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTestimonial && (
            <>
              <p><strong>ID:</strong> {selectedTestimonial.testimonial_id}</p>
              <p><strong>Customer:</strong> {selectedTestimonial.customer_id}</p>
              <p><strong>Rating:</strong> {
             Array.from({ length: 5 }, (_, i) => (
               <span key={i} style={{ color: i < selectedTestimonial.rating ? '#ffc107' : '#e4e5e9' }}>
                ★
                </span>
             ))
              }</p>

              <p><strong>Comment:</strong> {selectedTestimonial.comment}</p>
              <p><strong>Date:</strong> {new Date(selectedTestimonial.date_posted).toLocaleString()}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Testimonials;
