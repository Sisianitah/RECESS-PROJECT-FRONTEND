import React, { useEffect, useState } from 'react';
import api from './api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function DashboardHome() {
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
    <>
      <h1 style={{ color: '#FF9751', marginBottom: '30px' }}>Admin Dashboard</h1>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card title="Total Services" value={summary.total_services} />
        <Card title="Avg. Rating" value={summary.average_rating} />
      </div>

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
    </>
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

export default DashboardHome;
