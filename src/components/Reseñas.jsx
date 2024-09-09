
const Reseñas = ({ reseñas }) => {
  return (
    <div>
      <h3>Reseñas de los Usuarios</h3>
      {reseñas.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        reseñas.map((reseña, index) => (
          <div key={index}>
            <h4>{reseña.usuario}</h4>
            <p>Calificación: {reseña.calificacion} estrellas</p>
            <p>{reseña.comentario}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reseñas;

