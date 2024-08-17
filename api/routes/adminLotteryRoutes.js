const express = require('express');
const router = express.Router();
const adminLotteryController = require('../controllers/adminLotteryController');

// Route để thêm danh sách số cho kết quả xổ số đã có sẵn
router.post('/numbers', adminLotteryController.createNumbersWithExistingResult);

module.exports = router;
