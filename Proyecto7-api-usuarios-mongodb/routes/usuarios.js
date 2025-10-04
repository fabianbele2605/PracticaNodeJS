const { loginUsuario } = require('../controllers/loginUsuario')
const { registrarUsuario } = require('../controllers/usuariosController')
const { obtenerUsuarios } = require('../controllers/obtenerUsuarios')

const express = require('express');
const router = express.Router();

router.post('/usuarios', registrarUsuario) 


router.post('/usuarios/login', loginUsuario) 


router.get('/usuarios', obtenerUsuarios) 


module.exports = router;