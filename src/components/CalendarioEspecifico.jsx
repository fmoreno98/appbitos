import React, { useState, useContext, useEffect } from 'react';
import BotonCalendarioEspecifico from './BotonCalendarioEspecifico.jsx';
import './calendario/Calendario.css';
import LoginContext from './LoginContext.jsx';
import { historialHabito } from './tools/api.js'; // Importa la función correctamente
import { useParams } from 'react-router-dom';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const formatTwoDigits = (number) => {
  return number < 10 ? `0${number}` : number;
};

const CalendarioEspecifico = (idHabito) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [completionStatus, setCompletionStatus] = useState({ statusMap: {}, creationDate: new Date() });
  const { user, token } = useContext(LoginContext);

  const fetchCompletionStatus = async (month, year) => {
    try {
      const userId = user;
      const data = await historialHabito(userId, idHabito.idHabito, token, month, year);
      
      const statusMap = data.reduce((acc, { fecha, estado_retos }) => {
        acc[fecha] = estado_retos === 'Completado';
        return acc;
      }, {});

      // Supongamos que la fecha de creación está en el primer elemento de la respuesta
      const creationDate = data[0]?.fecha; // O ajusta según cómo obtengas la fecha de creación

      setCompletionStatus({ statusMap, creationDate: new Date(creationDate) });
    } catch (error) {
      console.error('Error fetching completion status:', error);
    }
  };

  useEffect(() => {
    fetchCompletionStatus(currentMonth, currentYear);
  }, [user, idHabito, currentMonth, currentYear]);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    const today = new Date();
    if (
      currentMonth < today.getMonth() || 
      currentYear < today.getFullYear()
    ) {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const renderCalendario = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = (firstDay + 6) % 7;

    let days = [];
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = new Date(previousYear, previousMonth + 1, 0).getDate();

    const today = new Date();
    const isCurrentMonthAndYear = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const creationDate = new Date(completionStatus.creationDate || today); // Manejo de fecha de creación

    // Generar días del mes anterior
    for (let i = 0; i < adjustedFirstDay; i++) {
      const date = new Date(previousYear, previousMonth, prevMonthDays - (adjustedFirstDay - i - 1));
      const formattedDate = `${date.getFullYear()}-${formatTwoDigits(date.getMonth() + 1)}-${formatTwoDigits(date.getDate())}`;
      const isCompleted = completionStatus.statusMap?.[formattedDate] || false;
      const isAfterCreation = date >= creationDate && date <= today;

      days.push(
        <BotonCalendarioEspecifico
          key={`empty-start-${i}`}
          day={prevMonthDays - (adjustedFirstDay - i - 1)}
          isVacio={false}
          isPreviousMonth={true}
          isCompleted={isCompleted}
          isAfterCreation={isAfterCreation}
        />
      );
    }

    // Generar días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const formattedDate = `${date.getFullYear()}-${formatTwoDigits(date.getMonth() + 1)}-${formatTwoDigits(date.getDate())}`;

      const hasStatus = completionStatus.statusMap?.hasOwnProperty(formattedDate); // Usa el operador de encadenamiento opcional
      const isCompleted = hasStatus && completionStatus.statusMap[formattedDate] === true;
      const isNotCompleted = hasStatus && completionStatus.statusMap[formattedDate] === false;
      const isVacio = !hasStatus;  // Si no hay datos, se considera "empty"
      const isFuture = isCurrentMonthAndYear && day > today.getDate();
      const isAfterCreation = date >= creationDate && date <= today;

      days.push(
        <BotonCalendarioEspecifico
          key={`day-${day}`}
          day={day}
          isVacio={isVacio}
          isCompleted={isCompleted}
          isNotCompleted={isNotCompleted}
          isFuture={isFuture}
          isAfterCreation={isAfterCreation}
        />
      );
    }

    // Generar días del próximo mes
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    const remainingDays = 42 - days.length;
    for (let i = 0; i < remainingDays; i++) {
      const date = new Date(nextYear, nextMonth, i + 1);
      const formattedDate = `${date.getFullYear()}-${formatTwoDigits(date.getMonth() + 1)}-${formatTwoDigits(date.getDate())}`;
      const isCompleted = completionStatus.statusMap?.[formattedDate] || false;
      const isAfterCreation = date >= creationDate && date <= today;

      days.push(
        <BotonCalendarioEspecifico
          key={`empty-end-${i}`}
          day={i + 1}
          isVacio={false}
          isNextMonth={true}
          isCompleted={isCompleted}
          isAfterCreation={isAfterCreation}
        />
      );
    }

    return (
      <div className="month">
        <div className="days-of-week">
          {daysOfWeek.map(day => <div key={day} className="day-name">{day}</div>)}
        </div>
        <div className="days">
          {days}
        </div>
      </div>
    );
  };

  const today = new Date();
  const isNextDisabled = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  return (
    <div className='containerCalendar'>
      <div className='rightContainer'>
        <div className='buttonsContainer'>
          <a className="fancy" onClick={handlePreviousMonth}>
            <span className="top-key"></span>
            <button className="custom-btn btn">&lt;</button>
          </a>
          <h3 className='monthAndYearTitle'>
            {months[currentMonth]} {currentYear}
          </h3>
          <a className={`fancy ${isNextDisabled ? 'disabled' : ''}`} onClick={!isNextDisabled ? handleNextMonth : null}>
            <span className="top-key"></span>
            <button className="custom-btn btn">&gt;</button>
          </a>
        </div>
        <div className="calendario">
          {renderCalendario()}
        </div>
      </div>
    </div>
  );
};

export default CalendarioEspecifico;
