import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {jwtDecode} from "jwt-decode";
import './App.css'
import LoginContext from './components/LoginContext';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, NavLink } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Nuevo estado para controlar el dropdow

  useEffect(() => {
    // Comprobar si hay un usuario logueado en localStorage al cargar la aplicación
    const loginfront = localStorage.getItem('loginfront');
    if (loginfront) {
      setUser(loginfront);
      setToken(loginfront);
      console.log(user);
    }
  }, []);

  useEffect(() => {
    console.log("el token ha canviat!")
    const decoded = jwtDecode(tk);
    if (token) {
      localStorage.setItem('loginfront', token);
      console.log('atun');
      const decoded = jwtDecode(token);
      
      setUser(decoded.id);
    } 
  }, [token]);

  // Función para manejar el logout del usuario
  function handleLogout() {
    setUser(null); // Limpiar el estado del usuario
    setToken(null); // Limpiar el estado del token
    localStorage.removeItem('loginfront'); // Eliminar el usuario del localStorage al hacer logout
    setDropdownOpen(false); // Cerrar el dropdown al hacer logout
    navigate('/'); // Redirigir al usuario a la página de inicio de sesión
  }

  return (
    <LoginContext.Provider value={{ user, setUser, token, setToken }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Otros elementos del Nav */}
            </Nav>
            <Nav className="ms-auto"> {/* Mueve benja a la derecha */}
              <NavDropdown
                id="benja"
                title="Usuario"
                show={dropdownOpen}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)} // Cerrar el dropdown al salir
              >
                {token === null ? (
                  // Mostrar enlaces de Login y Register si no hay usuario logueado
                  <>
                    <NavLink
                      to="/login"
                      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                      Register
                    </NavLink>
                  </>
                ) : (
                  // Mostrar enlace de Logout si hay un usuario logueado
                  <NavLink
                    to="/"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </LoginContext.Provider>
  )
}

export default App;
