// import React, { useEffect, useState } from 'react';
// import api from '../api';

// function Payments() {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     api.get('/payments').then(res => setPayments(res.data));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>All Payments</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th><th>Booking</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map(p => (
//             <tr key={p.payment_id}>
//               <td>{p.payment_id}</td>
//               <td>{p.booking_id}</td>
//               <td>{p.amount}</td>
//               <td>{p.payment_method}</td>
//               <td>{new Date(p.payment_date).toLocaleDateString()}</td>
//               <td>{p.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Payments;









// import React, { useEffect, useState } from 'react';
// import api from '../api';

// function Customers() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     api.get('/customer/').then(res => setCustomers(res.data));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>All Customers</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map(c => (
//             <tr key={c.customer_id}>
//               <td>{c.customer_id}</td>
//               <td>{c.name}</td>
//               <td>{c.email}</td>
//               <td>{c.phone}</td>
//               <td>{c.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Customers;


// import React, { useEffect, useState } from 'react';
// import api from './api';
// import {
//   Container, Table, Button, Card, Modal, Form, Alert
// } from 'react-bootstrap';

// function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalMode, setModalMode] = useState('view'); // 'view' or 'edit'
//   const [form, setForm] = useState({});
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const res = await api.get('/customer/');
//       setCustomers(res.data);
//     } catch (err) {
//       console.error('Error fetching customers:', err);
//     }
//   };

//   const handleView = (customer) => {
//     setSelected(customer);
//     setModalMode('view');
//     setShowModal(true);
//   };

//   const handleEdit = (customer) => {
//     setForm({ ...customer });
//     setModalMode('edit');
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this customer?')) {
//       try {
//         await api.delete(`/customer/${id}`);
//         fetchCustomers();
//       } catch (err) {
//         alert('Failed to delete customer');
//       }
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await api.put(`/customer/${form.customer_id}`, form);
//       setShowModal(false);
//       fetchCustomers();
//     } catch (err) {
//       setError('Failed to update customer');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <Container className="my-5">
//       <Card className="shadow-sm">
//         <Card.Body>
//           <Card.Title className="mb-4 text-center">
//             <h3 style={{ color: '#FF9751' }}>All Customers</h3>
//           </Card.Title>

//           <Table bordered hover responsive style={{ borderColor: '#FF9751' }}>
//             <thead style={{ backgroundColor: '#FF9751', color: 'white' }}>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
              
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers.map(c => (
//                 <tr key={c.customer_id}>
//                   <td>{c.customer_id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                   {/* <td>{c.role}</td> */}
//                   <td>
//                     <Button
//                       size="sm"
//                       style={{ backgroundColor: '#FFB066', borderColor: '#FF9751', color: 'white' }}
//                       className="me-2"
//                       onClick={() => handleView(c)}
//                     >
//                       View
//                     </Button>
//                     <Button
//                       size="sm"
//                       style={{ backgroundColor: '#FF9751', borderColor: '#FF9751', color: 'white' }}
//                       className="me-2"
//                       onClick={() => handleEdit(c)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(c.customer_id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       {/* Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton style={{ backgroundColor: '#FF9751', color: 'white' }}>
//           <Modal.Title>
//             {modalMode === 'view' ? 'Customer Details' : 'Edit Customer'}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {modalMode === 'view' && selected && (
//             <>
//               <p><strong>ID:</strong> {selected.customer_id}</p>
//               <p><strong>Name:</strong> {selected.name}</p>
//               <p><strong>Email:</strong> {selected.email}</p>
//               <p><strong>Phone:</strong> {selected.phone}</p>
//               {/* <p><strong>Role:</strong> {selected.role}</p> */}
//             </>
//           )}

//           {modalMode === 'edit' && form && (
//             <Form>
//               {error && <Alert variant="danger">{error}</Alert>}

//               <Form.Group className="mb-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               {/* <Form.Group className="mb-3">
//                 <Form.Label>Role</Form.Label>
//                 <Form.Select
//                   name="role"
//                   value={form.role}
//                   onChange={handleChange}
//                 >
//                   <option value="customer">Customer</option>
//                   <option value="staff">Staff</option>
//                   <option value="admin">Admin</option>
//                 </Form.Select>
//               </Form.Group> */}
//             </Form>
//           )}
//         </Modal.Body>
//         {modalMode === 'edit' && (
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//             <Button style={{ backgroundColor: '#FF9751', borderColor: '#FF9751' }} onClick={handleUpdate}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         )}
//       </Modal>
//     </Container>
//   );
// }

// export default Customers;






import React, { useEffect, useState } from 'react';
import api from './api'
import {
  Table, Button, Container, Modal, Card, Form, Alert
} from 'react-bootstrap';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('view'); // view or edit
  const [form, setForm] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await api.get('/payments/');
      setPayments(res.data);
    } catch (err) {
      console.error('Failed to fetch payments:', err.message);
    }
  };

  const handleView = (payment) => {
    setSelected(payment);
    setModalMode('view');
    setShowModal(true);
  };

  const handleEdit = (payment) => {
    setForm({ ...payment });
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      try {
        await api.delete(`/payments/${id}`);
        fetchPayments();
      } catch (err) {
        alert('Failed to delete payment');
      }
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/payments/${form.payment_id}`, form);
      setShowModal(false);
      fetchPayments();
    } catch (err) {
      setError('Failed to update payment');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4 text-center">
            <h3 style={{ color: '#FF9751' }}>All Payments</h3>
          </Card.Title>

          <Table bordered hover responsive style={{ borderColor: '#FF9751' }}>
            <thead style={{ backgroundColor: '#FF9751', color: 'white' }}>
              <tr>
                <th>ID</th>
                <th>Booking</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.payment_id}>
                  <td>{p.payment_id}</td>
                  <td>{p.booking_id}</td>
                  <td>{p.amount}</td>
                  <td>{p.payment_method}</td>
                  <td>{new Date(p.payment_date).toLocaleDateString()}</td>
                  <td>{p.status}</td>
                  <td>
                    <Button
                      size="sm"
                      style={{ backgroundColor: '#FFB066', borderColor: '#FF9751', color: 'white' }}
                      className="me-2"
                      onClick={() => handleView(p)}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      style={{ backgroundColor: '#FF9751', borderColor: '#FF9751', color: 'white' }}
                      className="me-2"
                      onClick={() => handleEdit(p)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(p.payment_id)}
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

      {/* View & Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#FF9751', color: 'white' }}>
          <Modal.Title>
            {modalMode === 'view' ? 'Payment Details' : 'Edit Payment'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMode === 'view' && selected && (
            <>
              <p><strong>ID:</strong> {selected.payment_id}</p>
              <p><strong>Booking:</strong> {selected.booking_id}</p>
              <p><strong>Amount:</strong> {selected.amount}</p>
              <p><strong>Method:</strong> {selected.payment_method}</p>
              <p><strong>Date:</strong> {new Date(selected.payment_date).toLocaleString()}</p>
              <p><strong>Status:</strong> {selected.status}</p>
            </>
          )}

          {modalMode === 'edit' && form && (
            <Form>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form.Group className="mb-3">
                <Form.Label>Booking ID</Form.Label>
                <Form.Control
                  type="number"
                  name="booking_id"
                  value={form.booking_id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  name="payment_method"
                  value={form.payment_method}
                  onChange={handleChange}
                >
                  <option>Cash</option>
                  <option>Mobile Money</option>
                  <option>Card</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Failed</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        {modalMode === 'edit' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button style={{ backgroundColor: '#FF9751', borderColor: '#FF9751' }} onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
}

export default Payments;