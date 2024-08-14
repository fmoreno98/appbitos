import { useParams } from "react-router-dom";
import {Container, Row, Col} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {iconos} from './fontawesome.js';
import React, { useState, useEffect, useContext } from'react';
import LoginContext from './LoginContext';
import './Habito.css';



function Habito(props) {
    const {idHabito} = useParams();

    const [habitos, setHabitos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoHabito, setTipoHabito] = useState(1);
    const { user,token } = useContext(LoginContext);
    const [progreso, setProgreso] = useState(0);
    const [frecuencia, setFrecuencia] = useState(0);
    let seguimiento = 0
    let habito = null;
    let nomTipoHabito = '';


    useEffect(() =>{
        async function obtenerHabitos() {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            };
          const res = await fetch('http://localhost:3000/api/habitos/'+idHabito, options); //pasar el token, no el user
          let data = await res.json()
          habito = data.data

          setNombre(habito.nombre_habito)
          setDescripcion(habito.descripcion)
          setTipoHabito(habito.tipo_habito)
          setFrecuencia(habito.frecuencia)
          console.log("data para : ",user,  nombreHabito)
        }

        async function obtenerProgreso(){
            //obtener dia de hoy
            const fecha = new Date().toISOString().slice(0, 10);
            console.log("fecha: ",fecha)
            const res = await fetch('http://localhost:3000/api/seguimientoHabitos/'+fecha+'/'+idHabito); //pasar el token, no el user
            let data = await res.json()
            console.log("data para : ",data)
            seguimiento = data.data
            setProgreso(seguimiento.progreso)


        }

        obtenerProgreso()
        if (user) obtenerHabitos();
    },[user])
 
    if(tipoHabito == 1) {
        nomTipoHabito = "Avance Gradual"
    }
    if(tipoHabito == 2) {
        nomTipoHabito = "Acciones"
    }
    if(tipoHabito == 3) {
        nomTipoHabito = "Cumplimiento"
    }


    return(
        <>
            <Container>
                <br />
                <Row>
                    <Col className="">
                        <Row className="justify-content-left">
                            <button className="btn btn-light" style={{width: '60px'}}><FontAwesomeIcon icon={iconos.lapiz} size='2x' style={{ color: '#0E28C0' }} /></button>
                        </Row>
                        <Row className="justify-content-center">
                            <div className="circular-progress" style={{width: "250px", height: "250px"}}>
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
                                            strokeDasharray={`${34}, 100`}
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className="circular-progress__text">
                                        <div className="proFreq text-center">
                                            {progreso}/{frecuencia}
                                        </div>
                                        <FontAwesomeIcon icon={iconos.prueba} size='6x' style={{ color: '#0E28C0' }}/>
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
                            {/* <button className="btn btn-completar" style={{width: '160px'}}><FontAwesomeIcon icon={iconos.check} size='2x' style={{ color: '#E8E1D9' }} /></button> */}
                            <button className="btn btn-completar" style={{width: '160px', fontSize: '20px'}}>Completar</button>
                        </Row>
                    </Col>
                    <Col className="bg-light"></Col>
                </Row>
            </Container>
        </>
    )
}

export default Habito;
