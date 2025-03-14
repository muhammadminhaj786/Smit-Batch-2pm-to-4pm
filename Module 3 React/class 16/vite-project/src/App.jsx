import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import Api from './components/Api'


function App() {
  const [count, setCount] = useState(0)


  return (
    <Routes>
      <Route path='/' element={<NavBar />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api' element={<Api />} />
    </Routes>
  )

}

export default App
