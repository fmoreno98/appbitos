import { useState } from 'react'
import Register from './components/register'
import Login from './components/login'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header.jsx'
function App() {

  return (
    <>

      <Header />
      <Login />
      <Register />
      <Footer />
     
    </>
  )
}

export default App
