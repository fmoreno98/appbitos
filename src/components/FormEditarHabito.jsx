import React, { useEffect } from 'react'
import LoginContext from './LoginContext';
import { useState,useContext } from 'react'
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'
// import './FormEditarHabito.css'

import { editarHabito, buscarHabito } from './tools/api';


function FormEditar(props) {
    const idHabito = props.idHabito;
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(props.progress);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('')

    const [nombreHabito, setNombreHabito] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [frecuencia, setFrecuencia] = useState(1)
    const [tipo_habito, setTipoHabito] = useState(1)
    const { user } = useContext(LoginContext);
    
    const manejarCambio = (evento) => {
        setOpcionSeleccionada(evento.target.value);
        if (evento.target.value === 'gradual'){
            setTipoHabito(1)
        }else if(evento.target.value === 'acciones'){
            setTipoHabito(2)
        }else if(evento.target.value === 'cumplimiento'){
            setTipoHabito(3)
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        buscarHabito(idHabito).then(data => {
            setNombreHabito(data.nombre_habito);
            setDescripcion(data.descripcion);
            setFrecuencia(data.frecuencia);
            setTipoHabito(data.tipo_habito);
        })
        
        .catch(err => console.log(err));
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        // Aquí puedes realizar acciones adicionales con los datos del formulario

        // Generar fecha y hora actuales

        editarHabito(nombreHabito, descripcion, tipo_habito, frecuencia, idHabito);
        setShow(false);
    }

    //borrar los campos una vez enviado el formulario
    function borrarCampos() {
        setNombreHabito('');
        setDescripcion('');
        setFrecuencia(1);
        setTipoHabito(1) 
    }

    return (

        <>
        {nombreHabito}
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
                        <FontAwesomeIcon icon={['fa', 'plus']} size='2x' style={{ color: '#0E28C0' }} />
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Hábito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Editar Hábito</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Caminar"
                                value={nombreHabito}
                                onChange={(event) => setNombreHabito(event.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Editar Descripción</Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Ej: Caminar 30 minutos"
                                value={descripcion} 
                                onChange={(event) => setDescripcion(event.target.value)}   
                            />
                        </Form.Group>
                        <FormGroup className='mb-3' controlId='exampleform.ControlInput1'>
                            <FormLabel>Editar Tipo de hábito</FormLabel>
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
                                <Form.Control
                                    type="number"
                                    placeholder="Ej: 50"
                                    value={frecuencia}
                                    onChange={(event) => setFrecuencia(event.target.value)}
                                />
                            </Form.Group>
                        )}
                        
                        {opcionSeleccionada === 'acciones' && (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Acciones</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ej: 3"
                                    max={100}
                                    min={0}
                                    value={frecuencia}
                                    onChange={(event) => setFrecuencia(event.target.value)}
                                />
                            </Form.Group>
                        )}
                        
                        {opcionSeleccionada === 'cumplimiento' && (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Cumplimiento</Form.Label>
                                <br />
                                <p className='cumpl p-2'>Cumplimiento estará siempre activo. Se desactivará en el momento que incumplas el hábito.</p>

                            </Form.Group>
                        )}
                        <Button variant="primary" type="submit">Aceptar Edicion</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>



    )
}

export default FormEditar;