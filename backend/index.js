require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const sequelize = require("./config/database");
const sessionRoutes = require("./routes/sessionRoutes");
const { logInfo, logError } = require("./utils/logger");
const { initWebSocket } = require("./config/socket");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initWebSocket(server);

app.use(bodyParser.json());

// Sử dụng các route
app.use(cors());
app.use("/api", sessionRoutes);

// Kết nối cơ sở dữ liệu và khởi động server
sequelize
  .authenticate()
  .then(() => {
    logInfo("Kết nối cơ sở dữ liệu thành công.");
    return sequelize.sync();
  })
  .then(() => {
    server.listen(port, () => {
      logInfo(`Server đang chạy tại ${port}`);
    });
  })
  .catch((err) => {
    logError("Không thể kết nối đến cơ sở dữ liệu:", err.message);
  });

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  logError(`Lỗi: ${err.message}`);
  res.status(500).json({ error: "Đã xảy ra lỗi" });
});
