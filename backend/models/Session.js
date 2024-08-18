const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const SESSION_STATUS = require('../enums/sessionStatusEnum');
const Number = require('./Number');

const Session = sequelize.define('Session', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: SESSION_STATUS.SCHEDULED,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true,
    tableName: 'sessions'
});

// Define the association
Session.hasMany(Number, {
  foreignKey: 'session_id',
  as: 'numbers',
});

module.exports = Session;
