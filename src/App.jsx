
import { useState, useContext, useEffect } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import  './App.css'
import LoginContext from './components/LoginContext';

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
      setToken(loginfront);
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
      <Header />
      {/*//<BotonCrear progress={100}/>} */}
      <Login />
      {/* <Register /> */}
      <Home />
      <Footer />
    </LoginContext.Provider>
  )
}
export default App
