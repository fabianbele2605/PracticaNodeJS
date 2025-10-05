import React, {useState, useEffect} from "react";

const Navbar = () => {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario')
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('usuario')
        localStorage.removeItem('token')
        setUsuario(null)
        window.location.reload()
    }

    if (!usuario) return null

    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">TechStore</div>
                <div className="user-info">
                    <span>Bienvenido, {usuario.nombre}</span>
                    <button className="logout-btn" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar