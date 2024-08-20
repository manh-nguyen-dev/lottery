const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");
const { logInfo } = require("../utils/logger");
const { stringify } = require("flatted");

let wss;

let userClients = [];
let adminClients = [];

function convertDatesToString(obj = {}) {
  // Iterate over all properties of the object
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const key in obj) {
      if (obj?.hasOwnProperty?.(key)) {
        const value = obj[key];

        // Check if the property is an array
        if (Array.isArray(value)) {
          value.forEach((item) => convertDatesToString(item));
        }
        // Check if the property is an object and not null
        else if (typeof value === "object" && value !== null) {
          convertDatesToString(value);
        }
        // Check if the property is a string representation of a date
        else if (value instanceof Date) {
          // Convert the Date object to a string
          obj[key] = value.toISOString();
        }
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item) => convertDatesToString(item));
  }
}

const initWebSocket = (server) => {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    // Gán UUID cho mỗi kết nối
    const userUUID = uuidv4();
    ws.uuid = userUUID;

    const pathname = new URL(req.url, `ws://quaythuxsmb.net//socket:${server}`)
      .pathname;

    logInfo(`Client connected with UUID: ${userUUID} ${pathname}`);

    if (pathname === "/dashboard" || pathname === "/admin") {
      ws.type = "admin";
      adminClients.push(ws);
      console.log("Admin client connected");
    } else {
      ws.type = "client";
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
      ws.uuid = userUUID;

      if (messageString === "admin") {
        console.log("Admin client connected");
        ws.type = "admin";
        adminClients.push(ws);
      } else {
        console.log("user client connected");
        ws.type = "client";
        userClients.push(ws);
      }
    });

    ws.on("error", () => {
      logInfo(`error message from UUID ${userUUID}`);
    });
  });

  logInfo("WebSocket server initialized");
};

const broadcastLotteryDataToUsers = (message = {}, senderUUID = "") => {
  const messageWithUUID = {
    ...message,
    userClients: userClients?.map(({ type, uuid }) => ({ type, uuid })),
    adminClients: adminClients?.map(({ type, uuid }) => ({ type, uuid })),
    senderUUID,
  };

  convertDatesToString(messageWithUUID);
  const customJSON = JSON.stringify(messageWithUUID);

  (userClients.length ? userClients : wss.clients).forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(customJSON);
    }
  });
};

const broadcastLotteryDataToAdmins = (message = {}, senderUUID = "") => {
  const messageWithUUID = {
    ...message,
    adminClients: adminClients?.map(({ type, uuid }) => ({ type, uuid })),
    userClients: userClients?.map(({ type, uuid }) => ({ type, uuid })),
    senderUUID,
  };

  convertDatesToString(messageWithUUID);
  const customJSON = JSON.stringify(messageWithUUID);

  (adminClients.length ? adminClients : wss.clients).forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(customJSON);
    }
  });
};

module.exports = {
  initWebSocket,
  broadcastLotteryDataToAdmins,
  broadcastLotteryDataToUsers,
};
