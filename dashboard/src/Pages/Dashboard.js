// // // import React, { useEffect, useState } from 'react';
// // // import api from '../api';
// // // import Payments from './Payments';

// // // function Dashboard() {
// // //   const [summary, setSummary] = useState(null);

// // //   useEffect(() => {
// // //     api.get('/dashboard/summary').then(res => setSummary(res.data));
// // //   }, []);

// // //   if (!summary) return <p>Loading...</p>;

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <h1>Admin Dashboard</h1>
// // //       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
// // //         <Card title="Total Customers" value={summary.total_customers} />
// // //         <Card title="Total Services" value={summary.total_services} />
// // //         <Card title="Total Payments" value={summary.total_payments} />
// // //         <Card title="Total Revenue" value={`UGX ${summary.total_revenue}`} />
// // //         <Card title="Avg. Rating" value={summary.average_rating} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function Card({ title, value }) {
// // //   return (
// // //     <div style={{ background: '#f4f4f4', padding: 20, borderRadius: 10, minWidth: 200 }}>
// // //       <h4>{title}</h4>
// // //       <p style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</p>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;









// // import React, { useEffect, useState } from 'react';
// // import api from '../api';
// // import Payments from './Payments'; // ✅ Make sure the path is correct

// // function Dashboard() {
// //   const [summary, setSummary] = useState(null);

// //   useEffect(() => {
// //     api.get('/dashboard/summary').then(res => setSummary(res.data));
// //   }, []);

// //   if (!summary) return <p>Loading...</p>;

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Admin Dashboard</h1>
// //       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
// //         <Card title="Total Customers" value={summary.total_customers} />
// //         <Card title="Total Services" value={summary.total_services} />
// //         <Card title="Total Payments" value={summary.total_payments} />
// //         <Card title="Total Revenue" value={`UGX ${summary.total_revenue}`} />
// //         <Card title="Avg. Rating" value={summary.average_rating} />
// //       </div>

// //       <hr style={{ margin: '40px 0' }} />

// //       {/* ✅ Insert Payments component here */}
// //       <Payments />
// //     </div>
// //   );
// // }

// // function Card({ title, value }) {
// //   return (
// //     <div style={{ background: '#f4f4f4', padding: 20, borderRadius: 10, minWidth: 200 }}>
// //       <h4>{title}</h4>
// //       <p style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</p>
// //     </div>
// //   );
// // }

// // export default Dashboard;





// import React, { useEffect, useState } from 'react';
// import api from '../api';
// import Payments from './Payments';
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
//     { name: 'Customers', value: summary.total_customers },
//     { name: 'Services', value: summary.total_services },
//     { name: 'Payments', value: summary.total_payments },
//     { name: 'Revenue', value: summary.total_revenue },
//     { name: 'Rating', value: summary.average_rating },
//   ];

//   return (
//     <div style={{ padding: '30px', backgroundColor: '#e6f0fa', minHeight: '100vh' }}>
//       <h1 style={{ color: '#005b96', marginBottom: '30px' }}>Admin Dashboard</h1>

//       {/* Summary Cards */}
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         <Card title="Total Customers" value={summary.total_customers} />
//         <Card title="Total Services" value={summary.total_services} />
//         <Card title="Total Payments" value={summary.total_payments} />
//         <Card title="Total Revenue" value={`UGX ${summary.total_revenue}`} />
//         <Card title="Avg. Rating" value={summary.average_rating} />
//       </div>

//       {/* Revenue Chart */}
//       <div style={{ marginTop: '50px', background: '#ffffff', padding: '30px', borderRadius: '15px' }}>
//         <h2 style={{ color: '#005b96' }}>Overview Chart</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#3399ff" radius={[5, 5, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <hr style={{ margin: '50px 0', borderColor: '#ccc' }} />

//       {/* Payments Component */}
//       <Payments />
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
//       <h4 style={{ color: '#3399ff', marginBottom: 10 }}>{title}</h4>
//       <p style={{ fontSize: 28, fontWeight: 'bold' }}>{value}</p>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import api from '../api';
import Payments from './Payments';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

function Dashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    api.get('/dashboard/summary').then(res => setSummary(res.data));
  }, []);

  if (!summary) return <p>Loading...</p>;

  const chartData = [
    { name: 'Customers', value: summary.total_customers },
    { name: 'Services', value: summary.total_services },
    { name: 'Payments', value: summary.total_payments },
    { name: 'Revenue', value: summary.total_revenue },
    { name: 'Rating', value: summary.average_rating },
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#FFF3E5', minHeight: '100vh' }}>
      <h1 style={{ color: '#FF9751', marginBottom: '30px' }}>Admin Dashboard</h1>

      {/* Summary Cards */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card title="Total Customers" value={summary.total_customers} />
        <Card title="Total Services" value={summary.total_services} />
        <Card title="Total Payments" value={summary.total_payments} />
        <Card title="Total Revenue" value={`UGX ${summary.total_revenue}`} />
        <Card title="Avg. Rating" value={summary.average_rating} />
      </div>

      {/* Revenue Chart */}
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

      {/* Payments Component */}
      <Payments />
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

export default Dashboard;
