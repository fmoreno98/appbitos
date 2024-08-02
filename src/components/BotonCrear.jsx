import React from 'react'
import { useState } from 'react'
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'

import './BotonCrear.css'

function BotonCrear(props) {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(props.progress);
    const [opcionSeleccionada, setOpcionSeleccioanda] = useState('')
    const [frecuencia, setFrecuencia] = useState(false)

    const manejarCambio = (evento) => {
        setOpcionSeleccioanda(evento.target.value);
    };

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
                <FontAwesomeIcon icon={['fa', 'plus']} size='2x' style={{color: '#0E28C0'}} />
            </div>
            </div>
        </div>

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
                <FormGroup className='mb-3' controlId='exampleform.ControlInput1'>
                    <FormLabel>Tipo de hábito</FormLabel>
                    <FormSelect onChange={manejarCambio}>
                        <option value=''>Seleccionar opción</option>
                        <option value='gradual'>Avance gradual</option>
                        <option value='acciones'>Acciones</option>
                        <option value='cumplimiento'>Cumplimiento</option>
                    </FormSelect>
                </FormGroup>
                {opcionSeleccionada === 'gradual' && (
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gradual</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Cada 2 días" />
                        </Form.Group>
                    )
                }
                {opcionSeleccionada === 'acciones' && (
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Acciones</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Cada 2 días" />
                        </Form.Group>
                    )
                }
                {opcionSeleccionada === 'cumplimiento' && (
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cumplimiento</Form.Label>
                            <br />
                            Cumplimiento estará siempre activo. Se desactivará en el momento que <br />
                            incumplas el hábito.
                        </Form.Group>
                    )
                }
            </Form>
        </Modal.Body>
        </Modal>
    </>



)
}

export default BotonCrear;