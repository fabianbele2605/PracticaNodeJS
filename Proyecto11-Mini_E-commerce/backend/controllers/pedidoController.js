const Pedido = require('../models/Pedido')
const Producto = require('../models/Producto')

// Crear pedido
const crearPedido = async (req, res) => {
    const { productos, direccion } = req.body
    try {
        let total = 0
        const productosConPrecio = []

        for (const item of productos) {
            const producto = await Producto.findById(item.producto)
            if (!producto) {
                return res.status(404).json({ error: `Producto ${item.producto} no encontrado` })
            }
            if (producto.stock < item.cantidad) {
                return res.status(400).json({ error: `Stock insuficiente para ${producto.nombre}` })
            }
            
            const subtotal = producto.precio * item.cantidad
            total += subtotal
            
            productosConPrecio.push({
                producto: item.producto,
                cantidad: item.cantidad,
                precio: producto.precio
            })

            // Actualizar stock
            producto.stock -= item.cantidad
            await producto.save()
        }

        const pedido = await Pedido.create({
            usuario: req.user.id,
            productos: productosConPrecio,
            total,
            direccion
        })

        await pedido.populate('productos.producto', 'nombre imagen')
        res.status(201).json(pedido)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Obtener pedidos del usuario
const obtenerPedidosUsuario = async (req, res) => {
    try {
        const pedidos = await Pedido.find({ usuario: req.user.id })
            .populate('productos.producto', 'nombre imagen')
            .sort({ createdAt: -1 })
        res.json(pedidos)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Obtener todos los pedidos (admin)
const obtenerTodosPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find()
            .populate('usuario', 'nombre email')
            .populate('productos.producto', 'nombre imagen')
            .sort({ createdAt: -1 })
        res.json(pedidos)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Actualizar estado del pedido
const actualizarEstadoPedido = async (req, res) => {
    const { estado } = req.body
    try {
        const pedido = await Pedido.findByIdAndUpdate(
            req.params.id,
            { estado },
            { new: true }
        ).populate('productos.producto', 'nombre imagen')
        
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' })
        }
        res.json(pedido)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    crearPedido,
    obtenerPedidosUsuario,
    obtenerTodosPedidos,
    actualizarEstadoPedido
}