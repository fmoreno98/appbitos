import React from 'react'
import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'

import './BotonCrear.css'

function BotonCrear(props) {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(props.progress);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (

    <>
        <div onClick={handleShow} className="circular-progress">
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
                {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
                <FontAwesomeIcon icon={['fa', 'plus']} size='2x' style={{color: '#0E28C0'}} />
            </div>
            </div>
        </div>
        {/* <button className='botonCrear' onClick={handleShow}>Crear</button> */}

        <Modal  className='modal-lg' show={show} centered onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>Creación de Hábitos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Hábito</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: Caminar"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Caminar 30 minutos" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Frecuencia</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Cada 2 días" />
                </Form.Group>
            </Form>
        </Modal.Body>
        </Modal>
    </>



)
}

export default BotonCrear;