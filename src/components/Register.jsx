import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    estado: 0,
    repetircontrasena: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) return 'La contraseña debe tener al menos 8 caracteres.';
    if (!hasUpperCase) return 'La contraseña debe contener al menos una letra mayúscula.';
    if (!hasLowerCase) return 'La contraseña debe contener al menos una letra minúscula.';
    if (!hasNumber) return 'La contraseña debe contener al menos un número.';
    if (!hasSpecialChar) return 'La contraseña debe contener al menos un carácter especial.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.nombre || !formData.email || !formData.password || !formData.repetircontrasena || !formData.telefono) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (formData.password !== formData.repetircontrasena) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.telefono.length < 10) {
      setError('El número de teléfono debe tener al menos 10 dígitos.');
      return;
    }

    const opciones = {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/api/register', opciones)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setFormData({
            nombre: '',
            email: '',
            password: '',
            telefono: '',
            estado: 0,
            repetircontrasena: ''
          });
          navigate('/login');
          setError('');
        } else {
          setError(data.error || 'Error en el registro. Inténtalo de nuevo más tarde.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error en el registro. Inténtalo de nuevo más tarde.');
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/img/FondoLogin.png)', // Cambia esto al path de tu imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
      }}
    >
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'rgb(232, 225, 217, 0.85)', borderRadius: '10px' }}>
        <h1>Registro</h1>
        <p>Date de alta llenando los siguientes datos.</p>
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ color: 'red', marginBottom: '10px', border: '1px solid red', borderRadius: '5px', padding: '10px', backgroundColor: '#ffe6e6' }}>
              {error}
            </div>
          )}
          <div style={{ marginBottom: '10px' }}>
            <label><b>Nombre</b></label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
              placeholder='Benjamin Armijo'
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Email</b></label>
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
            <label><b>Teléfono</b></label>
            <input
              type="text" // Cambiado a text para permitir formato de número con caracteres
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
              placeholder='+34 666 66 66 66'
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Contraseña</b></label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
              placeholder='********'
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Repita la Contraseña</b></label>
            <input
              type="password"
              name="repetircontrasena"
              value={formData.repetircontrasena}
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
              placeholder='********'
            />
          </div>
          <button type="submit" style={{ width: '96%', padding: '10px', backgroundColor: '#516BE7', color: 'white', border: 'none', borderRadius: '5px' }}>
            Registrarse
          </button>
        </form>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>¿Ya tienes cuenta? <a href="/login" style={{ color: '#0000FF' }}>Inicia sesión</a></p>
      </div>
    </div>
  );
}

export default Register;
