const sequelize = require('../config/database');
const { logInfo, logError } = require('../utils/logger');

// Khởi tạo cơ sở dữ liệu và bảng
const initializeDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        logInfo('Database & tables created!');
    } catch (error) {
        logError('Error creating database & tables:', error);
    }
};

// Gọi hàm để khởi tạo
initializeDatabase();
