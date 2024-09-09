
import Producto from './Producto';

const ListaProductos = ({ productos, reseñas, onAgregarReseña }) => {
  return (
    <div className="lista-productos">
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            reseñas={reseñas[producto.id] || []}
            onAgregarReseña={onAgregarReseña}
          />
        ))
      )}
    </div>
  );
};

export default ListaProductos;



