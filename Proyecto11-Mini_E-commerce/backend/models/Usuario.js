// Importaciones 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Esquema de usuario
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
    },
    rol: {
        type: String,
        enum: ['cliente', 'admin'],
        default: 'cliente'
    }
},{
    timestamps: true
});

// Encriptar contraseña antes de guardar
usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Metodo para comparar contraseñas
usuarioSchema.methods.compararPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('Usuario', usuarioSchema);