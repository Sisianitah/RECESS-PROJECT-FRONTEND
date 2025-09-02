// import React, { useEffect, useState } from 'react';
// import api from './api';

// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
// } from 'recharts';

// function Dashboard() {
//   const [summary, setSummary] = useState(null);

//   useEffect(() => {
//     api.get('/dashboard/summary').then(res => setSummary(res.data));
//   }, []);

//   if (!summary) return <p>Loading...</p>;

//   const chartData = [
//     { name: 'Services', value: summary.total_services },
//     { name: 'Rating', value: summary.average_rating },
//   ];

//   return (
//     <div style={{ padding: '30px', backgroundColor: '#FFF3E5', minHeight: '100vh' }}>
//       <h1 style={{ color: '#FF9751', marginBottom: '30px' }}>Admin Dashboard</h1>

//       {/* Summary Cards */}
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         <Card title="Total Services" value={summary.total_services} />
//         <Card title="Avg. Rating" value={summary.average_rating} />
//       </div>

//       {/* Chart */}
//       <div style={{ marginTop: '50px', background: '#ffffff', padding: '30px', borderRadius: '15px' }}>
//         <h2 style={{ color: '#FF9751' }}>Overview Chart</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#FF9751" radius={[5, 5, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <hr style={{ margin: '50px 0', borderColor: '#FFA366' }} />

      
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div style={{
//       background: '#ffffff',
//       padding: 20,
//       borderRadius: 15,
//       minWidth: 220,
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       color: '#333',
//       flex: '1 1 200px'
//     }}>
//       <h4 style={{ color: '#FF9751', marginBottom: 10 }}>{title}</h4>
//       <p style={{ fontSize: 28, fontWeight: 'bold' }}>{value}</p>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/RBG CAR LOGO.png'; // ✅ Adjust path if needed
import api from './api';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

function AdminDashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    api.get('/dashboard/summary').then(res => setSummary(res.data));
  }, []);

  if (!summary) return <p>Loading...</p>;

  const chartData = [
    { name: 'Services', value: summary.total_services },
    { name: 'Rating', value: summary.average_rating },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: '#FF9751',
          color: 'white',
          height: '100vh',
          padding: '1rem',
          width: '250px',
          position: 'fixed'
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src={logo}
            alt="Car A-C Masters Logo"
            style={{ width: '120px', borderRadius: '8px' }}
          />
        </div>

        <h4 className="mb-4 text-center">Car Ac Masters Dashboard</h4>

        <Nav className="flex-column">
         <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
<Nav.Link as={Link} to="/admin/customers" className="text-white">Manage Customers</Nav.Link>
<Nav.Link as={Link} to="/admin/bookings" className="text-white">Manage Bookings</Nav.Link>
<Nav.Link as={Link} to="/admin/services" className="text-white">Manage Services</Nav.Link>
<Nav.Link as={Link} to="/admin/payments" className="text-white">Manage Payments</Nav.Link>
<Nav.Link as={Link} to="/admin/testimonials" className="text-white">Manage Testimonials</Nav.Link>
<Nav.Link as={Link} to="/admin/contact-messages" className="text-white">Contact Messages</Nav.Link>
<Nav.Link as={Link} to="/admin/profile" className="text-white">My Profile</Nav.Link>

        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '250px', flex: 1, padding: '30px', backgroundColor: '#FFF3E5' }}>
        <h1 style={{ color: '#FF9751', marginBottom: '30px' }}>Admin Dashboard</h1>

        {/* Summary Cards */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Card title="Total Services" value={summary.total_services} />
          <Card title="Avg. Rating" value={summary.average_rating} />
        </div>

        {/* Chart */}
        <div style={{ marginTop: '50px', background: '#ffffff', padding: '30px', borderRadius: '15px' }}>
          <h2 style={{ color: '#FF9751' }}>Overview Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FF9751" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <hr style={{ margin: '50px 0', borderColor: '#FFA366' }} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      background: '#ffffff',
      padding: 20,
      borderRadius: 15,
      minWidth: 220,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      color: '#333',
      flex: '1 1 200px'
    }}>
      <h4 style={{ color: '#FF9751', marginBottom: 10 }}>{title}</h4>
      <p style={{ fontSize: 28, fontWeight: 'bold' }}>{value}</p>
    </div>
  );
}

export default AdminDashboard;


