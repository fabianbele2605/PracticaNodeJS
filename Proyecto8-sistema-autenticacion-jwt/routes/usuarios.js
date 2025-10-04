const { loginUsuario } = require('../controllers/loginUsuario')
const { registrarUsuario } = require('../controllers/usuariosController')
const { obtenerUsuarios } = require('../controllers/obtenerUsuarios')
const { obtenerPerfil } = require('../controllers/perfilUsuario')
const verificarToken = require('../middleware/auth')

const express = require('express');
const router = express.Router();

router.post('/usuarios', registrarUsuario) 


router.post('/usuarios/login', loginUsuario) 


router.get('/usuarios',verificarToken, obtenerUsuarios)

router.get('/usuarios/perfil', verificarToken, obtenerPerfil)


module.exports = router;