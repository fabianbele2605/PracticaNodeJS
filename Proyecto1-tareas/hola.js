const nombre = process.argv[2];

if (nombre) {
    console.log(`Hola ${nombre}! Bienvenido a Node.js ⚡`);
} else {
    console.log('Por favor, proporciona un nombre como argumento.');
}