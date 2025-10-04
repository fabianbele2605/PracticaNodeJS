const { Usuario } = require('../db-simulada');
const bcrypt = require('bcryptjs');


const registrarUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        const usuarioSinPassword = usuarioGuardado.toObject();
        delete usuarioSinPassword.password;
        res.status(201).json({ usuario: usuarioSinPassword})
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar el usuario', error: error.message })
    }


}

module.exports = {
    registrarUsuario
}
