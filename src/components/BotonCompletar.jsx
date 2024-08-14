import React, { useState, useEffect, useContext } from'react';
import LoginContext from './LoginContext';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { Form } from 'react-router-dom';


function BotonCompletar(props) {
    // const {idHabito} = useParams();
    const { user } = useContext(LoginContext);
    const idHabito = props.idHabito
    let [progreso, setProgreso] = useState(0);
    console.log("idHabito: ",idHabito)
    //obtener dia de hoy
    const fecha = new Date().toISOString().slice(0, 10);
    async function obtenerProgreso(){

        console.log("fecha: ",fecha)
        const res = await fetch('http://localhost:3000/api/seguimientoHabitos/'+fecha+'/'+idHabito); //pasar el token, no el user
        let data = await res.json()
        console.log("data para : ",data)
        setProgreso(data.data.progreso)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("progreso: ",progreso)
        const res = await fetch('http://localhost:3000/api/seguimientoHabitos/'+fecha+'/'+idHabito, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                progreso: progreso,
                id_usuario: user
            })
        });
        let data = await res.json()
        console.log("data: ",data)
        // obtenerProgreso()
        props.handleClose()
    }


    return(
        <>
            <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Completar hábito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Frecuencia</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Ej: 1"
                            value={progreso}
                            onChange={e => setProgreso(e.target.value)}
                            autoFocus
                            /> 
                        </Form.Group>
                        <button className="btn btn-completar" style={{width: '160px', fontSize: '20px'}}>Completar</button>
                    </Form>
                </Modal.Body>
            </Modal>

            <button className="btn btn-completar" style={{width: '160px', fontSize: '20px'}}>Completar</button>
        </>


    )
}

export default BotonCompletar;

