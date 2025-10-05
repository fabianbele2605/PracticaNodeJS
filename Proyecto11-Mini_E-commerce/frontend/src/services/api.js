// Importar axios
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: API_URL
})

// Interceptor para agregar el token automaticamente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const getProductos = async () => {
    const response = await api.get('/productos')
    return response.data
}

// Funciones de autenticacion
export const registrarUsuario = (userData) => {
    return api.post('/usuarios/registro', userData)
}

export const loginUsuario = (userData) => {
    return api.post('/usuarios/login', userData)
}

// Funciones de pedidos
export const crearPedido = (pedidoData) => {
    return api.post('/pedidos', pedidoData)
}

export const obtenerPedidos = () => {
    return api.get('/pedidos/mis-pedidos')
}

