import React, { useState, useEffect, useContext } from 'react';
import LoginContext from './LoginContext';
import { Form, Modal } from 'react-bootstrap';
import { obtenerFrecuencia } from './tools/api';

function BotonCompletar(props) {
    const { user, token } = useContext(LoginContext);
    const idHabito = props.idHabito
    let [progreso, setProgreso] = useState(0);
    let [habito, setHabito] = useState(0);
    let [tipoHabito, setTipoHabito] = useState(0);
    const [show, setShow] = useState(false);
    let [existe, setExiste] = useState(0);
    //obtener dia de hoy
    const fecha = new Date().toISOString().slice(0, 10);
    useEffect(() => {
        obtenerProgreso()
        obtenerHabitos()
    }, [])

    async function obtenerHabitos() {
        const res = await fetch("http://localhost:3000/api/habitos/" + idHabito, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
        let data = await res.json();
        let tipo_habito = data.data.tipo_habito;

        setTipoHabito(tipo_habito);
    }

    async function obtenerProgreso() {
        const res = await fetch('http://localhost:3000/api/seguimientoHabitos/' + fecha + '/' + idHabito, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        let data = await res.json()
        setProgreso(data.data.progreso)
        setExiste(data.data)
    }

    async function handleSubmit1(e) {
        e.preventDefault();
        if (existe) {
            const res = await fetch('http://localhost:3000/api/seguimientoHabitos/' + fecha + '/' + idHabito, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    progreso: progreso,
                    id_usuario: user
                })
            });
            let data = await res.json()
            console.log("data: ", data)

        } else {
            let fecha = new Date().toISOString().slice(0, 10);
            const res = await fetch('http://localhost:3000/api/seguimientoHabitos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    id_usuarioSeguimiento: user,
                    id_habitos: idHabito,
                    fecha: fecha,
                    progreso: progreso,
                    id_usuario: user
                })
            });
            let data = await res.json()
            console.log("data: ", data)
            setExiste(progreso);
        }
        props.refresca();
        handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Completar hábito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit1}>
                        {(tipoHabito === 1 || tipoHabito === 2) && (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Frecuencia</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ej: 1"
                                    value={progreso}
                                    onChange={e => setProgreso(e.target.value)}
                                    autoFocus
                                />
                                <button className="btn btn-completar" style={{ width: '160px', fontSize: '20px', marginTop: "10px" }}>Completar</button>
                            </Form.Group>
                        )}
                        {tipoHabito === 3 && (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                {(progreso === 0) ?
                                    <Form.Label>Completar hábito</Form.Label> :
                                    <Form.Label>Ha roto su cumplimiento diario y su progreso de hoy será 0</Form.Label>
                                }
                                <br />
                                {(progreso === 0) ?
                                    <button className="btn btn-completar" onClick={() => setProgreso(1)} style={{ width: '160px', fontSize: '20px', marginTop: "10px" }}>Completar</button>
                                    : <button className="btn btn-completar" onClick={() => setProgreso(0)} style={{ width: '160px', fontSize: '20px', marginTop: "10px" }}>Desompletar</button>
                                }
                            </Form.Group>
                        )}
                    </Form>

                </Modal.Body>
            </Modal >

            <button className="btn btn-completar" onClick={handleShow} style={{ width: '160px', fontSize: '20px' }}>Completar</button>
        </>
    )
}

export default BotonCompletar;

