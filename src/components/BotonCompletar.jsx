import React, { useState, useEffect, useContext } from 'react';
import LoginContext from './LoginContext';
import { Form, Modal } from 'react-bootstrap';

function BotonCompletar(props) {
    const { user, token } = useContext(LoginContext);
    const idHabito = props.idHabito
    let [progreso, setProgreso] = useState(0);
    let [frecuencia, setFrecuencia] = useState(0);
    const [show, setShow] = useState(false);
    let [existe, setExiste] = useState(0);
    //obtener dia de hoy
    const fecha = new Date().toISOString().slice(0, 10);
    useEffect(() => {
        obtenerProgreso()
    }, [])

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
        setExiste(data.data.progreso)
    }

    async function handleSubmit1(e) {
        e.preventDefault();
        if (existe != 0) {
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
                        <button className="btn btn-completar" style={{ width: '160px', fontSize: '20px' }}>Completar</button>
                    </Form>
                </Modal.Body>
            </Modal>

            <button className="btn btn-completar" onClick={handleShow} style={{ width: '160px', fontSize: '20px' }}>Completar</button>
        </>
    )
}

export default BotonCompletar;

