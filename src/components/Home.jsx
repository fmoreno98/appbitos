import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [buttons, setButtons] = useState([]);
  
    // Maneja la adición de un nuevo botón
    const handleAddButton = () => {
      setButtons([...buttons, {}]); // Agrega un nuevo elemento vacío para representar un nuevo botón
    };
  
    // Divide los botones en grupos de 2
    const buttonRows = [];
    for (let i = 0; i < buttons.length; i += 2) {
      buttonRows.push(buttons.slice(i, i + 2));
    }
  
    return (
      <Container>
        
        <div className="gridBotons">
        {buttonRows.map((row, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {row.map((button, buttonIndex) => (
              <Col key={buttonIndex}>
                <Button variant="primary" className="round-button">
                  <FontAwesomeIcon icon={faBell} />
                </Button>
              </Col>
              
            ))}
          </Row>
        ))}
        <Form className="mb-3 botoform">
          <Button variant="primary" onClick={handleAddButton} className="mt-2">
            Add Button
          </Button>
        </Form>
        </div>
      </Container>
    );
  };
  
  export default Home;
  