import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './component/useEffect'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/effect' element={<UseEffect />} />
  </Routes>
  )
}

export default App
