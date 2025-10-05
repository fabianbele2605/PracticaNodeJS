import React, {useState, useEffect} from "react";
import { getProductos } from "../services/api";
import { useCarrito } from "../context/CarritoContext";

const ProductList = () => {
    const [productos, setProductos] = useState([]);
    const { agregarAlCarrito } = useCarrito();

    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await getProductos();
            setProductos(productos);
        };
        fetchProductos();
    }, []);

    return (
        <div className="productos-section">
            <h1 className="section-title">Productos</h1>
            <div className="productos-grid">
                {productos.map((producto) => (
                    <div key={producto._id} className="product-card">
                        <img 
                            src={producto.imagen} 
                            alt={producto.nombre} 
                            className="product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-title">{producto.nombre}</h3>
                            <p className="product-description">{producto.descripcion}</p>
                            <div className="product-price">${producto.precio}</div>
                            <button 
                                className="add-to-cart-btn" 
                                onClick={() => agregarAlCarrito(producto)}
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;