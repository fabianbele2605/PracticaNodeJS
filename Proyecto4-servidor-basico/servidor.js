const http = require('http');

const servidor = http.createServer((req, res) => {
    // Configurar headers
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Respuesta HTML
    res.end(`
        <h1>🌐 Hola Mundo desde Node.js!</h1>
        <p>Tu primer servidor web esta funcionando</p>
        <p><strong>URL:</strong> ${req.url}</p>
        <p><strong>Método:</strong> ${req.method}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        `);
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`🚀 Servidor ejecutandose en http://localhost:${PUERTO}`)
    console.log('Presiona Ctrl+C para detener el sevidor ')
})