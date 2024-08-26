import React from 'react';
import './BotonCalendarioEspecifico.css';

const BotonCalendarioEspecifico = ({ day, isVacio, isPreviousMonth, isNextMonth, isCompleted, isNotCompleted, isFuture, onClick }) => {
  let BotonCalendarioClass = 'BotonCalendario';

  // Aplica estilos condicionales según el estado
  if (isPreviousMonth) {
    BotonCalendarioClass += ' previous-month';
  }
  if (isNextMonth) {
    BotonCalendarioClass += ' next-month';
  }
  if (isVacio) {
    BotonCalendarioClass += ' vacio';  // Clase para días sin información
  } else if (isFuture) {
    BotonCalendarioClass += ' future';  // Clase para días futuros
  } else if (isCompleted) {
    BotonCalendarioClass += ' completed';  // Clase para días completados
  } else if (isNotCompleted) {
    BotonCalendarioClass += ' not-completed';  // Clase para días no completados
  }

  return (
    <div className={BotonCalendarioClass} onClick={onClick}>
      <div className="day-number">{day}</div>  {/* Mostrar el número del día */}
    </div>
  );
};

export default BotonCalendarioEspecifico;
