import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import AuthRoute from './routes/AuthRoutes'
import PrivateRoute from './routes/PrivateRoutes'
import About from './pages/About'
import Vendor from './pages/Vendor'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import ProtectedRoutes from './routes/ProtectedRoutes'
import ViewCars from './pages/ViewCars'




function App() {


  return (



    <Routes>




      <Route element={<AuthRoute />}>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Route>


      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/cars/:id' element={<ViewCars />}/>
        <Route path='/about' element={<About />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/vendor' element={<Vendor />} />
        </Route>

      </Route>


    </Routes>



  )
}

export default App
