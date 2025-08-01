// import React, { useState } from 'react';
// import axios from '../api';
// import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await axios.post('/auth/login', formData);
//       const { access_token, refresh_token, user } = res.data;

//       // ✅ Save tokens to localStorage
//       localStorage.setItem('access_token', access_token);
//       localStorage.setItem('refresh_token', refresh_token);
//       localStorage.setItem('user', JSON.stringify(user));

//       // ✅ Navigate to dashboard
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={5}>
//           <Card>
//             <Card.Body>
//               <h4 className="mb-4 text-primary text-center">Admin Login</h4>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-4">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Button type="submit" className="w-100" variant="primary">
//                   Login
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import axios from '../api'; // Make sure api.js has correct baseURL

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('/auth/login', formData);

      const { access_token, user } = res.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user', JSON.stringify(user));

      if (onLogin) onLogin(user); // Optional callback
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Login failed. Please try again.';
      setError(errMsg);
    } finally {
      setLoading(false);
    }
    window.location.href = '/admin/dashboard'; // Or wherever

  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Admin Login</Card.Title>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
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

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
