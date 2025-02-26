import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './component/List'
import { Todo } from './component/Todo'

function App() {
 return (
  <div >
    {/* <List /> */}
    <Todo />
  </div>
 )
}

export default App
