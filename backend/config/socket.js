const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");
const { logInfo } = require("../utils/logger");
const { stringify } = require("flatted");

let wss;

let userClients = [];
let adminClients = [];
const initWebSocket = (server) => {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    // Gán UUID cho mỗi kết nối
    const userUUID = uuidv4();
    ws.uuid = userUUID;

    const pathname = new URL(req.url, `ws://quaythuxsmb.net//socket:${server}`)
      .pathname;

    logInfo(`Client connected with UUID: ${userUUID}`);

    if (pathname === "/admin") {
      adminClients.push(ws);
      console.log("Admin client connected");
    } else {
      userClients.push(ws);
      console.log("User client connected");
    }

    ws.on("close", () => {
      logInfo(`Client disconnected with UUID: ${userUUID}`);
      userClients = userClients.filter((client) => client.uuid !== userUUID);
      adminClients = adminClients.filter((client) => client.uuid !== userUUID);
    });

    ws.on("message", (message) => {
      logInfo(`Received message from UUID ${userUUID}: ${message}`);
      const messageString = message?.toString();

      if (messageString === "admin") {
        console.log("Admin client connected");
        adminClients.push(ws);
      } else {
        console.log("user client connected");
        userClients.push(ws);
      }
    });

    ws.on("error", () => {
      logInfo(`error message from UUID ${userUUID}`);
    });
  });

  logInfo("WebSocket server initialized");
};

const broadcast = async (message, senderUUID) => {
  if (!wss) {
    logInfo("WebSocket server is not initialized");
    return;
  }

  const messageWithUUID = {
    ...message,
    senderUUID,
  };

  logInfo(`Broadcasting message: ${JSON.stringify(messageWithUUID)}`);
  await (wss.clients.length ? wss.clients : wsClients).forEach(
    async (client) => {
      if (client.readyState === WebSocket.OPEN) {
        await client.send(JSON.stringify(messageWithUUID));
      }
    }
  );
};

const broadcastLotteryDataToUsers = (message, senderUUID = "") => {
  const messageWithUUID = {
    ...message,
    userClients: userClients || [],
    senderUUID,
  };

  (userClients.length ? userClients : wss.clients).forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(stringify(messageWithUUID));
    }
  });
};

const broadcastLotteryDataToAdmins = (message, senderUUID = "") => {
  const messageWithUUID = {
    ...message,
    adminClients: adminClients || [],
    senderUUID,
  };

  (adminClients.length ? adminClients : wss.clients).forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(stringify(messageWithUUID));
    }
  });
};

module.exports = {
  initWebSocket,
  broadcast,
  broadcastLotteryDataToAdmins,
  broadcastLotteryDataToUsers,
};
