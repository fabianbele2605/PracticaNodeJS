const Usuario = require('../models/Usuarios');

const obtenerUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.find().select('-password');
        res.status(200).json({usuarios: usuario});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
    }
}

module.exports = { obtenerUsuarios }