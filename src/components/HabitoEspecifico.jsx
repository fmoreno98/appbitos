import React, { useEffect, useContext } from 'react';
import './HabitoEspecifico.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import LoginContext from './LoginContext';
import { iconos } from './fontawesome.js';
import { obtenerProgreso, obtenerFrecuencia } from './tools/api';

function HabitoEspecifico({ habito }) {

    const [progress, setProgress] = useState(0);
    const [nombreHabito, setNombreHabito] = useState(habito.nombreHabito);
    const idHabito = habito.id;
    const { token } = useContext(LoginContext);

    useEffect(() => {
        const actualizarProgreso = async () => {
            const data = await obtenerProgreso(idHabito, token)
            const dataFrecuencia = await obtenerFrecuencia(idHabito, token)
            const progreso = data.data.progreso
            const frecuencia = dataFrecuencia.data.frecuencia
            let porcentaje = 0;
            if (progreso > 0 && frecuencia > 0) {
                porcentaje = (progreso / frecuencia) * 100;
            } 
            setProgress(porcentaje);
        };

        actualizarProgreso();
    }, [])

    return (
        <>
            <Link to={`/habito/${idHabito}`} className="link-habito">
                <div className="circular-progress">
                    <div className="circular-progress__circle">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path
                                className="circle-bg"
                                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="circle"
                                strokeDasharray={`${progress}, 100`}
                                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <div className="circular-progress__text">
                            <FontAwesomeIcon icon={iconos.ojo} size='2x' style={{ color: '#0E28C0' }} />
                        </div>
                    </div>
                </div>
            </Link>
        </>

    );
}

export default HabitoEspecifico;