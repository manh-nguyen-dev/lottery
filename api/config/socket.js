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

const emitNumberCreated = ({ value, provinceId, resultId, createdAt}) => {
    if (!wss) return;

    const message = JSON.stringify({ type: 'numberCreated', value, provinceId, resultId, createdAt });

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            logInfo('numberCreated', value, createdAt);
            client.send(message);
        }
    });
};

module.exports = { initWebSocket, emitNumberCreated };
