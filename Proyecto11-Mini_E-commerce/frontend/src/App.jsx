import './App.css'
import ProductList from './components/ProductList'
import Login from './components/Login'
import Navbar from './components/Navbar' 
import { CarritoProvider } from './context/CarritoContext'
import Carrito from './components/Carrito'
import { useState, useEffect } from 'react'

function App() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario')
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado))
    }
  }, [])

  if (!usuario) {
    return <Login />
  }

  return (
    <CarritoProvider>
      <div className="app-container">
        <div className="sidebar">
          <div className="logo">TechStore</div>
          <Carrito />
        </div>
        <div className="main-content">
          <Navbar />
          <div className="container">
            <ProductList />
          </div>
        </div>
      </div>
    </CarritoProvider>
  )
}

export default App
