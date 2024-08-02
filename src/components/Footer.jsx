import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

function Footer(){

    return(
        <>
            
            <footer>
                <Container>
                    <Row style={{"margin" : "10p"}}>
                        <Col style={{"display": "flex", "justifyContent": "left"}}>
                            <img style={{width: 40, height:40}} src="/img/MiniLogo.png" />
                        </Col>
                        <Col xs={6}>
                            <p className='text-white'>&copy; 2024 Nombre de la app. Todos los derechos reservados.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;