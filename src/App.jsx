import { useState, useContext, useEffect } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Header from './components/Header'
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
      setUser(JSON.parse(loginfront));
    }
  }, []);

  // Función para manejar el logout del usuario
  function handleLogout() {
    setUser(null); // Limpiar el estado del usuario
    localStorage.removeItem('loginfront'); // Eliminar el usuario del localStorage al hacer logout
  }

  return (
    <LoginContext.Provider value={{ user, setUser, token, setToken }}>
      <Header />
      <Login />
      {/* <Register /> */}
      <Footer />
    </LoginContext.Provider>

  )
}

export default App
