
const obtenerPerfil = async (req, res) => {
    try {
        // req.usuario viene del middleware de autenticacion
        const usuario = {
            id: req.usuario._id,
            nombre: req.usuario.nombre,
            email: req.usuario.email,
            createdAt: req.usuario.createdAt,
        };

        res.status(200).json({ usuario });
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};

module.exports = {
    obtenerPerfil
};