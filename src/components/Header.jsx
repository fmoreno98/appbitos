import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { iconos } from './fontawesome.js';


function Header() {
    return (
        <>
            <Navbar className='custom-navbar0' expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home"><img
                        src="/img/MiniLogo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Appbito Logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="prova" href="#home">Home</Nav.Link>
                            <Nav.Link href="#link1">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#link2">Contacto</Nav.Link>
                        </Nav>
                        <NavDropdown className="usuario" title={<FontAwesomeIcon icon={iconos.usuario} size='2x' style={{ color: "#E8E1D9",}} />} href="#link">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register"> Register </NavLink>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;