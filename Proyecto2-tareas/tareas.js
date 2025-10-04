const fs = require('fs');
const path = './tareas.json';

// Leer tareas del archivo
function leeTareas() {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Guardar tareas en el archivo
function guardarTareas(tareas) {
    fs.writeFileSync(path, JSON.stringify(tareas, null, 2));
}

// Agregar nueva tarea
function agregarTarea(descripcion) {
    const tareas = leeTareas();
    const nuevaTarea = {
        id: Date.now(),
        descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas(tareas);
    console.log(`✅ Tarea agregada: "${descripcion}"`);
}

// Listar todas las tareas
function listarTareas() {
    const tareas = leeTareas();
    if (tareas.length === 0) {
        console.log('📚 No hay tareas pendientes');
        return;
    }

    console.log('\n📚 Tareas pendientes:');
    tareas.forEach(tarea => {
        const estado = tarea.completada ? '✅' : '⏳';
        console.log(`${estado} [${tarea.id}] ${tarea.descripcion}`);
    });
}

// Completar tarea
function completarTarea(id) {
    const tareas = leeTareas();
    const tarea = tareas.find(t => t.id === id);

    if (tarea) {
        tarea.completada = true;
        guardarTareas(tareas);
        console.log(`✅ Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log(`❌ No se encontró la tarea con ID ${id}`);
    }
}

// Eliminar tarea
function eliminarTarea(id) {
    const tareas = leeTareas();
    const nuevasTareas = tareas.filter(t => t.id != id);

    if (tareas.length !== nuevasTareas.length) {
        guardarTareas(nuevasTareas);
        console.log(`🗑️ Tarea eliminada con ID ${id}`);
    } else {
        console.log(`❌ No se encontró la tarea con ID ${id}`);
    }
}

// Manejo de comandos
const comando = process.argv[2];
const argumento = process.argv[3];

switch (comando) {
    case 'agregar':
        if (argumento) {
            agregarTarea(argumento);
        } else {
            console.log('❌ Debes proporcionar una descripción para la tarea');
        }
        break;

    case 'listar':
        listarTareas();
        break;

    case 'completar':
        if (argumento) {
            completarTarea(parseInt(argumento));
        } else {
            console.log('❌ Debes proporcionar el ID de la tarea a completar');
        }
        break;

    case 'eliminar':
        if (argumento) {
            eliminarTarea(parseInt(argumento));
        } else {
            console.log('❌ Debes proporcionar el ID de la tarea a eliminar');
        }
        break;

    default:
        console.log(`
        📚 Gestor de Tareas - Comando disponibles:
            node tareas.js agregar "descripcion"  --Agregar nueva tarea
            node tareas.js listar                  --Listar todas las tareas
            node tareas.js completar id            --Marcar tarea como completada
            node tareas.js eliminar id             --Eliminar tarea
            `)
}