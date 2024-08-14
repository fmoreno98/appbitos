import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { jwtDecode } from "jwt-decode";
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
    console.log("loginfront", loginfront);
    if (loginfront) {
      setToken(loginfront);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('loginfront', token);
      const decoded = jwtDecode(token);
      setUser(decoded.id);
      const hoy=new Date();
      if (decoded.expiredAt < hoy.getTime()) {
        localStorage.removeItem('loginfront'); // Eliminar el usuario del localStorage al hacer logout
        setToken(null); // Limpiar el estado del token
        setUser(null); // Limpiar el estado del usuario
      }
      navigate('/home');
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
            <Nav className="ms-auto"> {/* Mueve benja a la derecha */}
              <NavDropdown
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
                      className={({ isActive }) => isActive ? 'nav-link active benja' : 'nav-link benja'}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className={({ isActive }) => isActive ? 'nav-link active benja' : 'nav-link benja'}
                    >
                      Register
                    </NavLink>
                  </>
                ) : (
                  // Mostrar enlace de Logout si hay un usuario logueado
                  <NavLink
                    to="/"
                    className="nav-link benja"
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
