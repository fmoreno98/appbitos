import { useEffect, useContext, useState } from 'react';
import LoginContext from './LoginContext';

const Racha = () => {
    const { user, token } = useContext(LoginContext);
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [historial, setHistorial] = useState([]);
    const [completados, setCompletados] = useState(0);
    const [porcentajeCompletado, setPorcentajeCompletado] = useState(0);

    const styles = {
        container: {
            // backgroundColor: '#E8E1D9',
            padding: '20px',
            borderRadius: '10px',
            // maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgb(147, 138, 127)',
        },
        heading: {
            color: '#2F49D4',
            fontSize: '2em',
            margin: '0 0 10px',
        },
        paragraph: {
            color: '#2F49D4',
            fontSize: '1.2em',
            margin: '5px 0',
        },
    };

    useEffect(() => {
        async function obtenerTotalCompletados() {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            };

            const resTotal = await fetch(`http://localhost:3000/api/estadisticas/totalCompleted/${user}`, options);
            const dataTotal = await resTotal.json();
            setTotalCompleted(dataTotal.total_completados);

            const res = await fetch(`http://localhost:3000/api/estadisticas/historial/${user}`, options);
            const data = await res.json();
            setHistorial(data);
            // Calcular el número de días completados
            const completados = data.filter(dia => dia.estado_retos === 'Completado').length;
            setCompletados(completados);


            const resPorsentage = await fetch(`http://localhost:3000/api/estadisticas/percentage/${user}`, options);
            const dataPorsentage = await resPorsentage.json();
            setPorcentajeCompletado(dataPorsentage.porcentaje_completado);
            console.log("Porcentaje completado para:", user, dataPorsentage.porcentaje_completado);

        }

        if (user) obtenerTotalCompletados();
    }, [user, token]);

    return (
        <div style={styles.container}>
        <h1 style={styles.heading}>Racha</h1>
        <p style={styles.paragraph}>Hábitos completados: <b>{totalCompleted}</b></p>
        <p style={styles.paragraph}>Días con todos los hábitos completados:<b>{completados}</b></p>
        <p style={styles.paragraph}>Porcentaje completado:<b> {porcentajeCompletado}%</b></p>
    </div>
    );
};

export default Racha;
