import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    estado: 0,
    repetircontrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes añadir la lógica para manejar el envío del formulario
    const opciones = {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    };
    console.log("opcions", opciones);

    fetch('http://localhost:3000/api/register', opciones)
      .then(response => response.json())
      .then(data => {
        // Aquí puedes gestionar la respuesta de la API si es necesario
        console.log(data);
        if (data.ok) {
          // Resetear el formulario si el registro fue exitoso
          setFormData({
            nombre: '',
            email: '',
            password: '',
            telefono: '',
            estado: 0,
            repetircontrasena: ''
          });
        } else {
          // Manejar errores si es necesario
          console.error('Error:', data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
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
            <label><b>Telefono</b></label>
            <input
              type="number"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              style={{ width: '90%', padding: '10px', border: '2px solid #0E28C0', borderRadius: '5px', marginTop: '10px' }}
              placeholder='012345678'
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label><b>contrasena</b></label>
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
            <label><b>Repita la contrasena</b></label>
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
        <p style={{ marginTop: '10px', textAlign: 'center' }}>¿Ya tienes cuenta? <a href="#" style={{ color: '#0000FF' }}>Inicia sesión</a></p>
      </div>
    </div>
  );
}

export default Register;
