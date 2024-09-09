import React, { useState, useEffect } from 'react';
import ListaProductos from './ListaProductos';
import ProductosRecientes from './ProductosRecientes';
import '../App.css'

const App = () => {
  const [productos, setProductos] = useState([]);
  const [reseñas, setReseñas] = useState({});

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  const agregarReseña = (productoId, nuevaReseña) => {
    setReseñas((prevReseñas) => ({
      ...prevReseñas,
      [productoId]: [...(prevReseñas[productoId] || []), nuevaReseña]
    }));

    const recientes = JSON.parse(localStorage.getItem('productosRecientes')) || [];
    if (!recientes.some((producto) => producto.id === productoId)) {
      const producto = productos.find((p) => p.id === productoId);
      if (producto) {
        localStorage.setItem('productosRecientes', JSON.stringify([...recientes, producto]));
      }
    }
  };

  return (
    <div className="container">
      <h1>Bienvenido a la Tienda</h1>
      <ListaProductos productos={productos} reseñas={reseñas} onAgregarReseña={agregarReseña} />
      <ProductosRecientes />
    </div>
  );
};

export default App;


