import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData } from './hooks/MyHooks'
import CountChild from './component/CountChild'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './redux/counterSlice'

function App() {
  const count = useSelector((state)=>state.counter.val)
  console.log(count)
  const dispatch = useDispatch()
  
 
  return (

    <div>
     
      {count}
      <button onClick={()=>dispatch(add())}>add</button>
    </div>
  )
}

export default App
