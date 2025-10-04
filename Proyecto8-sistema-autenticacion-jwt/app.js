const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./routes/usuarios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexión a MongoDB local
mongoose.connect('mongodb://localhost:27017/usuarios');

app.use('/api', usuariosRoutes);

const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
    console.log('Conectado a MongoDB local');
});