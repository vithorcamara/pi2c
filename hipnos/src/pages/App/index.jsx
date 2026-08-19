import { useState, useEffect } from 'react'
import PWABadge from '../../components/PWABadge/index.jsx'
import './index.css'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>Carregando..</h1>
      <PWABadge />
    </>
  )
}

export default App
