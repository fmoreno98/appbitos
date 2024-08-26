import React, { useEffect, useState, useContext } from 'react';
import LoginContext from './LoginContext';
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
import { editarHabito, buscarHabito } from './tools/api';
import { iconos } from './fontawesome.js';
import { useNavigate } from 'react-router-dom';
import ModalSeleccionIcono from './ModalSeleccionIcono';
import { text } from '@fortawesome/fontawesome-svg-core';

function FormEditar(props) {
    const navigate = useNavigate();
    const { idHabito } = props;
    const [show, setShow] = useState(false);
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

    // Definir los estilos en línea como objetos de JavaScript
    const styles = {
        centerAbs: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
        },
        btn: {
            width: '75px',
            textAlign: 'center',
            height: '75px',
            borderRadius: '50%',
            backgroundColor: '#2F49D4',
            overflow: 'hidden',
            transform: 'translate3d(0)',
            transition: 'transform 350ms ease-out, background 350ms ease-out',
            position: 'relative',
        },
        btn2: {
            marginLeft: '500px',
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            backgroundColor: '#2F49D4',
            overflow: 'hidden',
            transform: 'translate3d(0)',
            transition: 'transform 350ms ease-out, background 350ms ease-out',
            position: 'relative',
        },
        btnLink: {
            display: 'block',
            height: '100%',
        },
        btnSq: {
            width: '50px',
            height: '32px',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            top: '10px',
            left: '0',
            right: '0',
            bottom: '0',
            margin: 'auto',
            transform: 'translate3d(0)',
            transition: 'width 350ms ease-out, top 350ms ease-out',
        },
        btnBefore: {
            position: 'absolute',
            content: '""',
            width: 0,
            height: 0,
            bottom: '100%',
            left: 0,
            borderStyle: 'solid',
            borderWidth: '0 25px 16px 25px',
            borderColor: 'transparent transparent #FFF transparent',
            transform: 'translate3d(0)',
            transition: 'left 350ms ease-out, border-width 350ms ease-out',
        },
        btnAfter: {
            position: 'absolute',
            content: '""',
            width: '10px',
            height: '20px',
            backgroundColor: '#2F49D4',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            opacity: 1,
            transition: 'opacity 350ms ease-out',
        },
    };

    // Estilo para el estado hover
    const handleMouseOver = (event) => {
        event.currentTarget.style.transform = 'rotate(-90deg)';
        event.currentTarget.style.backgroundColor = '#938A7F';

        const square = event.currentTarget.querySelector('.btn__sq');
        square.style.width = '18px';
        square.style.top = '16px';

        const before = square.querySelector('.btn__before');
        before.style.left = '-16px';
        before.style.borderWidth = '0 25px 20px 25px';

        const after = square.querySelector('.btn__after');
        after.style.opacity = 0;
    };

    const handleMouseOut = (event) => {
        event.currentTarget.style.transform = 'rotate(0deg)';
        event.currentTarget.style.backgroundColor = '#2F49D4';

        const square = event.currentTarget.querySelector('.btn__sq');
        square.style.width = '50px';
        square.style.top = '10px';

        const before = square.querySelector('.btn__before');
        before.style.left = '0';
        before.style.borderWidth = '0 25px 16px 25px';

        const after = square.querySelector('.btn__after');
        after.style.opacity = 1;
    };


    // Añadir estilos y keyframes para el wiggle en un objeto
    const keyframes = `
@keyframes wiggle {
  0% {transform: translate(0,0) rotate(45deg);}
  25% {transform: translate(0,0) rotate(25deg);}
  50% {transform: translate(0,0) rotate(45deg);}
  75% {transform: translate(0,0) rotate(65deg);}
  100% {transform: translate(0,0) rotate(45deg);}
}
`;

    // Inyectar los keyframes en el documento
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Estilos para el botón
    const editButtonStyles = {
        width: '75px',
        height: '75px',
        backgroundColor: '#2F49D4',
        border: 'none',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '25px',
        lineHeight: '40px',
        outline: 'none',
        padding: '0',
        paddingRight: '10px',
        position: 'relative',
        transition: 'background 0.4s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const editIconStyles = {
        height: '65px',
        width: '65px',
    };

    const editIconBeforeStyles = {
        border: '3px solid #fff',
        borderRadius: '3px',
        content: '""',
        display: 'inline-block',
        height: '50%',
        left: '50%',
        position: 'absolute',
        top: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
    };

    const editIconAfterStyles = {
        backgroundColor: '#2F49D4',
        border: '2px solid #fff',
        borderBottomLeftRadius: '5px 15px',
        borderBottomRightRadius: '5px 15px',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        boxShadow: '0 0 0 2px #2F49D4',
        content: '""',
        display: 'inline-block',
        height: '55%',
        position: 'absolute',
        top: '7%',
        left: '45%',
        width: '6px',
        transform: 'rotate(45deg)',
        transformOrigin: '50% 75%',
        transition: 'background 0.4s, box-shadow 0.4s',
    };

    // Evento hover para cambiar estilos
    const handleEditButtonMouseOver = (event) => {
        event.currentTarget.style.backgroundColor = '#938A7F';
        const iconAfter = event.currentTarget.querySelector('.edit-icon-after');
        if (iconAfter) {
            iconAfter.style.backgroundColor = '#938A7F';
            iconAfter.style.boxShadow = '0 0 0 2px #938A7F';
            iconAfter.style.animation = 'wiggle 0.25s 3 linear';
        }
    };

    const handleEditButtonMouseOut = (event) => {
        event.currentTarget.style.backgroundColor = '#2F49D4';
        const iconAfter = event.currentTarget.querySelector('.edit-icon-after');
        if (iconAfter) {
            iconAfter.style.backgroundColor = '#2F49D4';
            iconAfter.style.boxShadow = '0 0 0 2px #2F49D4';
            iconAfter.style.animation = 'none';
        }
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div
                    onClick={volverHome}
                    style={styles.btn}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <a style={styles.btnLink} href="#">
                        <div style={styles.btnSq} className="btn__sq">
                            <div style={styles.btnBefore} className="btn__before"></div>
                            <div style={styles.btnAfter} className="btn__after"></div>
                        </div>
                    </a>
                </div>

                <div style={{marginLeft:'30%'}} onClick={handleShow}>
                    <button
                        style={editButtonStyles}
                        onMouseOver={handleEditButtonMouseOver}
                        onMouseOut={handleEditButtonMouseOut}
                    >
                        <span style={editIconStyles}>
                            <span style={editIconBeforeStyles}></span>
                            <span className="edit-icon-after" style={editIconAfterStyles}></span>
                        </span>
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
                            <div style={{ color: 'red', marginBottom: '10px', border: '1px solid red', borderRadius: '5px', padding: '10px', backgroundColor: '#f8d7da' }}>
                                {error}
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Editar Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Leer 10 páginas"
                                value={nombreHabito}
                                onChange={(event) => setNombreHabito(event.target.value)}
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
