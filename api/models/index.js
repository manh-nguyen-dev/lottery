const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Session = require('./Session');
const Number = require('./Number');

// Thiết lập mối quan hệ giữa các models
Session.hasMany(Number, { foreignKey: 'session_id' });
Number.belongsTo(Session, { foreignKey: 'session_id' });

// Export các models để sử dụng trong các phần khác của ứng dụng
module.exports = {
  sequelize,
  Session,
  Number,
};

