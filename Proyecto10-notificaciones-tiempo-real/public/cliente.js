const socket = io();

// Conectarse como cliente
socket.emit('join-role', 'cliente');

// Referencia a elementos HTML
const notificationsList = document.getElementById('notifications-list');
const ordersList = document.getElementById('orders-list');
const simulateBtn = document.getElementById('simulate-btn');

// Simular cambio de estado de pedido
simulateBtn.addEventListener('click', () => {
    socket.emit('simular-actualizacion');
});

// Recibir notificaciones
socket.on('notificacion', (data) => {
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    notificacion.innerHTML = `
        <strong>${data.tipo}:</strong> ${data.mensaje}
        <small>${new Date().toLocaleTimeString()}</small>
        `;
    // Insertar al inicio para mostrar las más recientes arriba
    notificationsList.insertBefore(notificacion, notificationsList.firstChild);
});

// Recibir actualizacion de pedidos
socket.on('pedido-actualizado', (pedido) => {
    // Limpiar mensaje inicial si existe
    const emptyMessage = ordersList.querySelector('p');
    if (emptyMessage) {
        emptyMessage.remove();
    }
    
    // Verificar si el pedido ya existe
    const existingOrder = ordersList.querySelector(`[data-pedido-id="${pedido.id}"]`);
    
    if (existingOrder) {
        // Actualizar pedido existente
        existingOrder.innerHTML = `
            <strong>Pedido #${pedido.id}</strong> - ${pedido.producto}
            <br>Cliente: ${pedido.cliente}
            <br>Estado: <span class="estado-${pedido.estado.toLowerCase().replace(' ', '-')}">${pedido.estado}</span>
            <br>Fecha: ${pedido.fecha}
        `;
    } else {
        // Crear nuevo pedido
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item';
        orderDiv.setAttribute('data-pedido-id', pedido.id);
        orderDiv.innerHTML = `
            <strong>Pedido #${pedido.id}</strong> - ${pedido.producto}
            <br>Cliente: ${pedido.cliente}
            <br>Estado: <span class="estado-${pedido.estado.toLowerCase().replace(' ', '-')}">${pedido.estado}</span>
            <br>Fecha: ${pedido.fecha}
        `;
        ordersList.appendChild(orderDiv);
    }
});