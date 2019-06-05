'use strict';

const net = require('net');

const socket = new net.Socket();
const PORT = 3001;
const CLIENT_NAME = 'localhost';

socket.connect(PORT, CLIENT_NAME, () => console.log('socket.connect'));

socket.on('data', (buffer) => {
    let text = buffer.toString().trim();
    const [eventType, eventPayload] = text.split(':');
    console.log(eventType, eventPayload);
});

socket.on('close', () => {
    console.log('connection closed');
});
