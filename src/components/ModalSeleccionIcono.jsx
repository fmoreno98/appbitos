import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconos } from './fontawesome.js'; // Aquí deberías tener tus íconos importados
import { useState } from 'react';


function IconSelectorModal({ show, handleClose, handleIconSelect, iconoHabito }) {
    const iconList = Object.values(iconos); // Asegúrate de que 'iconos' es un objeto con tus iconos
    const iconKeys = Object.keys(iconos); // Asegúrate de que 'iconos' es un objeto con tus iconos


    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{marginRight:"20px"}}>Elige un Ícono</Modal.Title>
                    Actual:<div className="selected-icon">
                <FontAwesomeIcon icon={iconos[iconoHabito]} size='2x' style={{marginLeft:"10px", color: 'Black' }} /> </div>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-wrap justify-content-around">
                    {iconList.map((icon, index) => (
                        <div key={index} className="icon-option m-2" onClick={() => handleIconSelect(iconKeys[index])}>
                            <FontAwesomeIcon icon={icon} size="2x" />
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default IconSelectorModal;
