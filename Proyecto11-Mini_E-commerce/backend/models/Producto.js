const mongoose = require('mongoose');

// Esquema de producto
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es requerido'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion del producto es requerida'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio del producto es requerido'],
    },
    imagen: {
        type: String,
        default: 'imagen.jpg',
        
    },
    stock: {
        type: Number,
        required: [true, 'El stock del producto es requerido'],
        min: [0, 'El stock debe ser al menos 0']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria del producto es requerida'],
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);
