import React, { useState, useContext, useEffect } from 'react';
import BotonCalendario from './BotonCalendario';
import './Calendario.css';
import LoginContext from '../LoginContext';
import { historial } from '../tools/api'; // Asegúrate de que esta ruta sea correcta

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

const Calendario = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [completionStatus, setCompletionStatus] = useState({});
  const { user,token } = useContext(LoginContext);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayNotes, setSelectedDayNotes] = useState([]);

  useEffect(() => {
    const fetchCompletionStatus = async () => {
      try {
        // Reemplaza con el ID del usuario actual
        const userId = user; 
        const data = await historial(userId,token);

        // Procesa la respuesta para establecer el estado de completado
        const statusMap = data.reduce((acc, { fecha, estado_retos }) => {
          acc[fecha] = estado_retos === 'Completado';
          return acc;
        }, {});
        console.log('Status Map:', statusMap);
        setCompletionStatus(statusMap);
      } catch (error) {
        console.error('Error fetching completion status:', error);
      }
    };

    fetchCompletionStatus();
  }, [user, currentMonth, currentYear]);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendario = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = (firstDay + 6) % 7;
    const lastDay = new Date(currentYear, currentMonth, daysInMonth).getDay();
    const adjustedLastDay = (lastDay + 6) % 7;

    let days = [];
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = getDaysInMonth(previousMonth, previousYear);

    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(
        <BotonCalendario
          key={`empty-start-${i}`}
          day={prevMonthDays - (adjustedFirstDay - i - 1)}
          isEmpty={true}
          isPreviousMonth={true}
        />
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${formatTwoDigits(currentMonth + 1)}-${formatTwoDigits(day)}`;
      const isCompleted = completionStatus[date] || false;
      days.push(
        <BotonCalendario
          key={`day-${day}`}
          day={day}
          isEmpty={false}
          isCompleted={isCompleted}
          onClick={() => setSelectedDay(day)}
        />
      );
    }

    for (let i = 0; i < (6 - adjustedLastDay); i++) {
      days.push(
        <BotonCalendario
          key={`empty-end-${i}`}
          day={i + 1}
          isEmpty={true}
          isNextMonth={true}
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

  return (
    <div className='containerCalendar'>
      <div className='rightContainer'>
        <div className='buttonsContainer'>
          <a className="fancy" onClick={handlePreviousMonth}>
            <span className="top-key"></span>
            <span className="text">PREVIOUS</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
          <h3 className='monthAndYearTitle'>
            {months[currentMonth]} {currentYear}
          </h3>
          <a className="fancy" onClick={handleNextMonth}>
            <span className="top-key"></span>
            <span className="text">NEXT</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
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
