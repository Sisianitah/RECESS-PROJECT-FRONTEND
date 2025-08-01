import { useState} from 'react' //{ React,useEffect,
import { Form,Button,Alert } from 'react-bootstrap'
import api from '../api';
// import  axios from 'axios'



const AddUser = () => {
  const [form, setForm] = useState({ name: '', email: '',phone: '',role: '',password: '',message: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // await axios.post('http://127.0.0.1:5000/api/v1/organisation/create_user', form);
  //     await axios.post('http://127.0.0.1:5000/api/customer', form);

  //     setMessage('Organisation added successfully!');
  //     setForm({ name: '', email: '',phone: '',role: '',password: '',message: '' });
  //   } catch (err) {
  //     setMessage('Error adding organisation');
  //   }


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post('/customer/', form); // 👈 use trailing slash and `api.js`
    setMessage('User added successfully!');
    setForm({ name: '', email: '', phone: '', role: '', password: '', message: '' });
  } catch (err) {
  console.error("Error response:", err.response?.data || err.message);
  setMessage(err.response?.data?.error || 'Error adding user');
}

// };



  };
  return (
    <div className="p-4" style={{backgroundColor: '#ffd6baff'}}>
      <h4>Add User</h4>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>role</Form.Label>
          <Form.Control  name="role" value={form.role} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>phone</Form.Label>
          <Form.Control  name="phone" value={form.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control  name="message" value={form.message} onChange={handleChange} required />
        </Form.Group> */}

        <Button type="submit" style={{ backgroundColor: '#FF9751', borderColor: '#FF9751', color: 'white' }}>
  Add User
</Button>

      </Form>
    </div>
    
  )
}

export default AddUser