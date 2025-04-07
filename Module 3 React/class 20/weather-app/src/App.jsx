import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effect from './component/Effect'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './component/PageNotFound'
import Weather from './component/Weather'

function App() {
 

  return (
    <Routes>
      <Route path='/effect' element={<Effect />} />
      <Route path='/' element={<Weather />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
