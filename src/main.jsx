import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HabitoEspecifico from './components/HabitoEspecifico.jsx'
import Habito from './components/Habito.jsx'
import FormEditar from './components/FormEditarHabito.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="habito/:idHabito" element={<Habito />} />
        <Route path="editarHabito/:idHabito" element={<FormEditar />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
