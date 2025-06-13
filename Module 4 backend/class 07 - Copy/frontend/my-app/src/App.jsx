import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Signup />
    <Login />
  )
}

export default App
