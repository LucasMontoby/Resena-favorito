import React, { useState } from 'react';

const Calificacion = ({ onCalificar }) => {
  const [calificacion, setCalificacion] = useState(0);

  const manejarCalificacion = (estrella) => {
    setCalificacion(estrella);
    onCalificar(estrella); // Llamada a la función de calificación
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((estrella) => (
        <span
          key={estrella}
          onClick={() => manejarCalificacion(estrella)}
          style={{ cursor: 'pointer', color: estrella <= calificacion ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Calificacion;
