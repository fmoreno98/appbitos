import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconos } from "./fontawesome.js";
import React, { useState, useEffect, useContext } from "react";
import LoginContext from "./LoginContext";
import BotonCompletar from "./BotonCompletar.jsx";
import FormEliminar from "./FormEliminarHabito.jsx";
import FormEditar from "./FormEditarHabito.jsx";
import CalendarioEspecifico from "./CalendarioEspecifico.jsx"; // Importar el componente de Calendario
import HabitoEstadistica from "./HabitoEstadistica.jsx";
import "./Habito.css";

function Habito() {
    const navigate = useNavigate();
    const { idHabito } = useParams();
    const { user, token } = useContext(LoginContext);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipoHabito, setTipoHabito] = useState(1);
    const [iconoHabito, setIconoHabito] = useState("");
    const [progreso, setProgreso] = useState(0);
    const [frecuencia, setFrecuencia] = useState(1);
    const [refrescar, setRefrescar] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }

        async function obtenerHabitos() {
            const res = await fetch(`http://localhost:3000/api/habitos/${idHabito}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            const data = await res.json();
            const habito = data.data;

            setNombre(habito.nombre_habito);
            setDescripcion(habito.descripcion);
            setTipoHabito(habito.tipo_habito);
            setFrecuencia(habito.frecuencia);
            setIconoHabito(habito.icono_habito);
        }

        async function obtenerProgreso() {
            try {
                const fecha = new Date().toISOString().slice(0, 10);
                const res = await fetch(
                    `http://localhost:3000/api/seguimientoHabitos/${fecha}/${idHabito}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(`Error en la solicitud: ${res.statusText}`);
                }

                const data = await res.json();
                const seguimiento = data.data || {};
                setProgreso(seguimiento.progreso || 0);
            } catch (error) {
                console.error("Error al obtener el progreso:", error);
            }
        }

        obtenerProgreso();

        if (user) obtenerHabitos();
    }, [user, idHabito, token, refrescar]);

    useEffect(() => {
        const actualizarProgreso = async () => {
            let porcentaje = 0;
            if (progreso > 0 && frecuencia > 0) {
                porcentaje = (progreso / frecuencia) * 100;
            }
            setProgress(porcentaje);
        };

        actualizarProgreso();
    }, [progreso, frecuencia]);

    const refresca = () => {
        setRefrescar(refrescar + 1);
    };

    let nomTipoHabito = "";
    if (tipoHabito === 1) nomTipoHabito = "Avance Gradual";
    if (tipoHabito === 2) nomTipoHabito = "Acciones";
    if (tipoHabito === 3) nomTipoHabito = "Cumplimiento";

    return (
        <Container style={{ marginTop: "20px" }}>
            <Row className="justify-content-center">
                <FormEditar idHabito={idHabito} refresca={refresca} />
            </Row>
            <Row>
                <Col md={6}>
                    <div className="infoHabit">
                        <Row className="justify-content-md-center">
                            <Col xs lg="6">
                                <div className="circular-progress" style={{ width: "250px", height: "250px" }}>
                                    <div className="circular-progress__circle">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path
                                                className="circle-bg"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path
                                                className="circle"
                                                strokeDasharray={`${progress}, 100`}
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <div className="circular-progress__text text-center">
                                            <div className="proFreq text-center">
                                                {progreso}/{frecuencia}
                                            </div>
                                            <FontAwesomeIcon icon={iconos[iconoHabito]} size="6x" style={{ color: "#0E28C0" }} />
                                        </div>
                                    </div>
                                </div>
                                <Row className="text-center">
                                    <h2>{nombre}</h2>
                                    <h4>{descripcion}</h4>
                                    <h4>{nomTipoHabito}</h4>
                                </Row>
                            </Col>
                            <Row className="justify-content-center">
                                <Col xs lg="4"><BotonCompletar idHabito={idHabito} refresca={refresca} /></Col>
                                <Col xs lg="4"><FormEliminar idHabito={idHabito} /></Col>
                            </Row>
                        </Row>
                    </div>
                </Col>
                <Col md={6}>
                    <CalendarioEspecifico idHabito={idHabito} />
                    <HabitoEstadistica idHabito={idHabito} />
                </Col>
            </Row>
        </Container>
    );
}

export default Habito;