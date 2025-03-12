import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-[80px] bg-slate-500'>
      <ul className='flex justify-center gap-10 h-[100%] items-center text-[18px] text-white'>
        <li><Link to="/home">
            Home
        </Link></li>
        <li>

          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default NavBar