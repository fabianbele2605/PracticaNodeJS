const express = require('express')
const router = express.Router()
const { registrarUsuario, loginUsuario, obtenerPerfilUsuario } = require('../controllers/usuarioController')
const { protegerRuta } = require('../middleware/auth')


// Ruta de registro
router.post('/registro', registrarUsuario)

// Ruta de login
router.post('/login', loginUsuario)

// Ruta de perfil
router.get('/perfil',protegerRuta, obtenerPerfilUsuario)


module.exports = router
