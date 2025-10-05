import React, { createContext, useContext, useState} from "react";

const CarritoContext = createContext()

export const useCarrito = () => {
    const context = useContext(CarritoContext)
    if (!context) {
        throw new Error('useCarrito debe ser usado dentro de un CarritoProvider')
    }
    return context
}

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {
            const existe = prev.find(p => p._id === producto._id)
            if (existe) {
                return prev.map(item =>
                    item._id === producto._id ? {...item, cantidad: item.cantidad + 1} : item
                )
            }
            return [...prev, {...producto, cantidad: 1}]
        })
    }

    const removeDelCarrito = (id) => {
        setCarrito(prev => prev.filter(item => item._id !== id))
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removeDelCarrito,
            limpiarCarrito,
            total
        }}>
            {children} 
        </CarritoContext.Provider>
    )

}

