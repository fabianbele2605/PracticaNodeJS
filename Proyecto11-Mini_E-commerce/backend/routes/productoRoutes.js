const express = require('express')
const router = express.Router()
const { obtenerProductos, obtenerProducto, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productoController')
const { protegerRuta, esAdmin } = require('../middleware/auth')


// Ruta para obtener todos los productos
router.get('/', obtenerProductos)


// Ruta para obtener un producto por ID
router.get('/:id', obtenerProducto)


// Ruta para crear un nuevo producto
router.post('/', protegerRuta, esAdmin, crearProducto)


// Ruta para actualizar un producto
router.put('/:id', protegerRuta, esAdmin, actualizarProducto)


// Ruta para eliminar un producto
router.delete('/:id', protegerRuta, esAdmin, eliminarProducto)

module.exports = router