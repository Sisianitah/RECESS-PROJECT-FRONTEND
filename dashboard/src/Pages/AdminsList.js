import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../api'; // Your Axios instance with baseURL: http://127.0.0.1:5000/api

const AdminsList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    api.get('/admins')
      .then(response => setAdmins(response.data))
      .catch(err => console.error("Failed to fetch admins:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      api.delete(`/admins/${id}`)
        .then(() => {
          setAdmins(admins.filter(admin => admin.id !== id));
        })
        .catch(err => console.error("Delete failed:", err));
    }
  };

  const handleEdit = (admin) => {
    const newName = prompt("Enter new name:", admin.name);
    const newEmail = prompt("Enter new email:", admin.email);
    const newRole = prompt("Enter new role (admin/staff):", admin.role);

    if (newName && newEmail && newRole) {
      api.put(`/admins/${admin.id}`, {
        name: newName,
        email: newEmail,
        role: newRole
      })
        .then(response => {
          setAdmins(admins.map(a =>
            a.id === admin.id ? response.data : a
          ));
        })
        .catch(err => console.error("Update failed:", err));
    }
  };

  return (
    <div className="p-4">
      <h4>All Admins</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No admins found</td>
            </tr>
          ) : (
            admins.map((a, index) => (
              <tr key={a.id}>
                <td>{index + 1}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.role}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(a)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(a.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminsList;
