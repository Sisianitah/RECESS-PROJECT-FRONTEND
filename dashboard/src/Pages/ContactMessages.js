import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/messages')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleView = (msg) => {
    setSelected(msg);
    setShow(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/api/messages/${id}`);
    setMessages(messages.filter(m => m.message_id !== id));
  };

  return (
    <div className='p-4'>
      <h4>Contact Messages</h4>
      <Table striped bordered hover>
        <thead>
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
              <td>{msg.date_sent}</td>
              <td>
                <Button size="sm" onClick={() => handleView(msg)}>View</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => handleDelete(msg.message_id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal to show full message */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>From:</strong> {selected?.customer_name} ({selected?.email})</p>
          <p><strong>Date Sent:</strong> {selected?.date_sent}</p>
          <hr />
          <p>{selected?.message}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactMessages;
