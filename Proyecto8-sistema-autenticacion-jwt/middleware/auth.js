const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')

const verificarToken = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization')

        if(!authHeader) {
            return res.status(401).json({ error: 'Token requerido'})
        }

        const token = authHeader.replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await Usuario.findById(decoded.id)
        if (!usuario) {
            throw new Error()
        }
        req.token = token
        req.usuario = usuario
        next()
    } catch (error) {
        res.status(401).json({ error: 'No autorizado' })
    }

}

module.exports = verificarToken;