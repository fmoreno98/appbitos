import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';


function Header() {
    return (
        <>
            <Navbar className='custom-navbar' expand="lg" fixed='top'>
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
                            <Nav.Link class="prova" href="#home">Home</Nav.Link>
                            <Nav.Link href="#link1">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#link2">Contacto</Nav.Link>
                        </Nav>
                        <NavDropdown className="usuario" title="Usuario" href="#link">
                            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;