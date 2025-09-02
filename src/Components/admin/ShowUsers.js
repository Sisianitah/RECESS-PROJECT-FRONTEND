// import { React,useEffect,useState} from 'react'
// import { Table } from 'react-bootstrap'
// import  axios from 'axios'


// const ShowUsers = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios.get('http://127.0.0.1:5000/api/v1/organisation/create_user')
//       .then(response => setUsers(response.data))
//       .catch(err => console.error(err));
//   }, []);
//   return (
//     <div className="p-4">
//       <h4>All Users</h4>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u, index) => (
//             <tr key={u.id}>
//               <td>{index + 1}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   )
// }

// export default ShowUsers




// import { React, useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
// import axios from 'axios';

// const ShowUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:5000/api/customer/')
//       .then(response => setUsers(response.data))
//       .catch(err => console.error("Failed to fetch users:", err));
//   }, []);

//   return (
//     <div className="p-4">
//       <h4>All Users</h4>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="3" className="text-center">No users found</td>
//             </tr>
//           ) : (
//             users.map((u, index) => (
//               <tr key={u.customer_id}>
//                 <td>{index + 1}</td>
//                 <td>{u.name}</td>
//                 <td>{u.email}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ShowUsers;





import { React, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/customer/')
      .then(response => setUsers(response.data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://127.0.0.1:5000/api/customer/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.customer_id !== id));
        })
        .catch(err => console.error("Delete failed:", err));
    }
  };

  const handleEdit = (user) => {
    const newName = prompt("Enter new name:", user.name);
    const newEmail = prompt("Enter new email:", user.email);

    if (newName && newEmail) {
      axios.put(`http://127.0.0.1:5000/api/customer/${user.customer_id}`, {
        name: newName,
        email: newEmail
      })
        .then(response => {
          setUsers(users.map(u =>
            u.customer_id === user.customer_id ? response.data : u
          ));
        })
        .catch(err => console.error("Update failed:", err));
    }
  };

  return (
    <div className="p-4">
      <h4>All Users</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No users found</td>
            </tr>
          ) : (
            users.map((u, index) => (
              <tr key={u.customer_id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(u)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(u.customer_id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowUsers;
