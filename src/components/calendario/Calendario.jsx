import React, { useState, useContext, useEffect } from 'react';
import BotonCalendario from './BotonCalendario';
import './Calendario.css';
import LoginContext from '../LoginContext';
import { historial } from '../tools/api';

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

const Calendario = ({ refresh }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [completionStatus, setCompletionStatus] = useState({});
  const { user, token } = useContext(LoginContext);
  const [selectedDay, setSelectedDay] = useState(null);

  const fetchCompletionStatus = async (month, year) => {
    try {
      const userId = user;
      const data = await historial(userId, token, month, year);

      const statusMap = data.reduce((acc, { fecha, estado_retos }) => {
        acc[fecha] = estado_retos === 'Completado';
        return acc;
      }, {});

      setCompletionStatus((prevStatus) => ({
        ...prevStatus,
        ...statusMap,
      }));
    } catch (error) {
      console.error('Error fetching completion status:', error);
    }
  };

  useEffect(() => {
    fetchCompletionStatus(currentMonth, currentYear);
  }, [user, currentMonth, currentYear, refresh]);

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
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = (firstDay + 6) % 7;

    let days = [];
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = getDaysInMonth(previousMonth, previousYear);

    const today = new Date();
    const isCurrentMonthAndYear = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

    // Generar días del mes anterior
    for (let i = 0; i < adjustedFirstDay; i++) {
      const date = `${previousYear}-${formatTwoDigits(previousMonth + 1)}-${formatTwoDigits(prevMonthDays - (adjustedFirstDay - i - 1))}`;
      const isCompleted = completionStatus[date] || false;
      days.push(
        <BotonCalendario
          key={`empty-start-${i}`}
          day={prevMonthDays - (adjustedFirstDay - i - 1)}
          isEmpty={true}
          isPreviousMonth={true}
          isCompleted={isCompleted}
        />
      );
    }

    // Generar días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${formatTwoDigits(currentMonth + 1)}-${formatTwoDigits(day)}`;
      const isCompleted = completionStatus[date] || false;
      const isFuture = isCurrentMonthAndYear && day > today.getDate();

      days.push(
        <BotonCalendario
          key={`day-${day}`}
          day={day}
          isEmpty={false}
          isCompleted={isCompleted}
          isFuture={isFuture} // Pasar prop para días futuros
          onClick={() => setSelectedDay(day)}
        />
      );
    }

    // Generar días del próximo mes
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    const remainingDays = 42 - days.length; // 6 filas de 7 días cada una
    for (let i = 0; i < remainingDays; i++) {
      const date = `${nextYear}-${formatTwoDigits(nextMonth + 1)}-${formatTwoDigits(i + 1)}`;
      const isCompleted = completionStatus[date] || false;

      days.push(
        <BotonCalendario
          key={`empty-end-${i}`}
          day={i + 1}
          isEmpty={true}
          isNextMonth={true}
          isCompleted={isCompleted}
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

export default Calendario;
