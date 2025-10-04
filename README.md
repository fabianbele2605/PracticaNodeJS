# 📌 Proyectos 7 y 8: API de Usuarios con MongoDB + Sistema de Autenticación JWT

## 🎯 Objetivo
Crear una API REST completa para gestión de usuarios con MongoDB y sistema de autenticación JWT.

## 🚀 Proyectos Implementados

### ✅ Proyecto 7: API de Usuarios con MongoDB
**Funcionalidades básicas:**
- Registro de usuarios con encriptación de contraseñas
- Login básico con verificación de contraseñas
- Listado de usuarios

### ✅ Proyecto 8: Sistema de Autenticación JWT
**Funcionalidades avanzadas:**
- Login genera tokens JWT con expiración de 24h
- Middleware de autenticación para rutas protegidas
- Ruta de perfil personalizada
- Headers Authorization con Bearer tokens

## 📁 Estructura del Proyecto

```
├── Proyecto7-api-usuarios-mongodb/     # Versión básica
│   ├── models/Usuarios.js
│   ├── controllers/
│   ├── routes/usuarios.js
│   └── app.js
│
├── Proyecto8-sistema-autenticacion-jwt/  # Versión con JWT
│   ├── models/Usuarios.js
│   ├── controllers/
│   │   ├── usuariosController.js
│   │   ├── loginUsuario.js
│   │   ├── obtenerUsuarios.js
│   │   └── perfilUsuario.js
│   ├── middleware/auth.js              # ← Nuevo
│   ├── routes/usuarios.js
│   └── app.js
```

## 🔗 Endpoints Disponibles

### Proyecto 7 (Básico)
- `POST /api/usuarios` - Registrar usuario
- `POST /api/usuarios/login` - Login básico
- `GET /api/usuarios` - Obtener usuarios (público)

### Proyecto 8 (Con JWT)
- `POST /api/usuarios` - Registrar usuario (público)
- `POST /api/usuarios/login` - Login con JWT (público)
- `GET /api/usuarios` - Obtener usuarios (🔒 protegido)
- `GET /api/usuarios/perfil` - Ver perfil personal (🔒 protegido)

## 🛡️ Autenticación JWT

**Headers requeridos para rutas protegidas:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🧪 Cómo Probar

### 1. Ejecutar Proyecto 7
```bash
cd Proyecto7-api-usuarios-mongodb
npm install
node app.js
```

### 2. Ejecutar Proyecto 8
```bash
cd Proyecto8-sistema-autenticacion-jwt
npm install
node app.js
```

### 3. Testing con Postman
1. **Registrar usuario:** POST `/api/usuarios`
2. **Login:** POST `/api/usuarios/login` → Obtener token
3. **Usar token:** Agregar header `Authorization: Bearer [token]`
4. **Probar rutas protegidas:** GET `/api/usuarios`, GET `/api/usuarios/perfil`

## 🔧 Tecnologías Utilizadas

- **Express.js** - Framework web
- **Mongoose** - ODM para MongoDB
- **bcryptjs** - Encriptación de contraseñas
- **jsonwebtoken** - Tokens JWT
- **MongoDB** - Base de datos local
- **Postman** - Testing de APIs

## 📚 Conceptos Aprendidos

### Proyecto 7
- Modelos con Mongoose
- Middleware pre('save') para encriptación
- Controladores async/await
- Estructura MVC
- Manejo de errores

### Proyecto 8
- Tokens JWT con expiración
- Middleware de autenticación personalizado
- Rutas protegidas
- Headers Authorization
- Seguridad en APIs REST

---

**Fecha de implementación:** Octubre 2025