const axios = require('axios');

// Pon tu API KEY de OpenWeatherMap
const API_KEY = '3efdb3fcb575526237d77f4070da8b0d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function obtenerClima(ciudad) {
    try {
        const url = `${BASE_URL}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

        console.log(`🔍 Consultando clima para: ${ciudad}...`);

        const respuesta = await axios.get(url);
        const datos = respuesta.data;

        // Mostrar informacion del clima
        console.log('\n🌤️ INFORMACION DEL CLIMA');
        console.log('=============================');
        console.log(`🏙️ Ciudad: ${datos.name}, ${datos.sys.country}`);
        console.log(`🌡️ Temperatura: ${datos.main.temp}°C`);
        console.log(`🌡️ Sensación térmica: ${datos.main.feels_like}°C`);
        console.log(`💧 Humedad: ${datos.main.humidity}%`);
        console.log(`💨 Presión: ${datos.main.pressure} hPa`);
        console.log(`🌬️ Viento: ${datos.wind.speed} m/s`);
        console.log(`📊 Descripcion: ${datos.weather[0].description}`);

        if (datos.main.temp_min && datos.main.temp_max) {
            console.log(`❄️🔥🌡️ Min/Max: ${datos.main.temp_min}°C / ${datos.main.temp_max}°C`);

        }
    } catch (error) {
        if (error.response) {
            // Error de la API
            if (error.response.status === 404) {
                console.log('🚨 Ciudad no encontrada');
            } else if (error.response.status === 401) {
                console.log('🚨 API KEY no válida');
            } else {
                console.log(`🚨 Error de la API: ${error.response.status}`);
            }

        } else {
            // Error de red o de otro tipo
            console.log('🚨 Error de red o de otro tipo:', error.message);
        }
    }
}

// Obtener la ciudad desde los argumentos de la línea de comandos
const ciudad = process.argv[2];

if (!ciudad) {
    console.log(`
    🌤️   App del clima
    ===================
    Uso: node clima.js [nombre_ciudad]

    Ejemplo:
    node clima.js "Buenos Aires"
    node clima.js London
    node clima.js Tokyo
    `);
} else {
    obtenerClima(ciudad);
}