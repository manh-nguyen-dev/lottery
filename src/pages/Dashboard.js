import React from 'react';
import AdminPrizeTable from '../components/adminPrizeTable';
import { provinces } from '../components/provinces';
import { WEEK_DAYS_PROVINCES } from '../const/date';
import "../styles/adminPrizeTable.css";

const getProvinceByDay = () => {
  const today = new Date().getDay();
  const provinceId = WEEK_DAYS_PROVINCES[today];
  return provinceId;
};

const getProvinceName = (provinceId) => {
  const province = provinces.find(p => p.id === provinceId);
  return province ? province.name : 'Unknown';
};

const Dashboard = ({ numbers }) => {
  const provinceId = getProvinceByDay();
  const provinceName = getProvinceName(provinceId);

  return (
    <div className="dashboardContainer">
      <div className="header">
        <h1 className="title">Xổ số miền bắc hôm nay</h1>
        <h2 className="subtitle">Tỉnh thành: {provinceName}</h2>
      </div>
      <div className="adminPrizeTable">
        <AdminPrizeTable numbers={numbers} />
      </div>
    </div>
  );
};

export default Dashboard;
