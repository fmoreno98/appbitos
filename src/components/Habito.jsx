import { useParams } from "react-router-dom";
import {Container, Row, Col} from'react-bootstrap';
import React, { useState, useEffect, useContext } from'react';
import LoginContext from './LoginContext';
import HabitoEspecifico from "./HabitoEspecifico";




function Habito(props) {
    const {idHabito} = useParams();

    const [habitos, setHabitos] = useState([]);
    const { user } = useContext(LoginContext);


    useEffect(() =>{
        async function obtenerHabitos() {
          const res = await fetch('http://localhost:3000/api/habitos/'+user); //pasar el token, no el user
          const data = await res.json()
          setHabitos(data.data)
          console.log("data para : ",user,  data)
          
        }
        if (user)  obtenerHabitos();
    },[user])
 


    return(
        <>
            <h1>{idHabito}</h1>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <button>modificar</button>
                        </Row>
                        <Row>
                            {/* <h1>habito</h1> */}
                            <HabitoEspecifico progress={habitos[idHabito].frecuencia}/>
                        </Row>
                        <Row>
                            <h1>nombre habito</h1>
                        </Row>
                        <Row>
                            <h1>desc</h1>
                        </Row>
                        <Row>
                            <h1>tipo habito</h1>
                        </Row>
                        <Row>
                            <button>Completar</button>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default Habito;
