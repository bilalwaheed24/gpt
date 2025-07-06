
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('message', (data) => {
        io.emit('message', data);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.get('/', (req, res) => {
    res.send("Backend is running");
});

server.listen(3000, () => console.log('Server running on port 3000'));
