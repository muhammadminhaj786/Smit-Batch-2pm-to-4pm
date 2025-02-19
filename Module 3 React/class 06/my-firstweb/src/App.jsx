import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './component/MyNavbar';
import ResponsiveAppBar from './component/AppBar';
import { Body } from './component/Body';

function App() {
 

  return (
    <div>
      {/* <MyNavbar /> */}
      <ResponsiveAppBar />
      <Body />
    </div>
  )
}

export default App
