const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(express.json());

// Conexión a MongoDB local
mongoose.connect('mongodb://localhost:27017/usuarios');

app.use('/api', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    console.log('Conectado a MongoDB local');
});