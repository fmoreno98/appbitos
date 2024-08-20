import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './tools/api';
import { jwtDecode } from "jwt-decode";
import LoginContext from './LoginContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {iconos} from './fontawesome.js';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    contrasena: '',
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(true);
  const { setUser, setToken, token } = useContext(LoginContext);

  useEffect(() => {
    const tk = localStorage.getItem('loginfront');
    if (tk) {
      try {
        const decoded = jwtDecode(tk);
        if (decoded.expiredAt > new Date().getTime()) { // Cambiado a segundos
          setToken(tk);
          setShow(false);
        } else {
          localStorage.removeItem('loginfront');
        }
      } catch (e) {
        console.error('Token decoding failed', e);
      }
    }
  }, [setToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.email || !formData.contrasena) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }

    login(formData.email, formData.contrasena)
      .then(data => {
        if (data.ok === true) {
          setToken(data.token);
          setShow(false);
          setError('');
          navigate('/');
        } else {
          setError(data.msg);
        }
      })
      .catch(error => {
        console.log('Error en el inicio de sesión:', error);
        setError('Error en el inicio de sesión. Inténtalo de nuevo más tarde.');
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/img/FondoLogin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
      }}
    >
      {show ? (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'rgba(232, 225, 217, 0.85)', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/img/MiniLogo.png" alt="" width={'40%'} />
            </div>
          </div>
          <h1 style={{ textAlign: 'center' }}>Inicio de sesión</h1>
          <p>Inicio de sesión con tu cuenta de Appbitos.</p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label><b>Email</b></label>
              <FontAwesomeIcon icon={iconos.mail} size='1x' style={{ color: '#black', marginLeft: '5px' }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
                placeholder='hey@tuemail.com'
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label><b>Contraseña</b></label>
              <FontAwesomeIcon icon={iconos.candado} size='1x' style={{ color: '#black', marginLeft: '5px' }} />
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
                placeholder='********'
              />
            </div>
            {error && (
              <div style={{ color: 'red', marginBottom: '10px', border: '1px solid red', borderRadius: '5px', padding: '10px', backgroundColor: '#ffe6e6' }}>
                {error}
              </div>
            )}
            <button type="submit" style={{ width: '96%', padding: '10px', backgroundColor: '#516BE7', color: 'white', border: 'none', borderRadius: '5px' }}>
              Iniciar sesión
            </button>
          </form>
          <p style={{ marginTop: '10px', textAlign: 'center' }}>¿No tienes cuenta? <a href="/register" style={{ color: '#0000FF' }}>Regístrate</a></p>
        </div>
      ) : (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'rgba(232, 225, 217, 0.85)', borderRadius: '10px', textAlign: 'center' }}>
          <h1 style={{ textAlign: 'center', color: 'green' }}>¡Inicio de sesión exitoso!</h1>
          <p>Has iniciado sesión correctamente con tu cuenta de Appbitos.</p>
        </div>
      )}
    </div>
  );
}

export default Login;
