import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()
  

  function goToLogin(){
    console.log('login')
    navigate('/home')
  }

  return (
    <div className='h-[80px] bg-slate-500'>
      <ul className='flex justify-center gap-10 h-[100%] items-center text-[18px] text-white'>
        <li><Link to="/home">
          Home</Link></li>
        <li>

          <Link to="/about">
            About</Link>

        </li>
        <li>

          <Link to="/contact">
            Contact</Link>

        </li>
        <li>

        <button onClick={goToLogin} className='h-[45px] w-[140px] bg-blue-600 rounded-lg hover:bg-blue-800'>
          Login
        </button>

        </li>
      </ul>
    </div>
  )
}

export default NavBar