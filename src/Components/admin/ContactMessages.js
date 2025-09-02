import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/messages')
      .then(res => {
        // Sort messages by recent date (descending)
        const sorted = res.data.sort((a, b) => new Date(b.date_sent) - new Date(a.date_sent));
        setMessages(sorted);
      })
      .catch(err => console.error(err));
  }, []);

  const handleView = (msg) => {
    setSelected(msg);
    setShow(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/api/messages/${id}`);
    setMessages(prev => prev.filter(m => m.message_id !== id));
  };

  return (
    <div className='p-4' style={{ backgroundColor: '#fff3eb' }}>
      <h4 style={{ color: '#FF9751' }}>Contact Messages</h4>
      <Table striped bordered hover>
        <thead style={{ backgroundColor: '#FF9751', color: 'white' }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Date Sent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(msg => (
            <tr key={msg.message_id}>
              <td>{msg.customer_name}</td>
              <td>{msg.email}</td>
              <td>{msg.subject}</td>
              <td>{new Date(msg.date_sent).toLocaleString()}</td>
              <td>
                <Button size="sm" variant="info"  style={{ backgroundColor: '#FF9751', borderColor: '#FF9751' }} onClick={() => handleView(msg)}>View</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => handleDelete(msg.message_id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal to show full message */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton style={{ backgroundColor: '#FF9751', color: 'white' }}>
          <Modal.Title>{selected?.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>From:</strong> {selected?.customer_name} ({selected?.email})</p>
          <p><strong>Date Sent:</strong> {new Date(selected?.date_sent).toLocaleString()}</p>
          <hr />
          <p>{selected?.message}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactMessages;
