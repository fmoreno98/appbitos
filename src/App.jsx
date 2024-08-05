import { useState, useEffect } from 'react'
import Register from './components/register'
import Login from './components/login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import  './App.css'
function App() {

  useEffect(() => {
    const adjustFooterPosition = () => {
      const footer = document.getElementById('footer');
      // Obtener la altura del viewport en píxeles
      const gridBotons = document.getElementById('button-grid');
      const gridheight = gridBotons.offsetHeight;
      console.log(gridheight);
      console.log(screen.height);

      // Comparar si la altura del viewport es mayor que 100vh
      if (gridheight > 100) {
        footer.style.position = 'relative';
      } else {
        footer.style.position = 'fixed';
      }
    };

    // Ejecutar la función al cargar la página
    adjustFooterPosition();
    // Añadir el event listener para redimensionar la ventana
    window.addEventListener('resize', adjustFooterPosition);

    // Cleanup function para eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', adjustFooterPosition);
    };
  }, []);



  return (
    <>
    <div className='App'>
      <Header />
      <div className='content'>
       {/* <Login />
       <Register />     */}
       <Home />
       </div>
      <Footer />
      </div>
    </>
  )
}

export default App
