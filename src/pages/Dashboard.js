import React from 'react';
import AdminPrizeTable from '../components/adminPrizeTable';

const Dashboard = ({ numbers }) => (
  <div>
    <h1>Dashboard Page</h1>
    <AdminPrizeTable numbers={numbers} />
  </div>
);

export default Dashboard;
