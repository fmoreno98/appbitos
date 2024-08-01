import { useState } from 'react'
import Register from './components/register'
import Login from './components/login'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
function App() {

  library.add(faBell);

  return (
    <>

    <Home />
      {/* <Header />
      <Login />
      <Register />
      <Footer /> */}
     
    </>
  )
}

export default App
