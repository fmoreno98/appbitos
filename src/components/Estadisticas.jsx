import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { AgCharts } from 'ag-charts-react';
import { estadisticas } from './tools/api';
import LoginContext from './LoginContext';

const Estadisticas = () => {
  const context = useContext(LoginContext); // Obtener el contexto
  const { user,token } = context; // Obtener el usuario del contexto
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
    if (fechas.length === 7 ) { // Verificar que `fechas` tenga el largo esperado y que `user` esté definido
      estadisticas(user,token).then(data => { // Pasar el ID de usuario a la función `estadisticas`
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
  }, [fechas, user]);
  

  return (
    <div style={{ height: '500px', width: '100%', marginTop: '40px' }}>
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
