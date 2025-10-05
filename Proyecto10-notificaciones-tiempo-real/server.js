const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir archivos estaticos
app.use(express.static('public'));

// Datos en memoria
let pedidos = []
let contadorPedidos = 1;

// Rutas principales
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html')
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html')
});

app.get('/cliente', (req, res) => {
    res.sendFile(__dirname + '/public/cliente.html')
});

// Eventos de Socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id)

    // Unirse como admin o cliente
    socket.on('join-role', (role) => {
        socket.join(role);
        socket.role = role;
        console.log(`Usuario ${socket.id} se unió como ${role}`);
        
        // Si es cliente, enviar pedidos existentes
        if (role === 'cliente' && pedidos.length > 0) {
            pedidos.forEach(pedido => {
                socket.emit('pedido-actualizado', pedido);
            });
        }
    });

    // Crear nuevo pedido (solo admins)
    socket.on('nuevo-pedido', (pedidoData) => {
        const pedido = {
            id: contadorPedidos++,
            cliente: pedidoData.cliente,
            producto: pedidoData.producto,
            estado: 'Pendiente',
            fecha: new Date().toLocaleDateString()
        };

        pedidos.push(pedido);

        // Notificar a todos los admins
        io.to('admin').emit('notificacion', {
            tipo: 'nuevo-pedido',
            mensaje: `Nuevo pedido #${pedido.id} de ${pedido.cliente}`,
            pedido: pedido
        });
        
        // Notificar también a clientes
        io.to('cliente').emit('notificacion', {
            tipo: 'nuevo-pedido',
            mensaje: `Se creó tu pedido #${pedido.id} - ${pedido.producto}`,
        });
        
        // Enviar pedido inicial a clientes
        io.to('cliente').emit('pedido-actualizado', pedido);
    });

    // Simular actualizacion de pedido (para demo)
    socket.on('simular-actualizacion', () => {
        if (pedidos.length > 0) {
            const pedidoRandom = pedidos[Math.floor(Math.random() * pedidos.length)];
            const estados = ['En preparacion', 'Enviado', 'Entregado'];
            pedidoRandom.estado = estados[Math.floor(Math.random() * estados.length)];

            // Notificar a todos los clientes
            io.to('cliente').emit('notificacion', {
                tipo: 'pedido-actualizado',
                mensaje: `Tu pedido #${pedidoRandom.id} esta ${pedidoRandom.estado}`,
            });

            io.to('cliente').emit('pedido-actualizado', pedidoRandom);
        }
    });

    socket.on('disconnect',  () => {
        console.log('Usuario desconectado:', socket.id)
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Servidor de notificaciones corriendo en http://localhost:${PORT}`)
});