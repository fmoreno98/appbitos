import React, { useState, useContext } from 'react';
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BotonCrear.css';
import LoginContext from './LoginContext';
import { iconos } from './fontawesome.js';

function BotonCrear(props) {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(props.progress);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
    const [nombreHabito, setNombreHabito] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [frecuencia, setFrecuencia] = useState('')
    const [tipo_habito, setTipoHabito] = useState(1)
    const [error, setError] = useState(''); // Para mostrar mensajes de error
    const { user } = useContext(LoginContext);
    
    const manejarCambio = (evento) => {
        setOpcionSeleccionada(evento.target.value);
        if (evento.target.value === 'gradual') {
            setTipoHabito(1);
        } else if (evento.target.value === 'acciones') {
            setTipoHabito(2);
        } else if (evento.target.value === 'cumplimiento') {
            setTipoHabito(3);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event) {
        event.preventDefault();
        
        // Validaciones
        if (nombreHabito.trim() === '') {
            setError('El nombre del hábito no puede estar vacío.');
            return;
        } else if (nombreHabito.length > 50) { // Limita el nombre a 50 caracteres
            setError('El nombre del hábito no puede tener más de 50 caracteres.');
            return;
        } else if (frecuencia.trim() === '') {
            setError('La frecuencia no puede estar vacía.');
            return;
        } else if (isNaN(frecuencia) || frecuencia <= 0) {
            setError('La frecuencia debe ser un número positivo mayor que cero.');
            return;
        }
        
        // Limpiar mensaje de error
        setError('');

        // Generar fecha y hora actuales
        let now = new Date();
        now = now.getTime(); // Puedes modificar esta lógica para generar un código más específico

        const ob = {
            "nombre_habito": nombreHabito,
            "descripcion": descripcion,
            "frecuencia": frecuencia,
            "fecha_creacion": now,
            "activo": "1",
            "id_usuario": user,
            "tipo_habito": tipo_habito
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        }

        fetch('http://localhost:3000/api/habitos', fetchOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.refresca();
                borrarCampos();
                setOpcionSeleccionada('');
                props.creado();
            })
            .catch(error => {
                console.error('Error:', error);
            });

        setShow(false);
    }

    // Borrar los campos una vez enviado el formulario
    function borrarCampos() {
        setNombreHabito('');
        setDescripcion('');
        setFrecuencia('');
        setTipoHabito(1); 
    }

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
                        <FontAwesomeIcon icon={iconos.plus} size='2x' style={{ color: '#0E28C0' }} />
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Creación de Hábitos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Hábito</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Caminar"
                                value={nombreHabito}
                                onChange={(event) => setNombreHabito(event.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Ej: Caminar 30 minutos"
                                value={descripcion} 
                                onChange={(event) => setDescripcion(event.target.value)}   
                            />
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
                        {error && <p className="text-danger">{error}</p>} {/* Mostrar mensaje de error */}
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BotonCrear;
