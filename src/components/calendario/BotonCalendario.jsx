import React from 'react';
import './BotonCalendario.css';

const BotonCalendario = ({ day, isEmpty, isPreviousMonth, isNextMonth, isCompleted, isFuture, onClick }) => {
  let BotonCalendarioClass = 'BotonCalendario';

  if (isPreviousMonth) {
    BotonCalendarioClass += ' previous-month';
  }

  if (isNextMonth) {
    BotonCalendarioClass += ' next-month';
  }

  if (isFuture) {
    BotonCalendarioClass += ' future'; // Nueva clase para días futuros
  } else if (isCompleted) {
    BotonCalendarioClass += ' completed';
  } else {
    BotonCalendarioClass += ' not-completed';
  }

  return (
    <div className={BotonCalendarioClass} onClick={onClick}>
      <div className="day-number">{day}</div>
    </div>
  );
};

export default BotonCalendario;
