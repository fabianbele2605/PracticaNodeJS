import React, { useState } from 'react'
import { loginUsuario } from '../services/api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const usuarioLogueado = localStorage.getItem('usuario')
    if (usuarioLogueado) {
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loginUsuario({ email, password})
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario))
            window.location.reload()
        } catch (error) {
            alert('Error al iniciar sesión')
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password"
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login