const PROVINCES = require('../constants/provinces');
const REGIONS = require('../constants/regions');
const { logError } = require('../utils/logger');

// Hàm để lấy tất cả tỉnh thành và miền của chúng
const getProvincesWithRegion = (req, res) => {
    try {
        // Kết hợp dữ liệu tỉnh thành với miền
        const provincesWithRegion = PROVINCES.map(province => {
            const region = REGIONS.find(r => r.id === province.region_id);
            return {
                id: province.id,
                name: province.name,
                region_id: province.region_id,
                region_name: region ? region.name : 'Unknown'
            };
        });

        res.json(provincesWithRegion);
    } catch (error) {
        logError('Lỗi khi lấy danh sách tỉnh thành:', error);
        res.status(500).json({ error: 'Lỗi khi lấy danh sách tỉnh thành' });
    }
};

// Hàm để lấy thông tin tỉnh thành cụ thể
const getProvinceById = (req, res) => {
    try {
        const { id } = req.params;
        const province = PROVINCES.find(p => p.id === parseInt(id, 10));

        if (!province) {
            return res.status(404).json({ error: 'Tỉnh thành không tìm thấy' });
        }

        const region = REGIONS.find(r => r.id === province.region_id);

        res.json({
            id: province.id,
            name: province.name,
            region_id: province.region_id,
            region_name: region ? region.name : 'Unknown'
        });
    } catch (error) {
        logError('Lỗi khi lấy thông tin tỉnh thành:', error);
        res.status(500).json({ error: 'Lỗi khi lấy thông tin tỉnh thành' });
    }
};

module.exports = {
    getProvincesWithRegion,
    getProvinceById,
};
