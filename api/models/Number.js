const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Result = require('./Result');

const Number = sequelize.define('Number', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    result_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Result,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'numbers'
});

module.exports = Number;
