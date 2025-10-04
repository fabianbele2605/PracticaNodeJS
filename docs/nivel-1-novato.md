# 🟢 Nivel 1 – Novato (Bases de Node.js) - COMPLETADO ✅

**Objetivo:** Entender qué es Node, cómo ejecutar código fuera del navegador y trabajar con la terminal.

---

## 📌 Proyecto 1: Hola Node y CLI ✅

**Objetivo:** Script que recibe tu nombre y te saluda.

### Lo que aprendiste:
- ✅ `node archivo.js` - Ejecutar archivos JavaScript con Node
- ✅ `process.argv` - Acceder a argumentos de línea de comandos

### Código implementado:
```javascript
const nombre = process.argv[2];

if (nombre) {
    console.log(`Hola ${nombre}! Bienvenido a Node.js ⚡`);
} else {
    console.log('Por favor, proporciona un nombre como argumento.');
}
```

### Comandos de prueba:
```bash
node hola.js Fabian
node hola.js
```

---

## 📌 Proyecto 2: Gestor de Tareas en Consola ✅

**Objetivo:** CRUD de tareas (agregar, listar, completar, eliminar) con persistencia en JSON.

### Lo que aprendiste:
- ✅ Módulo `fs` para leer/escribir archivos
- ✅ `module.exports` y funciones modulares
- ✅ Persistencia de datos en JSON
- ✅ `npm init` para inicializar proyectos
- ✅ Manejo avanzado de `process.argv`

### Funcionalidades implementadas:
- ✅ Agregar tareas
- ✅ Listar tareas con estados (completada/pendiente)
- ✅ Completar tareas
- ✅ Eliminar tareas
- ✅ Persistencia en archivo JSON
- ✅ Validación de comandos y argumentos

### Comandos disponibles:
```bash
node tareas.js agregar "descripción"
node tareas.js listar
node tareas.js completar ID
node tareas.js eliminar ID
```

### Estructura del proyecto:
```
Proyecto2-tareas/
├── tareas.js
├── tareas.json
└── package.json
```

---

## 📌 Proyecto 3: Mini Calculadora en Consola ✅

**Objetivo:** Operaciones básicas (+, -, *, /) con validación de errores.

### Lo que aprendiste:
- ✅ `parseFloat()` para convertir strings a números
- ✅ `isNaN()` para validar números
- ✅ `process.exit()` para terminar el programa
- ✅ Manejo de casos especiales (división por cero)
- ✅ Validación de entrada de datos

### Operaciones implementadas:
- ✅ Suma
- ✅ Resta  
- ✅ Multiplicación
- ✅ División (con validación de división por cero)
- ✅ Validación de argumentos
- ✅ Mensajes de ayuda

### Comandos de prueba:
```bash
node calculadora.js suma 10 5
node calculadora.js resta 10 5
node calculadora.js multiplicacion 10 5
node calculadora.js division 10 5
node calculadora.js division 10 0  # Prueba error
```

---

## 🎊 Resumen del Nivel 1

### Conceptos dominados:
1. **Ejecución de Node.js:** `node archivo.js`
2. **Argumentos CLI:** `process.argv`
3. **Sistema de archivos:** `fs.readFileSync()`, `fs.writeFileSync()`
4. **JSON:** `JSON.parse()`, `JSON.stringify()`
5. **Validación:** `isNaN()`, validación de argumentos
6. **Control de flujo:** `switch`, `if/else`, `process.exit()`
7. **Gestión de proyectos:** `npm init`

### Proyectos completados:
- ✅ **Proyecto 1:** Hola Node y CLI
- ✅ **Proyecto 2:** Gestor de Tareas en Consola  
- ✅ **Proyecto 3:** Mini Calculadora en Consola

### Estructura final del nivel:
```
PracticaNodeJS/
├── hola.js
├── Proyecto2-tareas/
│   ├── tareas.js
│   ├── tareas.json
│   └── package.json
├── Proyecto3-calculadora/
│   └── calculadora.js
└── docs/
    └── nivel-1-novato.md
```

---

## 🚀 Próximo paso: Nivel 2 - Principiante Intermedio

**Enfoque:** Servidores y APIs
- Proyecto 4: Servidor HTTP Básico
- Proyecto 5: API REST con Express  
- Proyecto 6: App del Clima

**Fecha de inicio:** [Próxima sesión]

---

**Estado:** ✅ NIVEL 1 COMPLETADO EXITOSAMENTE
**Fecha de finalización:** [Fecha actual]
**Tiempo invertido:** [Sesión de aprendizaje]