# 🟡 Nivel 2 – Principiante Intermedio (Servidores y APIs) - COMPLETADO ✅

**Objetivo:** Crear y consumir servidores con Node.js

Este nivel se enfoca en el desarrollo de servidores web, APIs REST y el consumo de servicios externos. Aquí aprendes a crear aplicaciones que pueden comunicarse a través de HTTP.

---

## 📌 Proyecto 4: Servidor HTTP Básico ✅

**Objetivo:** Usando el módulo `http`, responde "Hola Mundo" en el navegador.
**Aprendes:** Ciclo request-response.

### 🛠️ Tecnologías utilizadas:
- Módulo `http` nativo de Node.js
- Headers HTTP
- Content-Type

### 🚀 Cómo ejecutar:
```bash
cd Proyecto4-servidor-basico
node servidor.js
```
Visita: `http://localhost:3000`

### 📚 Conceptos aprendidos:
- ✅ `http.createServer()` para crear servidores
- ✅ Objetos `req` (request) y `res` (response)
- ✅ `res.writeHead()` para configurar headers
- ✅ `res.end()` para enviar respuestas
- ✅ Ciclo completo request-response
- ✅ Servir contenido HTML dinámico

---

## 📌 Proyecto 5: API REST con Express ✅

**Objetivo:** CRUD de tareas pero ahora vía API (endpoints).
**Aprendes:** Express, middlewares, rutas.

### 🛠️ Tecnologías utilizadas:
- Express.js
- Middleware `express.json()`
- Sistema de archivos (`fs`)
- Rutas HTTP (GET, POST, PUT, DELETE)

### 🚀 Cómo ejecutar:
```bash
cd Proyecto5-api-express
npm install
node app.js
```

### 🔗 Endpoints disponibles:
- `GET /tareas` - Listar todas las tareas
- `POST /tareas` - Crear nueva tarea
- `PUT /tareas/:id` - Completar/descompletar tarea
- `DELETE /tareas/:id` - Eliminar tarea

### 📚 Conceptos aprendidos:
- ✅ Express.js framework
- ✅ Middlewares (`app.use()`)
- ✅ Rutas HTTP y métodos REST
- ✅ Parámetros de URL (`req.params`)
- ✅ Body de requests (`req.body`)
- ✅ Códigos de estado HTTP (200, 201, 400, 404)
- ✅ Manejo de errores en APIs
- ✅ Persistencia de datos en JSON

---

## 📌 Proyecto 6: App del Clima ✅

**Objetivo:** Introduces una ciudad y el programa consulta una API externa de clima.
**Aprendes:** `axios`, manejo de promesas y APIs externas.

### 🛠️ Tecnologías utilizadas:
- Axios para peticiones HTTP
- OpenWeatherMap API
- Async/Await
- Manejo de errores con try/catch

### 🚀 Cómo ejecutar:
```bash
cd Proyecto6-app-clima
npm install
node clima.js Madrid
node clima.js "Buenos Aires"
```

### 📚 Conceptos aprendidos:
- ✅ `axios` para peticiones HTTP externas
- ✅ `async/await` para manejo de promesas
- ✅ `try/catch` para manejo de errores
- ✅ Consumo de APIs externas
- ✅ Query parameters en URLs
- ✅ Autenticación con API keys
- ✅ Manejo de diferentes tipos de errores (404, 401, red)
- ✅ Formateo y presentación de datos

---

## 🎯 Resumen del Nivel 2

### 🧠 Conceptos dominados:
1. **Servidores HTTP:** Creación de servidores web básicos
2. **Express.js:** Framework web para Node.js
3. **APIs REST:** Diseño e implementación de endpoints
4. **Middlewares:** Funciones intermedias en Express
5. **HTTP Methods:** GET, POST, PUT, DELETE
6. **Status Codes:** 200, 201, 400, 404, 500
7. **Async/Await:** Manejo moderno de promesas
8. **APIs Externas:** Consumo de servicios de terceros
9. **Error Handling:** Manejo robusto de errores

### 📁 Estructura del nivel:
```
PracticaNodeJS/
├── Proyecto4-servidor-basico/
│   ├── servidor.js
│   └── package.json
├── Proyecto5-api-express/
│   ├── app.js
│   ├── tareas.json
│   ├── package.json
│   └── node_modules/
└── Proyecto6-app-clima/
    ├── clima.js
    ├── package.json
    └── node_modules/
```

### 🚀 Habilidades adquiridas:
- ✅ Crear servidores web desde cero
- ✅ Desarrollar APIs REST completas
- ✅ Consumir APIs externas
- ✅ Manejar peticiones HTTP
- ✅ Implementar CRUD operations
- ✅ Gestionar errores de red y APIs
- ✅ Trabajar con promesas y async/await

---

## 🎊 Estado: NIVEL 2 COMPLETADO EXITOSAMENTE

**Proyectos completados:** 3/3 ✅
**Conceptos dominados:** Servidores, APIs REST, Consumo de APIs externas
**Próximo nivel:** Nivel 3 - Intermedio (Base de Datos y Autenticación)

---

**Fecha de finalización:** [Fecha actual]
**Tiempo invertido:** [Sesión de aprendizaje]