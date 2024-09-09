import React, { useState } from 'react';
import Calificacion from './Calificacion';

const FormularioReseñas = ({ onAgregarReseña }) => {
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(0);

  const manejarEnvio = (e) => {
    e.preventDefault();
    onAgregarReseña({ usuario: 'Anónimo', comentario, calificacion });
    setComentario('');
    setCalificacion(0);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe tu reseña"
      />
      <Calificacion onCalificar={setCalificacion} />
      <button type="submit">Enviar Reseña</button>
    </form>
  );
};

export default FormularioReseñas;
