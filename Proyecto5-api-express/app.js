const express = require('express');
const fs = require('fs');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

const ARCHIVO_TAREAS = './tareas.json';

// Funcion para leer tareas
function leerTareas() {
    try {
        const data = fs.readFileSync(ARCHIVO_TAREAS, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Funcion para guardar tareas
function guardarTareas(tareas) {
    fs.writeFileSync(ARCHIVO_TAREAS, JSON.stringify(tareas, null, 2));
}

// GET /tareas - listar todas las tareas
app.get('/tareas', (req, res) => {
    const tareas = leerTareas();
    res.json(tareas);
});

// POST /tareas - crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { descripcion} = req.body;

    if (!descripcion) {
        return res.status(400).json({ error: 'La descripcion es requerida'});
    }

    const tareas = leerTareas();
    const nuevaTarea = {
        id: Date.now(),
        descripcion,
        completada: false
    }

    tareas.push(nuevaTarea);
    guardarTareas(tareas);

    res.status(201).json(nuevaTarea);
});


// PUT /tareas/:id - Completar tarea
app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareas = leerTareas();
    const tarea = tareas.find(t => t.id === id);

    if ( !tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada'});
    }

    tarea.completada = !tarea.completada;
    guardarTareas(tareas);

    res.json(tarea)
});


// DELETE /tareas/:id - Eliminar tarea
app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareas = leerTareas();
    const indice = tareas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada'});
    }

    const tareaEliminada = tareas.splice(indice, 1)[0];
    guardarTareas(tareas);

    res.json({ mensaje: ' Tarea eliminada', tarea: tareaEliminada})
});

const PUERTO = 3001;

app.listen(PUERTO, () => {
    console.log(`⚡ API ejecutandose en http://localhost:${PUERTO}`);
    console.log('Endpoints disponibles');
    console.log('GET /tareas     - Listar tareas');
    console.log('POST /tareas    - Crear tarea');
    console.log('PUT /tareas/:id - Completar tarea');
    console.log('DELETE /tareas/:id - Eliminar tarea');
});