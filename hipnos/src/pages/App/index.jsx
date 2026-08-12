import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from '../../components/PWABadge/index.jsx'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <PWABadge />
    </>
  )
}

export default App
