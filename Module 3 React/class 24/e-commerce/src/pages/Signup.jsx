import React from 'react'
import { logo } from '../images.js'


import { Input } from '@heroui/input'
import MyInput from '../component/MyInput.jsx'
import { Button } from '@heroui/button'
import { Link } from 'react-router-dom'


const Signup = () => {

  

  return (
    <div className='min-h-screen flex items-center'>
        <div className='w-[50%]'>
            <img src={logo} alt="" />
        </div>
        <div className='min-h-screen flex items-center justify-center  w-[50%]'>
            <form className=' h-[400px] w-[60%]  p-6'>
              <h1 className='text-3xl text-center font-semibold'>
              Create an <span className='text-red-500'>account</span> <span className='text-4xl font-bold'>.</span>
              </h1>
              <Input type='text' className='mt-4 border border-zinc-200 rounded-xl' height={50}  placeholder='Enter a First Name'  />
              <Input type='email' className='mt-4 border border-zinc-200 rounded-xl'  placeholder='Enter a Email'  />
              <MyInput type='password' className='mt-4 border border-zinc-200 rounded-xl'  placeholder='Enter a Password'  />
              <p className='flex justify-between gap-4 mt-1 p-2'>

                <span className='text-small hover:underline hover:text-red-500'>
                  <Link to='/signin'>
                  Already have an account ?
                  </Link>
                  </span>
                  <span className='text-small text-red-500 hover:underline hover:text-black'>
                    Forgot password
                  </span>
              </p>
              <Button className='bg-red-500 text-white w-[100%] mt-4'>
              Create Account
              </Button>
            </form>
        </div>
    </div>
  )
}

export default Signup