import { useEffect, useContext, useState } from 'react';
import LoginContext from './LoginContext';
import ConsejoDiario from './ConsejoDiario';

const Racha = ({ refresh }) => {
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

            const res = await fetch(`http://localhost:3000/api/estadisticas/historial/${user}`, options);
            const data = await res.json();
            setHistorial(data);
            console.log(data);

            let day = new Date();
            let year = day.getFullYear();
            let month = String(day.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0, por eso se suma 1
            let date = String(day.getDate()).padStart(2, '0');
            
            let formattedDate = `${year}-${month}-${date}`;
            
            // Variable para guardar el valor de retos_completados
            let retosCompletados = null;
            
            // Busca la fecha en el historial
            for (const item of data) {
                if (item.fecha === formattedDate) {
                    setTotalCompleted(item.retos_completados)
                    break; // Sale del bucle si encuentra la coincidencia
                }
            }
            console.log(totalCompleted);
            
            // Calcular el número de días completados
            const completados = data.filter(dia => dia.estado_retos === 'Completado').length;
            setCompletados(completados);

        }

        if (user) obtenerTotalCompletados();
    }, [user, token, refresh]);

    return (
        <div style={styles.container}>
            <ConsejoDiario />
            <p style={styles.paragraph}>Hábitos completados: <b>{totalCompleted}</b></p>
            <p style={styles.paragraph}>Días con todos los hábitos completados:<b>{completados}</b></p>
        </div>
    );
};

export default Racha;
