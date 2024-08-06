import { useState, useEffect } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import  './App.css'
function App() {



  return (
    <>
      <Header />
       {/* <Login />
       <Register />     */}
       <Home />
      <Footer />
    </>
  )
}

export default App
