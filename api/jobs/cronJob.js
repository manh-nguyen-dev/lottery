require("dotenv").config();

const cron = require("node-cron");
const axios = require("axios");
const { logInfo, logError } = require("../utils/logger");
const { getTodayDate } = require("../utils/dateUtils");

// Constants
const API_BASE_URL = process.env.API_BASE_URL;
const CHECK_TIME = { hours: 21, minutes: 59 };
const ADD_NUMBER_INTERVAL = 1000; // 1 second
const MAX_COUNT = 27;

// Helper Functions
function generateFixedLengthNumber(length) {
  if (length <= 0) throw new Error("Length must be a positive integer");
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getValueForIndex(index) {
  if (index >= 0 && index <= 8) return 5;
  if (index >= 9 && index <= 18) return 4;
  if (index >= 19 && index <= 21) return 3;
  if (index >= 22 && index <= 25) return 2;
  if (index === 26) return 5;
  throw new Error("Index out of range");
}

// API Functions
async function createResult(province_id) {
  try {
    const today = getTodayDate();
    const response = await axios.post(`${API_BASE_URL}/results`, {
      name: `Xổ số ngày ${today}`,
      draw_date: today,
      province_id,
    });
    logInfo(`Kết quả xổ số đã được tạo: ${JSON.stringify(response.data)}`);
    return response.data.id;
  } catch (error) {
    logError(`Có lỗi xảy ra khi tạo kết quả xổ số: ${error.message}`);
    return null;
  }
}

async function addRandomNumber(resultId, fixedLength) {
  try {
    const value = generateFixedLengthNumber(fixedLength);
    await axios.post(`${API_BASE_URL}/numbers`, {
      value,
      result_id: resultId,
    });
    logInfo("Số đã được thêm:", value);
  } catch (error) {
    logError("Có lỗi xảy ra khi thêm số:", error.message);
  }
}

async function checkAndCreateResult(provinceId) {
  try {
    const today = new Date().toISOString().split("T")[0];
    const response = await axios.get(`${API_BASE_URL}/draw-results`, {
      params: { date: today, province_id: provinceId },
    });
    logInfo("Response URL:", response.config.url);

    if (response.data.numbers.length === 0) {
      const resultId = await createResult(provinceId);
      if (resultId) startAddingNumbers(resultId);
    } else {
      logInfo("Kết quả xổ số đã tồn tại!");
    }
  } catch (error) {
    logError("Có lỗi xảy ra khi kiểm tra và tạo kết quả xổ số:", error.message);
  }
}

function startAddingNumbers(resultId) {
  logInfo("Bắt đầu thêm số ngẫu nhiên mỗi giây");
  let count = 0;
  const interval = setInterval(async () => {
    if (count < MAX_COUNT) {
      await addRandomNumber(resultId, getValueForIndex(count));
      count++;
    } else {
      clearInterval(interval);
      logInfo("Kết thúc việc thêm số ngẫu nhiên");
    }
  }, ADD_NUMBER_INTERVAL);
}

// Cron Job Setup
function start(provinceId) {
  logInfo("Cron job đã được lên lịch");
  cron.schedule(`${CHECK_TIME.minutes} ${CHECK_TIME.hours} * * *`, () => {
    checkAndCreateResult(provinceId);
  });
}

module.exports = { start };
