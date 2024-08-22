import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconos } from './fontawesome.js';
import LoginContext from './LoginContext';
import FormEditar from './FormEditarHabito.jsx';
import CalendarioEspecifico from './CalendarioEspecifico.jsx'; // Importar el componente de Calendario
import './Habito.css';

function Habito() {
    const { idHabito } = useParams();
    const { user, token } = useContext(LoginContext);
    const [refrescar, setRefrescar] = useState(0);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoHabito, setTipoHabito] = useState(1);
    const [progreso, setProgreso] = useState(0);
    const [frecuencia, setFrecuencia] = useState(1); // Establecer un valor por defecto

    useEffect(() => {
        async function obtenerHabitos() {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            };
            const res = await fetch('http://localhost:3000/api/habitos/' + idHabito, options);
            let data = await res.json();
            let habito = data.data;

            setNombre(habito.nombre_habito);
            setDescripcion(habito.descripcion);
            setTipoHabito(habito.tipo_habito);
            setFrecuencia(habito.frecuencia);
        }

        async function obtenerProgreso() {
            const fecha = new Date().toISOString().slice(0, 10);
            const res = await fetch('http://localhost:3000/api/seguimientoHabitos/' + fecha + '/' + idHabito);
            let data = await res.json();
            let seguimiento = data.data;
            setProgreso(seguimiento.progreso);
        }

        obtenerProgreso();
        if (user) obtenerHabitos();
    }, [user, idHabito, token, refrescar]);

    let nomTipoHabito = '';
    if (tipoHabito === 1) nomTipoHabito = "Avance Gradual";
    if (tipoHabito === 2) nomTipoHabito = "Acciones";
    if (tipoHabito === 3) nomTipoHabito = "Cumplimiento";

    const handleEditClick = () => {
        setShowModal(true);
    };

    const refresca = () => {
        setRefrescar(refrescar + 1);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className="infoHabit">
                        <Row className="justify-content-md-center">
                            <Col xs lg="6">
                                <h2>{nombre}</h2>
                                <h4>{descripcion}</h4>
                                <h4>{nomTipoHabito}</h4>
                                <div className="circular-progress" style={{ width: "250px", height: "250px" }}>
                                    <div className="circular-progress__circle">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path
                                                className="circle-bg"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path
                                                className="circle"
                                                strokeDasharray={`${progreso}, 100`}
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <div className="circular-progress__text">
                                            <FontAwesomeIcon icon={iconos.prueba} size='6x' style={{ color: '#0E28C0' }} />
                                        </div>
                                    </div>
                                </div>
                                <Button className="btn btn-completar" style={{ width: '160px', fontSize: '20px' }}>Completar</Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <FormEditar idHabito={idHabito} refresca={refresca} />
                        </Row>
                    </div>
                </Col>
                <Col md={6}>
                    <CalendarioEspecifico idHabito={idHabito} /> {/* Incluir el componente de calendario */}
                </Col>
            </Row>
        </Container>
    );
}

export default Habito;
