import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {

    return (
        <>
            <footer>
                <Container>
                    <Row style={{ "margin": "10p" }}>
                        <Col style={{ "display": "flex", "justifyContent": "left" }}>
                            {/* <a href="#top"> */}
                                <img style={{ width: 30, height: 30, margin: 10 }} src="/img/MiniLogo.png" />
                            {/* </a> */}
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