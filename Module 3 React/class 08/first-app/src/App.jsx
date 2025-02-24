import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header  from './component/Header'
import { Button } from './component/Button'

function App() {

  function button(para){
    console.log(para)
  }

  const variable = 'buy'

return (
  <div>
    <Header />
    <Button heading={'buy now'} />
    {button(variable)}
  </div>  
)
}

export default App
