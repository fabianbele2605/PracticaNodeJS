import React from 'react'
import { useCarrito } from '../context/CarritoContext'
import { crearPedido } from '../services/api'

const Carrito = () => {
  const { carrito, removerDelCarrito, limpiarCarrito, total } = useCarrito()

  const handleCheckout = async () => {
    const usuario = localStorage.getItem('usuario')
    if (!usuario) {
      alert('Debes iniciar sesión para hacer un pedido')
      return
    }

    const direccion = prompt('Ingresa tu dirección de entrega:')
    if (!direccion) return

    try {
      const pedidoData = {
        productos: carrito.map(item => ({
          producto: item._id,
          cantidad: item.cantidad
        })),
        direccion
      }

      await crearPedido(pedidoData)
      alert('¡Pedido realizado exitosamente!')
      limpiarCarrito()
    } catch (error) {
      console.error('Error al crear pedido:', error)
      alert('Error al procesar el pedido')
    }
  }

  return (
    <div className="cart-section">
      <h3 className="cart-title">Carrito</h3>
      {carrito.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-items">
            {carrito.map((item) => (
              <li key={item._id} className="cart-item">
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: ${item.precio * item.cantidad}</p>
                <button className="remove-btn" onClick={() => removerDelCarrito(item._id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <div className="total-amount">Total: ${total}</div>
            <div className="cart-actions">
              <button className="checkout-btn" onClick={handleCheckout}>
                Realizar Pedido
              </button>
              <button className="clear-btn" onClick={limpiarCarrito}>
                Limpiar Carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Carrito
