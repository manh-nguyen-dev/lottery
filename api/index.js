require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const sequelize = require('./config/database');
const lotteryRoutes = require('./routes/lotteryRoutes');
const provincesRoutes = require('./routes/provincesRoutes');
const adminLotteryRoutes = require('./routes/adminLotteryRoutes');
const { logInfo, logError } = require('./utils/logger');
const { start } = require('./jobs/cronJob');
const dailyLotteryJob = require('./jobs/dailyLotteryJob');
const { initWebSocket } = require('./config/socket');

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initWebSocket(server);

app.use(bodyParser.json());

// Các routes chính cho ứng dụng
app.use('/api', lotteryRoutes);
app.use('/api', provincesRoutes);

// Các routes quản trị viên
app.use('/api/admin', adminLotteryRoutes);

// Kết nối cơ sở dữ liệu và khởi động server
sequelize.authenticate()
  .then(() => {
    logInfo('Kết nối cơ sở dữ liệu thành công.');
    return sequelize.sync();
  })
  .then(() => {
    server.listen(port, () => {
      logInfo(`Server đang chạy tại http://localhost:${port}`);
      start(17);
      dailyLotteryJob.start();
    });
  })
  .catch(err => {
    logError('Không thể kết nối đến cơ sở dữ liệu:', err.message);
  });

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  logError(`Lỗi: ${err.message}`);
  res.status(500).json({ error: 'Đã xảy ra lỗi' });
});

