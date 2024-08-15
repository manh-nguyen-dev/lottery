const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

// Import các model
const Result = require('./Result');
const Number = require('./Number');

// Thiết lập mối quan hệ giữa các model
Result.hasMany(Number, { foreignKey: 'result_id' });
Number.belongsTo(Result, { foreignKey: 'result_id' });

// Xuất các model và sequelize
module.exports = {
    sequelize,
    Result,
    Number
};
