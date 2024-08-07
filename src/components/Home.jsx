import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import BotonesGrid from './BotonesGrid';
import Estadisticas from './Estadisticas';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Home = () => {


    return (
        <Container>
            <Row className='contenedor'>
                <Col>
                <BotonesGrid />
                </Col>
                <Col id=''>
                <div id='estadisticas'>
                    <Estadisticas />
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
