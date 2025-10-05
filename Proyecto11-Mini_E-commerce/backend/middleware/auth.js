const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

const protegerRuta = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await Usuario.findById(decoded.id).select('-password')
            return next()
        } catch (error) {
            return res.status(404).json({msg: 'Hubo un error'})
        }
    } else {
        return res.status(401).json({msg: 'No hay token en la peticion'})   
    }
}

// Verificar si el usuario es administrador
const esAdmin = (req, res, next) => {
    if (req.user && req.user.rol === 'admin') {
        next()
    } else {
        res.status(403).json({ msg: 'Acceso denegado' })
    }
}

module.exports = { protegerRuta, esAdmin}