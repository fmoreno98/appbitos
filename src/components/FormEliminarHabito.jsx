import React, { useEffect } from 'react'
import LoginContext from './LoginContext';
import { useState, useContext } from 'react'
import { Form, Modal, Button, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'
import './FormEliminarHabito.css'

import { eliminarHabito, buscarHabito } from './tools/api';


function FormEliminar(props) {
    const idHabito = props.idHabito;
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     eliminarHabito(idHabito).then(data => {
    //         console.log(data);
    //     })
    // }

    // );



    function handleSubmit(event) {
        event.preventDefault();
        // Aquí puedes realizar acciones adicionales con los datos del formulario

        // Generar fecha y hora actuales

        setShow(false);
    }

    return (

        <>
        <Button className="color-red" onClick={handleShow}>Eliminar</Button>
            <Modal className='modal-lg' show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Habito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Seguro que quieres eliminar este habito?</Form.Label>
                        <Button variant="primary" type="submit">Aceptar Eliminación</Button>
                        <Button variant="primary" type="submit">Cancelar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>


    )
}

export default FormEliminar;