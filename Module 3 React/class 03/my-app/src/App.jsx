import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/card/Card'


function App() {
  return (
   <div>
    <Navbar />
    <div className='container'>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
   </div>
  )
}

export default App
