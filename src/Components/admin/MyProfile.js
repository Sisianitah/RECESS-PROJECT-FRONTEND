import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import api from '../api';

const MyProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const res = await api.get('/admins/me'); // custom endpoint required or adjust below
      setAdmin(res.data);
      setForm(res.data);
    } catch (err) {
      console.error('Failed to fetch admin:', err);
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/admins/${form.admin_id}`, form);
      setMessage('Profile updated successfully!');
      fetchAdminProfile();
    } catch (err) {
      setMessage('Failed to update profile');
      console.error(err);
    }
  };

  if (!admin) return <p>Loading...</p>;

  return (
    <Container className="my-4">
      <Card className="shadow-sm p-4">
        <Card.Title className="mb-3 text-center">
          <h3>My Profile</h3>
        </Card.Title>

        {message && <Alert variant="info">{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select name="role" value={form.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </Form.Select>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="warning" style={{ backgroundColor: '#FF9751', border: 'none' }}>
              Update Profile
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default MyProfile;
