const API_URL = 'http://localhost:3000/api';

const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(API_URL + "/login", requestOptions)
    .then(response => response.json())
    .catch(error => []);
}

// const checkToken = (token) => {

//   const requestOptions = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json', authorization: token },
//   };

//   return fetch(API_URL + "/users/checktoken", requestOptions)
//     .then(response => response.json())
//     .catch(error => []);

// }

// Función para verificar el token
const checkToken = (token) => {

  // Opciones para la solicitud, indicando que es un método GET y se establece el encabezado con el tipo de contenido como JSON y el token de autorización
  const requestOptions = {
    method: 'GET', // Método de la solicitud HTTP
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido que se envía en la solicitud
      authorization: token // Token de autorización para autenticar la solicitud
    },
  };

  // Realiza una solicitud a la API para verificar el token
  return fetch(API_URL + "/users/checktoken", requestOptions)
    .then(response => response.json()) // Convierte la respuesta de la API en formato JSON
    .catch(error => []); // Si hay un error en la solicitud, se captura y retorna un array vacío

}
const eliminarHabito = (id) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}
const estadisticas = (token, id) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', authorization: token },
  };
  return fetch(API_URL + "/estadisticas/countByDate/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}
const buscarHabito = (id) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .then(r => r.data)
    .catch(error => console.log(error));
}

const editarHabito = (nombre_habito, descripcion, tipo_habito, frecuencia, id) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre_habito, descripcion, tipo_habito, frecuencia })
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}


//prueba
const obtenerProgreso = (idHabito, token) =>{
  //obtener dia de hoy
  const fecha = new Date().toISOString().slice(0, 10);
  console.log("obtener progreso fecha: ",fecha, idHabito)

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', authorization: token },
  };
  return fetch(API_URL + "/seguimientoHabitos/" + fecha + "/" + idHabito, requestOptions)
  .then(response => response.json())
  .catch(error => []);
}

const obtenerFrecuencia = (idHabito, token) =>{
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' , authorization: token},
  };
  return fetch(API_URL + "/habitos/" + idHabito, requestOptions)
  .then(response => response.json())
  // .then(r => r.data)
  .catch(error => console.log(error));
}


// const obtenerProgreso = (idHabito) =>{
//   //obtener dia de hoy
//   const fecha = new Date().toISOString().slice(0, 10);
//   console.log("fecha: ",fecha)
//   const res = await fetch('http://localhost:3000/api/seguimientoHabitos/'+fecha+'/'+idHabito,{
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//       }
//   });
//   let data = await res.json()
//   seguimiento = data.data
//   console.log("entra en obtener progreso de habitos")
//   setProgreso(seguimiento?.progreso || 0)
// }

export {
  login,
  checkToken,
  editarHabito,
  buscarHabito,
  eliminarHabito,
  estadisticas,
  obtenerProgreso,
  obtenerFrecuencia
}