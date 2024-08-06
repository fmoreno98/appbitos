import { useState } from 'react'
import Register from './components/register'
import Login from './components/login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './assets/Home'
import LandingPage from './components/LandingPage'
import "./App.css"
function App() {

  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
       {/* <Home /> */}
      <LandingPage />
      <Footer />

    </>
  )
}

export default App;
