import React from 'react';
import './BotonCalendarioEspecifico.css';

const BotonCalendarioEspecifico = ({ day, isEmpty, isPreviousMonth, isNextMonth, isCompleted, isFuture, onClick }) => {
   // console.log('BotonCalendarioEspecifico Props:', { day, isEmpty, isPreviousMonth, isNextMonth, isCompleted, isFuture });
  
    let BotonCalendarioClass = 'BotonCalendario';
  
    if (isPreviousMonth) {
      BotonCalendarioClass += ' previous-month';
    }
  
    if (isNextMonth) {
      BotonCalendarioClass += ' next-month';
    }
  
    if (isFuture) {
      BotonCalendarioClass += ' future';
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
  
export default BotonCalendarioEspecifico;
