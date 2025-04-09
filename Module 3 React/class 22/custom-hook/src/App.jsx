import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetching from './hooks/useFetching'
import Users from './components/Users'
import { Route, Routes } from 'react-router-dom'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)


  return (

    <Routes>
      <Route path='/users' element={<Users />}/>
      <Route path='/'  element={<Todos/>}/> 
    </Routes>
 
  )
}

export default App
