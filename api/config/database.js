const { Sequelize } = require('sequelize');
require('dotenv').config();

// Cấu hình kết nối cơ sở dữ liệu
const sequelize = new Sequelize(process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });

module.exports = sequelize;