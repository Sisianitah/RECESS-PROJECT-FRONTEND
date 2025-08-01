// // import React, { useState } from 'react';
// // import axios from '../api'; // make sure your Axios instance handles JWT

// // const AddAdmin = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'admin',
// //   });

// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccessMessage('');

// //     try {
// //       const response = await axios.post('/admins/', formData);
// //       setSuccessMessage(response.data.message);
// //       setFormData({
// //         name: '',
// //         email: '',
// //         password: '',
// //         role: 'admin',
// //       });
// //     } catch (err) {
// //       const errMsg = err.response?.data?.error || 'Failed to create admin.';
// //       setError(errMsg);
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-semibold mb-4">Add New Admin</h2>

// //       {successMessage && (
// //         <div className="bg-green-100 text-green-800 p-2 rounded mb-3">
// //           {successMessage}
// //         </div>
// //       )}
// //       {error && (
// //         <div className="bg-red-100 text-red-800 p-2 rounded mb-3">
// //           {error}
// //         </div>
// //       )}

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             className="w-full border border-gray-300 px-3 py-2 rounded"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             className="w-full border border-gray-300 px-3 py-2 rounded"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             className="w-full border border-gray-300 px-3 py-2 rounded"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium">Role</label>
// //           <select
// //             name="role"
// //             className="w-full border border-gray-300 px-3 py-2 rounded"
// //             value={formData.role}
// //             onChange={handleChange}
// //           >
// //             <option value="admin">Admin</option>
            
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
// //         >
// //           Add Admin
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddAdmin;





// // import React, { useState } from 'react';
// // import axios from '../api';

// // const AddAdmin = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'admin',
// //   });

// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccessMessage('');

// //     try {
// //       const response = await axios.post('/admins/', formData);
// //       setSuccessMessage(response.data.message || 'Admin created successfully!');
// //       setFormData({
// //         name: '',
// //         email: '',
// //         password: '',
// //         role: 'admin',
// //       });
// //     } catch (err) {
// //       const errMsg = err.response?.data?.error || 'Failed to create admin.';
// //       setError(errMsg);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-blue-50 py-10 px-4 flex items-center justify-center">
// //       <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
// //         <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add New Admin</h2>

// //         {successMessage && (
// //           <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-sm border border-green-300">
// //             {successMessage}
// //           </div>
// //         )}

// //         {error && (
// //           <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-sm border border-red-300">
// //             {error}
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Role</label>
// //             <select
// //               name="role"
// //               className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
// //               value={formData.role}
// //               onChange={handleChange}
// //             >
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition duration-200"
// //           >
// //             Add Admin
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddAdmin;






// import React, { useState, useEffect } from 'react';
// import axios from '../api';
// import { Form, Button, Alert, Table, Container, Row, Col, Card } from 'react-bootstrap';

// const AddAdmin = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'admin',
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [error, setError] = useState('');
//   const [admins, setAdmins] = useState([]);

//   const fetchAdmins = async () => {
//     try {
//       const res = await axios.get('/admins/');
//       setAdmins(res.data);
//     } catch (err) {
//       console.error('Failed to fetch admins:', err.response?.data?.error || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMessage('');

//     try {
//       const res = await axios.post('/admins/', formData);
//       setSuccessMessage(res.data.message || 'Admin created successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'admin',
//       });
//       fetchAdmins();
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to create admin.');
//     }
//   };

//   return (
//     <Container className="my-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title className="mb-4 text-center text-primary">Add New Admin</Card.Title>

//               {successMessage && (
//                 <Alert variant="success">{successMessage}</Alert>
//               )}
//               {error && (
//                 <Alert variant="danger">{error}</Alert>
//               )}

//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter full name"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter email"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter password"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Label>Role</Form.Label>
//                   <Form.Select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleChange}
//                     disabled
//                   >
//                     <option value="admin">Admin</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">
//                   Add Admin
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Admin List Section */}
//       <Row className="justify-content-center mt-5">
//         <Col md={10}>
//           <Card>
//             <Card.Body>
//               <Card.Title className="mb-4 text-primary">Current Admins</Card.Title>

//               {admins.length === 0 ? (
//                 <p>No admins found.</p>
//               ) : (
//                 <Table striped bordered hover responsive>
//                   <thead className="table-primary">
//                     <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Role</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {admins.map(admin => (
//                       <tr key={admin.admin_id}>
//                         <td>{admin.admin_id}</td>
//                         <td>{admin.name}</td>
//                         <td>{admin.email}</td>
//                         <td>{admin.role}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddAdmin;




import React, { useState, useEffect } from 'react';
import axios from '../api';
import {
  Form, Button, Alert, Table, Container, Row, Col, Card, Modal
} from 'react-bootstrap';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('view'); // or 'edit'
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const fetchAdmins = async () => {
    try {
      const res = await axios.get('/admins/');
      setAdmins(res.data);
    } catch (err) {
      console.error('Failed to fetch admins:', err.message);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const res = await axios.post('/admins/', formData);
      setSuccessMessage(res.data.message || 'Admin created!');
      setFormData({ name: '', email: '', password: '', role: 'admin' });
      fetchAdmins();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create admin.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      try {
        await axios.delete(`/admins/${id}`);
        fetchAdmins();
      } catch (err) {
        alert('Failed to delete admin');
      }
    }
  };

  const openModal = (admin, type) => {
    setSelectedAdmin(admin);
    setModalType(type);
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    setSelectedAdmin(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`/admins/${selectedAdmin.admin_id}`, {
        name: selectedAdmin.name,
        email: selectedAdmin.email,
        role: selectedAdmin.role,
      });
      setShowModal(false);
      fetchAdmins();
    } catch (err) {
      alert('Failed to update admin');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4 text-center text-primary">Add New Admin</Card.Title>

              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    disabled
                  >
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Add Admin
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Admin List Section */}
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4 text-primary">Current Admins</Card.Title>

              <Table striped bordered hover responsive>
                <thead className="table-primary">
                  <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map(admin => (
                    <tr key={admin.admin_id}>
                      <td>{admin.admin_id}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>{admin.role}</td>
                      <td>
                        <Button
                          variant="info"
                          size="sm"
                          className="me-2"
                          onClick={() => openModal(admin, 'view')}
                        >
                          View
                        </Button>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => openModal(admin, 'edit')}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(admin.admin_id)}
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
        </Col>
      </Row>

      {/* Modal for View or Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'edit' ? 'Edit Admin' : 'Admin Profile'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAdmin && modalType === 'view' && (
            <>
              <p><strong>ID:</strong> {selectedAdmin.admin_id}</p>
              <p><strong>Name:</strong> {selectedAdmin.name}</p>
              <p><strong>Email:</strong> {selectedAdmin.email}</p>
              <p><strong>Role:</strong> {selectedAdmin.role}</p>
            </>
          )}
          {selectedAdmin && modalType === 'edit' && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={selectedAdmin.name}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={selectedAdmin.email}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={selectedAdmin.role}
                  onChange={handleEditChange}
                >
                  <option value="admin">Admin</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        {modalType === 'edit' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default AddAdmin;
