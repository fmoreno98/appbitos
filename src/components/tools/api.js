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

const checkToken = (token) => {

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', authorization: token },
  };

  return fetch(API_URL + "/users/checktoken", requestOptions)
    .then(response => response.json())
    .catch(error => []);

}
const eliminarHabito = (id, token) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', authorization: token },
    body: JSON.stringify({ id })
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}
const estadisticas = (id, token) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', authorization: token },
  };
  return fetch(API_URL + "/estadisticas/countByDate/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}
const buscarHabito = (id, token) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', authorization: token },
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .then(r => r.data)
    .catch(error => console.log(error));
}

const editarHabito = (nombre_habito, descripcion, tipo_habito, frecuencia, id, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', authorization: token },
    body: JSON.stringify({ nombre_habito, descripcion, tipo_habito, frecuencia })
  };

  return fetch(API_URL + "/habitos/" + id, requestOptions)
    .then(response => response.json())
    .catch(error => []);
}
export {
  login,
  checkToken,
  editarHabito,
  buscarHabito,
  eliminarHabito,
  estadisticas
}