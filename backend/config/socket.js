const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const { logInfo } = require('../utils/logger');

let wss;

const initWebSocket = (server) => {
    wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        // Gán UUID cho mỗi kết nối
        const userUUID = uuidv4();
        ws.uuid = userUUID;
        logInfo(`Client connected with UUID: ${userUUID}`);

        ws.on('close', () => {
            logInfo(`Client disconnected with UUID: ${userUUID}`);
        });

        ws.on('message', (message) => {
            logInfo(`Received message from UUID ${userUUID}: ${message}`);
        });
    });

    logInfo('WebSocket server initialized');
};

const broadcast = (message, senderUUID) => {
    if (!wss) {
        logInfo('WebSocket server is not initialized');
        return;
    }

    const messageWithUUID = {
        ...message,
        senderUUID
    };

    logInfo(`Broadcasting message: ${JSON.stringify(messageWithUUID)}`);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(messageWithUUID));
        }
    });
};

module.exports = { initWebSocket, broadcast };
