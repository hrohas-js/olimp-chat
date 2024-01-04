const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Received message:', message);
        ws.send('Message received!');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
