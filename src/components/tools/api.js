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
  
  const estadisticas = (token, id) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: token },
    };
  
    return fetch(API_URL + "/estadisticas/countByDate/"+id, requestOptions)
      .then(response => response.json())
      .catch(error => []);
  }
  
  
  export {
    login,
    checkToken,
    estadisticas
  };