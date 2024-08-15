const express = require('express');
const router = express.Router();
const provincesController = require('../controllers/provincesController');

// Route để lấy danh sách tỉnh thành cùng với miền
router.get('/provinces', provincesController.getProvincesWithRegion);

// Route để lấy thông tin tỉnh thành cụ thể theo ID
router.get('/provinces/:id', provincesController.getProvinceById);

module.exports = router;
