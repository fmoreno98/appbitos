import React, { useState, useEffect } from 'react';
import consejos from './tools/consejoDiario.json'; // Ajusta la ruta según tu estructura

const ConsejoDiario = () => {
  const [consejo, setConsejo] = useState('');

  useEffect(() => {
    // Calcula el día del año actual
    const fechaHoy = new Date();
    const diaDelAno = Math.floor((fechaHoy - new Date(fechaHoy.getFullYear(), 0, 0)) / 86400000);

    // Obtén el array de consejos del JSON
    const consejosSaludables = consejos.consejos_saludables;
    // Asegúrate de que el índice esté dentro del rango del array
    if (consejosSaludables.length > 0) {
      const indiceConsejo = diaDelAno % consejosSaludables.length;
      console.log(indiceConsejo);
      setConsejo(consejosSaludables[indiceConsejo]);
    }
  }, []);

  return (
    <div>
      <h1>Consejo Diario</h1>
      <p>{consejo}</p>
    </div>
  );
};

export default ConsejoDiario;
