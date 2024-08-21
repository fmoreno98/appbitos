import { useState, useEffect, useContext } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BotonesGrid from './BotonesGrid';
import Estadisticas from './Estadisticas';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import LoginContext from './LoginContext';
import HabitoEstadistica from './HabitoEstadistica';
import Calendario from './calendario/Calendario';
import Racha from './Racha';
import FormEditarHabito from './FormEditarHabito';

const Home = () => {
    const navigate = useNavigate();
    const { token,setToken } = useContext(LoginContext);

    useEffect(() => {
        // Comprobar si hay un usuario logueado en localStorage al cargar la aplicación
        const loginfront = localStorage.getItem('loginfront');
        if (loginfront) {
            setToken(loginfront);
        } else {
            navigate('/login');
        }
    }, [token]);

    return (
        <>
            <Container>
                <Row className='contenedor'>
                    <Col>
                        <BotonesGrid />
                        <FormEditarHabito idHabito={151} />
                    </Col>
                    <Col id=''>
                        <div id='estadisticas'>
                            <Calendario />
                            <Racha />
                            <Estadisticas />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
