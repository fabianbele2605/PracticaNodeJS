const mongoose = require('mongoose')

// Esquema de pedidos
const pedidoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El usuario es requerido']
    },
    productos: {
        type: [{
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Producto',
                required: [true, 'El producto es requerido']
            },
            cantidad: {
                type: Number,
                required: [true, 'La cantidad es requerida'],
                min: [1, 'La cantidad debe ser al menos 1']
            },
            precio: {
                type: Number,
                required: [true, 'El precio es requerido'],
            }
        }],
        required: [true, 'Los productos son requeridos']
    },
    total: {
        type: Number,
        required: [true, 'El total es requerido'],
    },
    estado: {
        type: String,
        enum: ['pendiente', 'enviado', 'entregado'],
        default: 'pendiente'
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es requerida'],
        trim: true
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Pedido', pedidoSchema);