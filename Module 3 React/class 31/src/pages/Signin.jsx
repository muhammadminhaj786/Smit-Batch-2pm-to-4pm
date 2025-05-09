import React, { useState } from 'react'
import { logo } from '../images.js'



import MyInput from '../component/MyInput.jsx'
import { Button } from '@heroui/button'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@heroui/input'
import { supabase } from '../config/supabase.js'
import { Bounce, toast } from 'react-toastify'
import MyToast from '../component/MyToast.jsx'


const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  

  const handleLogin = async(e)=> {
    e.preventDefault()
    console.log(email, password)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

 

    if(error){
      toast.error(error.message);
    }else{
      console.log(data)
      localStorage.setItem('token',data.session.access_token)
      toast.success("Login Successfully", );
      navigate('/')
    }
  }

  return (
    <div className='min-h-screen md:flex-row flex-col flex items-center'>
        <div className='w-[50%]'>
            <img src={logo} alt="" />
        </div>
        <div className=' flex items-center justify-center w-full md:w-[50%]'>
            <form onSubmit={handleLogin} className=' h-[400px] w-[60%]  p-6'>
              <h1 className='text-xl md:text-3xl text-center font-semibold'>
              SignIn <span className='text-red-500'>account</span> <span className='text-4xl font-bold'>.</span>
              </h1>
              {/* <Input type='text' className='mt-4 border border-zinc-200 rounded-xl' height={50}  placeholder='Enter a First Name'  /> */}
              <Input onChange={(e)=>setEmail(e.target.value)} type='email' className='mt-4 border border-zinc-200 rounded-xl'  placeholder='Enter a Email'  />
              <MyInput changeFunc={(e)=>setPassword(e.target.value)} type='password' className='mt-4 border border-zinc-200 rounded-xl'  placeholder='Enter a Password'  />
              <p className='flex justify-between gap-4 mt-1 p-2'>
               

                <span className='text-small hover:underline hover:text-red-500'>
                  <Link to='/signup'>
                 Don't have an account?
                  </Link>
                  </span>
                  <span className='text-small text-red-500 hover:underline hover:text-black'>
                    Forgot password
                  </span>
              </p>
              <Button type='submit' className='bg-red-500 text-white w-[100%] mt-4'>
              Login
              </Button>
              <MyToast />
            </form>
        </div>
    </div>
  )
}

export default Signin