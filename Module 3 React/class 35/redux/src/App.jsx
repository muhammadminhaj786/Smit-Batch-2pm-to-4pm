import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './component/ChildComponent'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()


  return (
    <div>

      {count}

      <ChildComponent />

    </div>
  )
}

export default App
