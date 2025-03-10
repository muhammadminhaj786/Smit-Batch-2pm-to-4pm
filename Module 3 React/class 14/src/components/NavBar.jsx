import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-blue-400 h-[80px] '>
        <ul className='flex items-center justify-center gap-8  h-[100%]'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </div>
  )
}

export default NavBar