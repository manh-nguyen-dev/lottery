const { Session, Number } = require("../models");
const SESSION_STATUS = require("../enums/sessionStatusEnum");
const { broadcast } = require("../config/socket");
const { logInfo } = require("../utils/logger");

// Hàm tạo mới session cùng với các number
const createSessionWithNumbers = async (req, res) => {
  try {
    // Tìm session gần nhất với trạng thái ONGOING
    let targetSession = await Session.findOne({
      where: { status: SESSION_STATUS.ONGOING },
      order: [["updatedAt", "DESC"]],
      include: [
        {
          model: Number,
          as: "numbers",
        },
      ],
    });

    // Nếu không tìm thấy session ONGOING, tìm session gần nhất bất kỳ
    if (!targetSession) {
      targetSession = await Session.findOne({
        order: [["updatedAt", "DESC"]],
        include: [
          {
            model: Number,
            as: "numbers",
          },
        ],
      });
    }

    if (targetSession) {
      const numbersList = targetSession.numbers.map(
        (num) => num.dataValues.value
      );
      const rotatedNumbers = [...numbersList.slice(1), numbersList[0]];
      broadcast({
        event: "numbersList",
        numbers: rotatedNumbers,
        status: targetSession.status,
        sessionId: targetSession.id,
      });
    }

    res.status(201).json();
  } catch (error) {
    console.error("Error creating session with numbers:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the session" });
  }
};

// Hàm cập nhật trạng thái session thành ONGOING
const updateSessionStatusToOngoing = async (req, res) => {
  const { id } = req.params;

  try {
    // Tìm session theo ID
    const session = await Session.findByPk(id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Cập nhật trạng thái thành ONGOING
    session.status = SESSION_STATUS.ONGOING;
    await session.save();

    // Phát sự kiện WebSocket khi session đang được thử
    broadcast({
      event: "sessionOnGoing",
      sessionId: session.id,
      completedAt: session.updatedAt,
    });

    res.status(200).json({
      message: "Session status updated to ONGOING successfully",
      session,
    });
  } catch (error) {
    console.error("Error updating session status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Hàm cập nhật trạng thái session thành COMPLETED
const updateSessionStatusToCompleted = async (req, res) => {
  const { id } = req.params;

  try {
    // Tìm session theo ID
    const session = await Session.findByPk(id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Cập nhật trạng thái thành COMPLETED
    session.status = SESSION_STATUS.COMPLETED;
    await session.save();

    // Phát sự kiện WebSocket khi session hoàn thành
    broadcast({
      event: "sessionCompleted",
      sessionId: session.id,
      completedAt: session.updatedAt,
    });

    res.status(200).json({
      message: "Session status updated to COMPLETED successfully",
      session,
    });
  } catch (error) {
    console.error("Error updating session status:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the session status" });
  }
};

// Hàm lấy 5 session gần nhất cùng với các số bên trong
const getRecentSessions = async (req, res) => {
  try {
    // Truy vấn lấy 5 session gần nhất cùng với các số liên quan
    const sessions = await Session.findAll({
      order: [["createdAt", "DESC"]], // Sắp xếp theo createdAt giảm dần
      limit: 5, // Lấy 5 session gần nhất
      include: [
        {
          model: Number,
          as: "numbers", // Đảm bảo tên alias phải giống như đã định nghĩa trong model
        },
      ],
    });

    // Sort lại
    sessions.reverse();

    // Trả về danh sách session kèm theo các số bên trong
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Error fetching recent sessions with numbers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Hàm cập nhật một số theo ID
const updateNumber = async (req, res) => {
  const { id } = req.params;
  const { value, session_id } = req.body;

  try {
    // Tìm số theo ID
    const number = await Number.findByPk(id);

    if (!number) {
      return res.status(404).json({ error: "Number not found" });
    }

    // Cập nhật giá trị và session_id (nếu có)
    if (value !== undefined) {
      number.value = value;
    }
    if (session_id !== undefined) {
      number.session_id = session_id;
    }

    // Lưu thay đổi
    await number.save();

    res.status(200).json({
      message: "Number updated successfully",
      number,
    });
  } catch (error) {
    console.error("Error updating number:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  updateSessionStatusToOngoing,
  updateSessionStatusToCompleted,
  createSessionWithNumbers,
  getRecentSessions,
  updateNumber,
};
