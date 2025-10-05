const express = require('express')
const router = express.Router()
const { crearPedido, obtenerPedidosUsuario, obtenerTodosPedidos, actualizarEstadoPedido } = require('../controllers/pedidoController')
const { protegerRuta, esAdmin } = require('../middleware/auth')

// Crear pedido
router.post('/', protegerRuta, crearPedido)

// Obtener pedidos del usuario
router.get('/mis-pedidos', protegerRuta, obtenerPedidosUsuario)

// Obtener todos los pedidos (admin)
router.get('/', protegerRuta, esAdmin, obtenerTodosPedidos)

// Actualizar estado del pedido
router.put('/:id', protegerRuta, esAdmin, actualizarEstadoPedido)

module.exports = router