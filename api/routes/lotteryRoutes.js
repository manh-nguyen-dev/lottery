const express = require('express');
const router = express.Router();
const lotteryController = require('../controllers/lotteryController');

// Route để thêm kết quả xổ số mới
router.post('/results', lotteryController.createResult);

// Route để thêm số vào kết quả xổ số
router.post('/numbers', lotteryController.createNumber);

// Route để xem kết quả xổ số theo ngày và tỉnh
router.get('/draw-results', lotteryController.getResultsByDate);

// Route để lấy kết quả xổ số trước đó cho một tỉnh
router.get('/random-province-result', lotteryController.getRandomResultByProvince);

module.exports = router;
