import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './component/UseEffect'
import Home from './component/Home'
import { About } from './component/About'
import { Route, Routes } from 'react-router-dom'
import NotFound from './component/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route path='/' element={<UseEffect />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />

    <Route path='*' element={<NotFound />} />
   </Routes>
  )
}

export default App
