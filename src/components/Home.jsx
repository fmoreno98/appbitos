import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import BotonesGrid from './BotonesGrid';
import Estadisticas from './Estadisticas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    

    return (
        <Container>
            <BotonesGrid />
            <Estadisticas />
        </Container>
    );
};

export default Home;
