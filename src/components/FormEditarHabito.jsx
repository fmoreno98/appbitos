import React, { useEffect, useState, useContext } from 'react';
import LoginContext from './LoginContext';
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
import { editarHabito, buscarHabito } from './tools/api';
import { iconos } from './fontawesome.js';
import { useNavigate } from 'react-router-dom';
import ModalSeleccionIcono from './ModalSeleccionIcono';

function FormEditar(props) {
    const navigate = useNavigate();
    const { idHabito } = props;
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(props.progress);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [iconoHabito, setIconoHabito] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(iconos.editar);
    const [showIconSelector, setShowIconSelector] = useState(false);
    const [nombreHabito, setNombreHabito] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [frecuencia, setFrecuencia] = useState(1);
    const [tipo_habito, setTipoHabito] = useState(1);
    const { user, token } = useContext(LoginContext);
    const [error, setError] = useState('');

    const manejarCambio = (evento) => {
        setOpcionSeleccionada(evento.target.value);
        if (evento.target.value === 'gradual') {
            setTipoHabito(1);
        } else if (evento.target.value === 'acciones') {
            setTipoHabito(2);
        } else if (evento.target.value === 'cumplimiento') {
            setTipoHabito(3);
            setFrecuencia(1);  // Cumplimiento tiene frecuencia fija, la podemos establecer aquí si es necesario.
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleIconSelect = (icon) => {
        console.log("ICONA", icon)
        setIconoHabito(icon); // Actualizar el ícono seleccionado
        setShowIconSelector(false); // Cerrar el modal de selección de íconos
    };

    useEffect(() => {
        buscarHabito(idHabito, token)
            .then(data => {
                setNombreHabito(data.nombre_habito);
                setDescripcion(data.descripcion);
                setFrecuencia(data.frecuencia);
                setTipoHabito(data.tipo_habito);
                setIconoHabito(data.icono_habito);
                if (data.tipo_habito === 1) {
                    setOpcionSeleccionada('gradual');
                } else if (data.tipo_habito === 2) {
                    setOpcionSeleccionada('acciones');
                } else if (data.tipo_habito === 3) {
                    setOpcionSeleccionada('cumplimiento');
                }
            })
            .catch(err => console.log(err));
    }, [idHabito]);

    function handleSubmit(event) {
        event.preventDefault();

        // Validaciones
        if (!nombreHabito) {
            setError('El nombre del hábito no puede estar vacío.');
            return;
        }

        if (frecuencia <= 0 || isNaN(frecuencia)) {
            setError('La frecuencia debe ser un número positivo.');
            return;
        }

        setError(''); // Limpiar errores antes de enviar el formulario
        // Aquí puedes realizar acciones adicionales con los datos del formulario
        editarHabito(nombreHabito, descripcion, tipo_habito, frecuencia, idHabito, token, iconoHabito)

            .then(() => {
                props.refresca();
                setShow(false);
                borrarCampos();
            })
            .catch(error => {
                console.error('Error al editar el hábito:', error);
                setError('Error al editar el hábito. Inténtalo de nuevo más tarde.');
            });
    }

    //borrar los campos una vez enviado el formulario
    function borrarCampos() {
        setNombreHabito('');
        setDescripcion('');
        setFrecuencia(1);
        setTipoHabito(1);
    }

    function volverHome() {
        navigate('/home');
    }

    return (
        <>
            <div style={{ display: 'flex'}}>
                <div onClick={handleShow}>
                    <button>
                    <FontAwesomeIcon icon={iconos.casa} size='2x' style={{ color: '#0E28C0' }} />
                        
                    </button>
                </div>
                <div onClick={volverHome}>
                    <button>
                    <FontAwesomeIcon icon={selectedIcon} size='2x' style={{ color: '#0E28C0' }} />
                    </button>
                </div>
            </div>
            <Modal className='modal-lg' show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Hábito</Modal.Title>
                    <Button style={{ marginLeft: "30px" }} variant="primary" onClick={() => setShowIconSelector(true)}>Seleccionar Ícono</Button>
                    {iconoHabito && (<div className="selected-icon">
                        <FontAwesomeIcon icon={iconos[iconoHabito]} size='2x' style={{ margin: "20px", color: 'Black' }} /> </div>)}
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {error && (
                            <div style={{ color: 'red', marginBottom: '10px', border: '1px solid red', borderRadius: '5px', padding: '10px', backgroundColor: '#ffe6e6' }}>
                                {error}
                            </div>
                        )}
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
                            <FormSelect onChange={manejarCambio} value={opcionSeleccionada}>
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
                        <Button variant="primary" type="submit">Aceptar Edición</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <ModalSeleccionIcono
                show={showIconSelector}
                handleClose={() => setShowIconSelector(false)}
                handleIconSelect={handleIconSelect}
                iconoHabito={iconoHabito}
            />
        </>
    );
}

export default FormEditar;
