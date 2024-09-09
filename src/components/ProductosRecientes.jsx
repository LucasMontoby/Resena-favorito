import React, { useEffect, useState } from 'react';

const ProductosRecientes = () => {
  const [productosRecientes, setProductosRecientes] = useState([]);

  useEffect(() => {
    const recientes = JSON.parse(localStorage.getItem('productosRecientes')) || [];
    setProductosRecientes(recientes);
  }, []);

  return (
    <div>
      <h3>Productos Recientes</h3>
      {productosRecientes.length === 0 ? (
        <p>No hay productos recientes.</p>
      ) : (
        productosRecientes.map((producto) => (
          <div key={producto.id}>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductosRecientes;

