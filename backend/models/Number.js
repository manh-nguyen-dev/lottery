const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const SESSION_STATUS = require('../enums/sessionStatusEnum');

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
    status: {
        type: DataTypes.INTEGER,
        defaultValue: SESSION_STATUS.SCHEDULED,
        allowNull: false
    },
    session_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'sessions',
            key: 'id'
        },
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
    tableName: 'numbers'
});

module.exports = Number;