const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir archivos estaticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Eventos de Socket.io
io.on('connection', (socket) => {
    console.log('Usuario Conectado:', socket.id);
    
    // Evento para unirse al chat
    socket.on('join', (username) => {
        socket.username = username;
        console.log(`${username} se unió al chat`);
        socket.broadcast.emit('chat message', `${username} se unió al chat`);
    });

    // Evento de desconexion
    socket.on('disconnect', () => {
        if (socket.username) {
            console.log(`${socket.username} se desconectó`);
            socket.broadcast.emit('chat message', `${socket.username} se desconectó`);
        }
    });

    // Evento para recibir mensajes
    socket.on('chat message', (msg) => {
        const messageWithUser = `${socket.username}: ${msg}`;
        console.log('Mensaje recibido:', messageWithUser);
        io.emit('chat message', messageWithUser);
    });

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


