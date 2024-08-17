const WebSocket = require('ws');
const { logInfo } = require('../utils/logger');

let wss;

const initWebSocket = (server) => {
    wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        logInfo('A client connected');

        ws.on('close', () => {
            logInfo('Client disconnected');
        });

        // Optionally handle messages from clients
        ws.on('message', (message) => {
            logInfo(`Received message: ${message}`);
        });
    });
};

// Function to broadcast messages to all connected clients
const broadcast = (message) => {
    logInfo(JSON.stringify(message));
    if (!wss) return;

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            logInfo(JSON.stringify(message));
            client.send(JSON.stringify(message));
        }
    });
};

module.exports = { initWebSocket, broadcast };
