import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './component/Button'
import { Header } from './component/Header'
import { Body } from './component/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Header />
      <Body />
   </div>
  )
}

export default App
