import React from 'react';
import  './HabitoEspecifico.css';
// import './fontawesome.js'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import {iconos} from './fontawesome.js';

function HabitoEspecifico(props) {

    const [progress, setProgress] = useState(props.progress);
    const [nombreHabito, setNombreHabito] = useState(props.nombreHabito);
    const idhabito = props.idHabito;

    return (
        <>
        <Link to={`/habito/${idhabito}`} className="link-habito">
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