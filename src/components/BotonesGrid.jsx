import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './BotonesGrid.css'; 
import BotonCrear from './BotonCrear';
// import './BotonCrear.css';
import HabitoEspecifico from './HabitoEspecifico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const BotonesGrid = () => {
    const [buttons, setButtons] = useState([]);
    const addButtonRef = useRef(null);

    // Maneja la adición de un nuevo botón
    const handleAddButton = () => {
        setButtons([...buttons, `Button ${buttons.length + 1}`]); // Agrega un nuevo botón
    };

    // Divide los botones en grupos de 2
    const buttonRows = [];
    for (let i = 0; i < buttons.length; i += 2) {
        buttonRows.push(buttons.slice(i, i + 2));
    }

    // Asegúrate de que siempre haya un lugar para el botón de creación al final
    if (buttonRows.length === 0 || buttonRows[buttonRows.length - 1].length === 2) {
        buttonRows.push([]);
    }

    useEffect(() => {
        if (addButtonRef.current) {
            // Desplazar hacia el botón con un margen adicional
            const offset = 100; // Ajusta este valor según el margen que necesites
            const element = addButtonRef.current;
            const top = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: top - offset,
                behavior: 'smooth',
            });
        }
    }, [buttons]);

    return (
        <Container className="gridBotons">
            <div className="button-grid" id='button-grid'>
                {buttonRows.map((row, rowIndex) => (
                    <Row key={rowIndex} className="mb-4">
                        {row.map((button, buttonIndex) => (
                            <Col key={buttonIndex}>
                                {/* <Button
                                    variant="primary"
                                    className="round-button"
                                >
                                    <FontAwesomeIcon icon={faBell} />
                                </Button> */}
                                <HabitoEspecifico progress={100} nombreHabito="Habito 1" />

                            </Col>
                        ))}
                        {rowIndex === buttonRows.length - 1 && (
                            <Col className="d-flex justify-content-right align-items-bottom">
                                <Form className="mb-3 botoform">
                                    <BotonCrear progress={100} creado={handleAddButton} ref={addButtonRef} />
                                </Form>
                            </Col>
                        )}
                    </Row>
                ))} 
            </div>
        </Container>
    );
};

export default BotonesGrid;
