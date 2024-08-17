const { Result, Number } = require('../models');
const { emitNumberCreated } = require('../config/socket');
const { logError, logInfo } = require('../utils/logger');

const PROVINCES = require('../constants/provinces');
const REGIONS = require('../constants/regions');
const { WEEK_DAYS_PROVINCES } = require('../constants/date');

// Helper function to handle errors
function handleError(res, message, error) {
    logError(message, error);
    res.status(500).json({ error: message });
}

// Hàm để tạo kết quả xổ số mới
const createResult = async (req, res) => {
    const { name, draw_date, province_id } = req.body;
    try {
        const result = await Result.create({ name, draw_date, province_id });
        res.status(201).json(result);
    } catch (error) {
        handleError(res, 'Lỗi khi tạo kết quả xổ số', error);
    }
};

// Hàm để thêm số vào kết quả xổ số
const createNumber = async (req, res) => {
    const { value, result_id, province_id } = req.body;

    try {
        const number = await Number.create({ value, result_id });

        // Emit the created number to all connected clients
        emitNumberCreated({
            value: number.value,
            provinceId: province_id,
            resultId: result_id,
            createdAt: number.createdAt,
        });

        res.status(201).json(number);
    } catch (error) {
        handleError(res, 'Lỗi khi tạo số', error);
    }
};


// Hàm để lấy kết quả xổ số theo ngày và tỉnh
const getResultsByDate = async (req, res) => {
    let { date, province_id } = req.query;

    // Nếu cả date và province_id đều null, trả về lỗi
    if (!date && !province_id) {
        return res.status(400).json({ error: 'Phải cung cấp ít nhất một trong hai: ngày hoặc tỉnh' });
    }
    
    // Nếu date không được cung cấp, sử dụng ngày hiện tại để xác định tỉnh
    if (!date) {
        const today = new Date();
        const dayOfWeek = today.getDay();

        // Lấy ngày xổ số của tỉnh dựa trên province_id
        const provinceDayOfWeek = parseInt(Object.keys(WEEK_DAYS_PROVINCES).find(key => WEEK_DAYS_PROVINCES[key] == province_id));

        let daysDifference = dayOfWeek - provinceDayOfWeek;

        // Nếu hôm nay là trước ngày xổ số của tỉnh, tính ngày xổ số của tuần trước
        if (daysDifference < 0) {
            daysDifference -= 7; // Điều chỉnh để lấy ngày của tuần trước
        }

        // Lấy ngày xổ số
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() - daysDifference);
        date = targetDate.toISOString().split('T')[0];
    }

    // Nếu province_id không được cung cấp, xác định nó dựa trên ngày trong tuần
    if (!province_id) {
        const dayOfWeek = new Date(date).getDay();
        province_id = WEEK_DAYS_PROVINCES[dayOfWeek];
    }

    const province = PROVINCES.find(p => p.id === parseInt(province_id));

    try {
        const results = await Result.findAll({
            where: {
                draw_date: date,
                ...(province_id && { province_id })
            },
            include: [
                {
                    model: Number,
                    attributes: ['value', 'createdAt'],
                    order: [['createdAt', 'DESC']]
                }
            ]
        });

        // Lấy các số từ các kết quả
        const numbers = results.flatMap(result => result.Numbers);

        // Xác định nếu có đủ 27 số
        const hasResults = numbers.length > 0;
        const allNumbersCount = numbers.length;

        //
        const requestDate = new Date(date).setUTCHours(0, 0, 0, 0);
        const today = new Date().setUTCHours(0, 0, 0, 0);

        // Get current time in HHMM format
        const currentTime = new Date().getUTCHours() * 100 + new Date().getUTCMinutes();
        const drawTime = 17 * 100; // Draw time at 17:00 in HHMM format

        // Xác định thời gian trước khi xổ số
        const isBeforeDrawTime = requestDate < today
            ? false
            : requestDate === today
                ? currentTime < drawTime
                : true;

        ///
        const region = province ? REGIONS.find(r => r.id === province.region_id) : null;

        res.json({
            numbers,
            hasResults,
            isComplete: allNumbersCount >= 27,
            isBeforeDrawTime,
            provinceName: province?.name || 'Unknown Province',
            regionName: region?.name || 'Unknown Region',
        });
    } catch (error) {
        handleError(res, 'Lỗi khi lấy kết quả xổ số theo ngày', error);
    }
};

// Hàm để lấy kết quả xổ số ngẫu nhiên cho một tỉnh
const getRandomResultByProvince = async (req, res) => {
    const { province_id } = req.query;

    if (!province_id) {
        return res.status(400).json({ error: 'Province ID không được cung cấp' });
    }

    const province = PROVINCES.find(p => p.id === parseInt(province_id));

    if (!province) {
        return res.status(400).json({ error: 'Không có tỉnh thành này' });
    }

    try {
        // Lấy tất cả kết quả xổ số cho tỉnh đã cho và có số
        const results = await Result.findAll({
            where: { province_id },
            include: [
                {
                    model: Number,
                    attributes: ['value'],
                    required: true  // Ensures that only results with associated numbers are returned
                }
            ]
        });

        if (results.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy kết quả xổ số cho tỉnh này' });
        }

        // Chọn ngẫu nhiên một kết quả từ các kết quả tìm thấy
        const randomResult = results[Math.floor(Math.random() * results.length)];

        res.json({
            drawDate: randomResult.draw_date,
            provinceName: province.name,
            numbers: randomResult.Numbers.map(number => number.value)
        });
    } catch (error) {
        handleError(res, 'Lỗi khi lấy kết quả xổ số ngẫu nhiên cho tỉnh', error);
    }
};

module.exports = {
    createResult,
    createNumber,
    getResultsByDate,
    getRandomResultByProvince,
};
