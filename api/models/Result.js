const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Đảm bảo đường dẫn đúng

const Result = sequelize.define('Result', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    draw_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    province_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'results'
});

module.exports = Result;
