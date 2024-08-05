import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './BotonesGrid.css'; 
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
                                <Button
                                    variant="primary"
                                    className="round-button"
                                >
                                    <FontAwesomeIcon icon={faBell} />
                                </Button>
                            </Col>
                        ))}
                    </Row>
                ))}
                <Form className="mb-3 botoform">
                    <Button 
                        variant="primary" 
                        onClick={handleAddButton} 
                        className="mt-2"
                        ref={addButtonRef}
                    >
                        Add Button
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default BotonesGrid;
