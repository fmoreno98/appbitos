import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconos } from "./fontawesome.js";
import React, { useState, useEffect, useContext } from "react";
import LoginContext from "./LoginContext";
import BotonCompletar from "./BotonCompletar.jsx";
import "./Habito.css";
import { obtenerFrecuencia } from "./tools/api.js";

function Habito(props) {
  const { idHabito } = useParams();

  const [habitos, setHabitos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoHabito, setTipoHabito] = useState(1);
  const { user, token } = useContext(LoginContext);
  const [progreso, setProgreso] = useState(0);
  const [frecuencia, setFrecuencia] = useState(0);
  const [refrescar, setRefrescar] = useState(0);
  const [progress, setProgress] = useState(0);
  let seguimiento = 0;
  let habito = null;
  let nomTipoHabito = "";

  useEffect(() => {
    async function obtenerHabitos() {
      const res = await fetch("http://localhost:3000/api/habitos/" + idHabito, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      let data = await res.json();
      habito = data.data;

      setNombre(habito.nombre_habito);
      setDescripcion(habito.descripcion);
      setTipoHabito(habito.tipo_habito);
      setFrecuencia(habito.frecuencia);
    }

    // async function obtenerProgreso(){
    //     //obtener dia de hoy
    //     const fecha = new Date().toISOString().slice(0, 10);
    //     const res = await fetch('http://localhost:3000/api/seguimientoHabitos/'+fecha+'/'+idHabito,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': token
    //         }
    //     });
    //     let data = await res.json()
    //     seguimiento = data.data
    //     setProgreso(seguimiento?.progreso || 0)
    // }

    async function obtenerProgreso() {
      try {
        // Obtener el día de hoy en formato 'YYYY-MM-DD'
        const fecha = new Date().toISOString().slice(0, 10);

        // Realizar la solicitud al servidor
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

        // Verificar si la respuesta fue exitosa
        if (!res.ok) {
          throw new Error(`Error en la solicitud: ${res.statusText}`);
        }

        // Parsear la respuesta a JSON
        const data = await res.json();

        // Asignar el seguimiento al valor recibido o establecerlo a un objeto vacío si no existe
        const seguimiento = data.data || {};

        // Establecer el progreso usando el valor de `progreso` o 0 si no está disponible
        setProgreso(seguimiento.progreso || 0);
        console.log("seguimiento: ", seguimiento.progreso);
        console.log("progreso: ", progreso);
      } catch (error) {
        // Manejo de errores: loguear el error o manejarlo de otra manera
        console.error("Error al obtener el progreso:", error);
      }
    }

    obtenerProgreso();

    if (user) obtenerHabitos();
  }, [user, refrescar]);

  useEffect(() => {
    const actualizarProgreso = async () => {
      let porcentaje = 0;
      if (progreso > 0 && frecuencia > 0) {
        porcentaje = (progreso / frecuencia) * 100;
      }
      setProgress(porcentaje);
      console.log("porcentaje: ", porcentaje);
      console.log("progresssss: ", progress);
    };

    actualizarProgreso();
  }, [progreso, frecuencia]);

  if (tipoHabito == 1) {
    nomTipoHabito = "Avance Gradual";
  }
  if (tipoHabito == 2) {
    nomTipoHabito = "Acciones";
  }
  if (tipoHabito == 3) {
    nomTipoHabito = "Cumplimiento";
  }

  function refresca() {
    setRefrescar(refrescar + 1);
  }

  return (
    <>
      <Container>
        <br />
        <Row>
          <Col className="">
            <Row className="justify-content-left">
              <button className="btn btn-light" style={{ width: "60px" }}>
                <FontAwesomeIcon
                  icon={iconos.lapiz}
                  size="2x"
                  style={{ color: "#0E28C0" }}
                />
              </button>
            </Row>
            <Row className="justify-content-center">
              <div
                className="circular-progress"
                style={{ width: "250px", height: "250px" }}
              >
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
                    <div className="proFreq text-center">
                      {progreso}/{frecuencia}
                    </div>
                    <FontAwesomeIcon
                      icon={iconos.prueba}
                      size="6x"
                      style={{ color: "#0E28C0" }}
                    />
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
    </>
  );
}

export default Habito;
