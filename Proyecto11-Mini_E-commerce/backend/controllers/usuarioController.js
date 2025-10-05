const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken')

const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// Registrar usuario
const registrarUsuario = async (req, res) => {
    const { nombre, email, password } = req.body
    try {
        const usuario = await Usuario.create({ nombre, email, password })
        const token = generarToken(usuario._id)
        res.status(201).json({ usuario, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Login de usuario
const loginUsuario = async (req, res) => {
    const { email, password } = req.body
    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario no encontrado' })
        }
        const match = await usuario.compararPassword(password)
        if (!match) {
            return res.status(400).json({ error: 'Contraseña incorrecta' })
        }
        const token = generarToken(usuario._id)
        res.status(200).json({ usuario, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Obtener perfil de usuario
const obtenerPerfilUsuario = async (req, res) => {
    const id = req.user.id
    try {
        const usuario = await Usuario.findById(id).select('-password')
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' })
        }
        res.status(200).json(usuario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    registrarUsuario,
    loginUsuario,
    obtenerPerfilUsuario
}


