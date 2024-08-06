import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgCharts } from 'ag-charts-react';

// React Chart Component
const Estadisticas = () => {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
        { fecha: '31/07', cantidadHabitos: 0 },
        { fecha: '01/08', cantidadHabitos: 0 },
        { fecha: '02/08', cantidadHabitos: 0 },
        { fecha: '03/08',  cantidadHabitos: 0 },
        { fecha: '04/08',  cantidadHabitos: 0 },
        { fecha: '05/08', cantidadHabitos: 0 },
        { fecha: '06/08', cantidadHabitos: 1 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: 'bar', xKey: 'fecha', yKey: 'cantidadHabitos' }],
  });

  return (
    // AgCharts component with options passed as prop
    <AgCharts options={chartOptions} />
  );
}

// Render component inside root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Estadisticas />);
export default Estadisticas;