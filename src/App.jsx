
import { useState, useContext, useEffect } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import LoginContext from './components/LoginContext';
import BotonCrear from './components/BotonCrear';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, NavLink } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  if (token) {
    console.log(token);
  }

  useEffect(() => {
    // Comprobar si hay un usuario logueado en localStorage al cargar la aplicación
    const loginfront = localStorage.getItem('loginfront');
    if (loginfront) {
      setUser(loginfront);
      setToken(loginfront);
      console.log(user);
    }
  }, []);

  // Función para manejar el logout del usuario
  function handleLogout() {
    setUser(null); // Limpiar el estado del usuario
    setToken(null); // Limpiar el estado del token
    localStorage.removeItem('loginfront'); // Eliminar el usuario del localStorage al hacer logout
  }
  return (
    <LoginContext.Provider value={{ user, setUser, token, setToken }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </LoginContext.Provider>
  )
}
export default App
