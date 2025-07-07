import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Signin = () => {


  const [formData, setFormData] = useState({


    email: '',
    password: '',


  });

  const [error,setError] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const response = await axios.post('http://localhost:8080/api/login', formData)
    .then((res)=>{
      console.log(res.data.userExist)
      console.log(res.data.token)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.userExist));

      navigate('/')
    })
    .catch((error)=> {
      console.log(error?.response)
      alert(error?.response?.data?.message)
      setError(error?.response?.data?.message)
    })
    
  };

  const navigateToSignUp = ()=> {
    navigate('/signup')
  }


  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Signin</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
       

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
             name='email'
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name='password'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
          />
        </div>

       <div className='flex justify-between w-[90%] mx-auto'>
        <p  >do'nt have an account <span className='text-green-600 font-bold underline underline-offset-4' onClick={navigateToSignUp}>SignIn</span></p>
        {
          error && <p className='text-red-600 font-bold'>{error}</p>
        }
       </div>

    


        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin