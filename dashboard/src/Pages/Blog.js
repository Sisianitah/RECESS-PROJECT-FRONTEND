import React, { useState, useEffect } from 'react';
import api from '../api';
import { Button, Form, Table, Modal } from 'react-bootstrap';

function Blog() {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    date_posted: ''
  });

  const [showModal, setShowModal] = useState(false); //modal state

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  useEffect(() => {
    fetchArticles();
  }, []);

  // const fetchArticles = async () => {
  //   const res = await api.get('/articles/');
  //   setArticles(res.data);
  // };

  const fetchArticles = async () => {
  try {
    const res = await api.get('/articles/');
    console.log('Fetched articles:', res.data);  // Add this line
    setArticles(res.data);
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};


  const handleEdit = (article) => {
  setEditingArticle(article);
  setFormData(article);
  handleShowModal(); // 👈 Open the modal
};


  const handleDelete = async (id) => {
    await api.delete(`/articles/${id}`);
    fetchArticles();
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingArticle) {
      await api.put(`/articles/${editingArticle.id}`, formData);
    } else {
      await api.post('/articles/', formData);
    }
    setEditingArticle(null);
    setFormData({ title: '', content: '', author: '', date_posted: '' });
    fetchArticles();
  };

  return (
    <div>
      <h2>Blog Articles</h2>
      <hr />


      <Button className="mb-3" variant="primary" onClick={() => {
        setEditingArticle(null); // Ensure it's a new article
        setFormData({ title: '', content: '', author: '', date_posted: '' });
        handleShowModal();
        }}>
          Create New Article
      </Button>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.author}</td>
              <td>{article.date_posted}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEdit(article)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(article.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>{editingArticle ? 'Edit Article' : 'Create Article'}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" value={formData.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" name="content" value={formData.content} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control name="author" value={formData.author} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date Posted</Form.Label>
        <Form.Control type="date" name="date_posted" value={formData.date_posted} onChange={handleChange} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Cancel
    </Button>
    <Button variant="primary" onClick={() => {
      handleSubmit();
      handleCloseModal();
    }}>
      {editingArticle ? 'Update' : 'Create'}
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
}

export default Blog;
