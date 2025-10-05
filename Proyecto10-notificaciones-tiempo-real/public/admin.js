const socket = io();

// Conectarse como admin
socket.emit('join-role', 'admin');

// Referencias a elementos HTML
const form = document.getElementById('order-form');
const clienteInput = document.getElementById('cliente-input');
const productoInput = document.getElementById('producto-input');
const notificationsList = document.getElementById('notifications-list');

// Crear nuevo pedido
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cliente = clienteInput.value.trim();
    const producto = productoInput.value.trim();

    if(cliente && producto) {
        socket.emit('nuevo-pedido', { cliente, producto });
        clienteInput.value = '';
        productoInput.value = '';
    }
});

// Recibir notificaciones
socket.on('notificacion', (data) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <strong>${data.tipo}:</strong> ${data.mensaje}
        <small>${new Date().toLocaleTimeString()}</small>
    `;
    // Insertar al inicio para mostrar las más recientes arriba
    notificationsList.insertBefore(notification, notificationsList.firstChild);
})