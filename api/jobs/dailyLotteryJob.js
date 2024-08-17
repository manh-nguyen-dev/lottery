require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');
const { logInfo, logError } = require('../utils/logger');
const { getTodayDate } = require('../utils/dateUtils');
const { WEEK_DAYS_PROVINCES } = require('../constants/date');

// Constants
const API_BASE_URL = process.env.API_BASE_URL;
const CHECK_TIME = { hours: 0, minutes: 0 }; // 0:00 AM

// Helper Functions
function getProvinceForDay(day) {
  return WEEK_DAYS_PROVINCES[day] || null;
}

// API Functions
async function createResult(province_id) {
  try {
    const today = getTodayDate();
    const response = await axios.post(`${API_BASE_URL}/results`, {
      name: `Xổ số`,
      draw_date: today,
      province_id,
    });
    logInfo(`Kết quả xổ số đã được tạo: ${JSON.stringify(response.data)}`);
  } catch (error) {
    logError(`Có lỗi xảy ra khi tạo kết quả xổ số: ${error.message}`);
  }
}

function start() {
  logInfo("Cron job đã được lên lịch để tạo kết quả xổ số hàng ngày");
  
  cron.schedule(`${CHECK_TIME.minutes} ${CHECK_TIME.hours} * * *`, async () => {
    const today = new Date().getDay();
    const provinceId = getProvinceForDay(today);

    if (provinceId) {
      await createResult(provinceId);
    } else {
      logError(`Không tìm thấy tỉnh thành cho ngày: ${today}`);
    }
  });
}

module.exports = { start };
