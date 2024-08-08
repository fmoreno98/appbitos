import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { AgCharts } from 'ag-charts-react'; // Importa AgCharts desde ag-charts-community
import { estadisticas } from './tools/api'; // Asegúrate de que la ruta sea correcta

const Estadisticas = () => {
  const [fechas, setFechas] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    data: [],
    series: [{ type: 'bar', xKey: 'fecha', yKey: 'cantidadHabitos' }],
  });

  useEffect(() => {
    const obtenerFechasUltimosSieteDias = () => {
      const hoy = new Date();
      const fechasArray = [];

      for (let i = 0; i < 7; i++) {
        const fecha = new Date(hoy);
        fecha.setDate(hoy.getDate() - i);

        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0

        fechasArray.push(`${dia}-${mes}`);
      }

      return fechasArray.reverse(); // Invertir para mostrar en orden cronológico
    };

    setFechas(obtenerFechasUltimosSieteDias());
  }, []);

  useEffect(() => {
    if (fechas.length === 7) { // Verificar que `fechas` tenga el largo esperado
      estadisticas().then(data => {
        const formattedData = fechas.map(fecha => {
          const fechaData = data.find(d => {
            const date = new Date(d.fecha);
            const dia = date.getDate().toString().padStart(2, '0');
            const mes = (date.getMonth() + 1).toString().padStart(2, '0');
            return `${dia}-${mes}` === fecha;
          });
          return { fecha, cantidadHabitos: fechaData ? fechaData.count : 0 };
        });

        setChartOptions({
          data: formattedData,
          series: [{ type: 'bar', xKey: 'fecha', yKey: 'cantidadHabitos' }],
        });
      }).catch(error => {
        console.error('Error fetching statistics:', error);
      });
    }
  }, [fechas]);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AgCharts
        options={chartOptions}
      />
    </div>
  );
};

// Render component inside root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Estadisticas />);
export default Estadisticas;
