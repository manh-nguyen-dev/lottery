const { Number, sequelize } = require('../models');
const { logError, logInfo } = require('../utils/logger');
const adminCronJob = require('../jobs/adminCronJob');

// Helper function to handle errors
const handleError = (res, message, error) => {
    logError(message, error);
    return res.status(500).json({ error: message });
};

// Thêm kết quả số xố vào hệ thống
const createNumbersWithExistingResult = async (req, res) => {
    const { result_id, numbers } = req.body;

    // Validate input
    if (!result_id) return res.status(400).json({ error: 'Phải cung cấp result_id' });
    if (!Array.isArray(numbers) || numbers.length !== 27) {
        return res.status(400).json({ error: 'Phải nhập đủ danh sách giải' });
    }

    try {
        const numberRecords = numbers.map(value => ({ value, result_id }));

        await sequelize.transaction(async (transaction) => {
            await Number.bulkCreate(numberRecords, { transaction });
        });

        logInfo(`Successfully created 27 numbers for result_id ${result_id}`);
        adminCronJob.start(result_id, numberRecords);
        return res.status(201).json({ result_id, numbers: numberRecords });
    } catch (error) {
        return handleError(res, 'Lỗi khi tạo số cho kết quả xổ số', error);
    }
};

module.exports = {
    createNumbersWithExistingResult,
};
