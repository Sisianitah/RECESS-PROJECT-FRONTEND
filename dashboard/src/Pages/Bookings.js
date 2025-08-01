import React, { useEffect, useState } from 'react';
import api from '../api';
import { Button, Form, Table } from 'react-bootstrap';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [formData, setFormData] = useState({
    customer_id: '',
    service_id: '',
    status: '',
    notes: ''
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await api.get('/bookings/');
    setBookings(res.data);
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setFormData(booking);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      await api.delete(`/bookings/${id}`);
      fetchBookings();
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingBooking) {
      await api.put(`/bookings/${editingBooking.booking_id}`, formData);
    } else {
      await api.post('/bookings/', formData);
    }
    setEditingBooking(null);
    setFormData({ customer_id: '', service_id: '', status: '', notes: '' });
    fetchBookings();
  };

  return (
    <div className="p-4">
      <h2 style={{ color: '#FF9751', marginBottom: '25px' }}>Bookings</h2>

      <Form className="mb-5" style={{ backgroundColor: '#fff3eb', padding: '20px', borderRadius: '10px' }}>
        <Form.Group className="mb-3">
          <Form.Label><strong>Customer ID</strong></Form.Label>
          <Form.Control name="customer_id" value={formData.customer_id} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>Service ID</strong></Form.Label>
          <Form.Control name="service_id" value={formData.service_id} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>Status</strong></Form.Label>
          <Form.Control name="status" value={formData.status} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><strong>Notes</strong></Form.Label>
          <Form.Control name="notes" value={formData.notes} onChange={handleChange} />
        </Form.Group>

        <Button
          className="mt-2"
          style={{ backgroundColor: '#FF9751', borderColor: '#FF9751' }}
          onClick={handleSubmit}
        >
          {editingBooking ? 'Update' : 'Create'} Booking
        </Button>
      </Form>

      <hr style={{ marginBottom: '30px' }} />

      <Table bordered hover responsive style={{ borderColor: '#FF9751' }}>
        <thead style={{ backgroundColor: '#FF9751', color: 'white' }}>
          <tr>
            <th>Customer ID</th>
            <th>Service ID</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.booking_id}>
              <td>{booking.customer_id}</td>
              <td>{booking.service_id}</td>
              <td>{booking.status}</td>
              <td>{booking.notes}</td>
              <td>
                <Button
                  size="sm"
                  className="me-2"
                  style={{ backgroundColor: '#FFB066', borderColor: '#FF9751', color: 'white' }}
                  onClick={() => handleEdit(booking)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(booking.booking_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Bookings;
