// Importacion de las librerias
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const usuarioRoutes = require('./routes/usuarioRoutes')
const productoRoutes = require('./routes/productoRoutes')
const pedidoRoutes = require('./routes/pedidoRoutes')

// Crear app de Express
const app = express();

// Agregar middleware
app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);


// Conexion a la base de datos 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.error('Error conectando a MongoDB:',error));


// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'API E-commerce funcionando'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

