import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconos } from "./fontawesome.js";
import LoginContext from "./LoginContext";
import BotonCompletar from "./BotonCompletar.jsx";
import FormEditar from './FormEditarHabito.jsx';
import "./Habito.css";
import { obtenerFrecuencia } from "./tools/api.js";

function Habito() {
    const { idHabito } = useParams();
    const { user, token } = useContext(LoginContext);
    const [refrescar, setRefrescar] = useState(0);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoHabito, setTipoHabito] = useState(1);
    const [progreso, setProgreso] = useState(0);
    const [frecuencia, setFrecuencia] = useState(0);
    const [showModal, setShowModal] = useState(false);

    let nomTipoHabito = '';

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

    if (tipoHabito === 1) nomTipoHabito = "Avance Gradual";
    if (tipoHabito === 2) nomTipoHabito = "Acciones";
    if (tipoHabito === 3) nomTipoHabito = "Cumplimiento";

    const handleEditClick = () => {
        setShowModal(true);
    };

    function refresca(){
        setRefrescar(refrescar+1)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col>
                        <Row className="justify-content-left">
                                <FormEditar refresca={refresca} idHabito={idHabito} />
                        </Row>
                        <Row className="justify-content-center">
                            <div className="circular-progress" style={{ width: "250px", height: "250px" }}>
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
                                            strokeDasharray={`${progreso}, 100`}
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className="circular-progress__text">
                                        <div className="proFreq text-center">
                                            {progreso}/{frecuencia}
                                        </div>
                                        <FontAwesomeIcon icon={iconos.prueba} size='6x' style={{ color: '#0E28C0' }} />
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row className="text-center">
                            <h2>{nombre}</h2>
                        </Row>
                        <Row className="text-center">
                            <h4>{descripcion}</h4>
                        </Row>
                        <Row className="text-center">
                            <h4>{nomTipoHabito}</h4>
                        </Row>
                        <Row className="justify-content-center">
                            <BotonCompletar idHabito={idHabito} refresca={refresca} />
                        </Row>
                    </Col>
                    <Col className="bg-light"></Col>
                </Row>
            </Container>

            {showModal && (
                <FormEditar
                    idHabito={idHabito}
                    progress={progreso}
                    onHide={handleCloseModal}
                />
            )}
        </>
    );
}

export default Habito;