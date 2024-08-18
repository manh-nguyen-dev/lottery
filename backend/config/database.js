const { Sequelize } = require('sequelize');
require('dotenv').config();

// Cấu hình kết nối cơ sở dữ liệu
const sequelize = new Sequelize('lottery_db', 'root', '123456', {
  host: 'mysql',
  dialect: 'mysql'
});
module.exports = sequelize;