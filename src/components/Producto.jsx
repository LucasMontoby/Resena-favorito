
import FormularioReseñas from './FormularioReseñas';
import Reseñas from './Reseñas';

const Producto = ({ producto, reseñas, onAgregarReseña }) => {
  const agregarReseña = (nuevaReseña) => {
    onAgregarReseña(producto.id, nuevaReseña);
  };

  return (
    <div className="producto">
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <FormularioReseñas onAgregarReseña={agregarReseña} />
      <Reseñas reseñas={reseñas} />
    </div>
  );
};

export default Producto;



