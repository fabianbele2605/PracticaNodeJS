const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true
    },

    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true,
        lowercase:true,
        trim: true
    },

    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        minlength: 6
    }
}, {
    timestamps: true
});

// Encriptar contraseña antes de guardar
usuariosSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Método para comparar contraseñas
usuariosSchema.methods.compararPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Usuario', usuariosSchema);