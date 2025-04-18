import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import PrivateRoutes from './routes/privateRoutes'

function App() {
  

  return (

    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/' element={<PrivateRoutes>
        <Home />
   
        
      </PrivateRoutes>}/>

      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>

  )
}

export default App
