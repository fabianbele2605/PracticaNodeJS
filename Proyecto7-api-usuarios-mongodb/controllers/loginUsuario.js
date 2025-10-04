const Usuario = require('../models/Usuarios')

const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
    const usuarioExitente = await Usuario.findOne({ email });

    if (!usuarioExitente) {
        return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }

    const passwordCorrecto = await usuarioExitente.compararPassword(password);

    if (!passwordCorrecto) {
        return res.status(401).json({ mensaje: 'Contraseña incorrectas' });
        }
        
    res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message })
    }
}

module.exports = {loginUsuario}