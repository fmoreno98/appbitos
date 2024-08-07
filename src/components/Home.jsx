import { useState, useEffect, useContext } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BotonesGrid from './BotonesGrid';
import Estadisticas from './Estadisticas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import LoginContext from './LoginContext';

const Home = () => {
    const navigate = useNavigate();
    const { setToken } = useContext(LoginContext);

    useEffect(() => {
        // Comprobar si hay un usuario logueado en localStorage al cargar la aplicación
        const loginfront = localStorage.getItem('loginfront');
        if (loginfront) {
            setToken(loginfront);
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <Container>
                <BotonesGrid />
                <Estadisticas />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
