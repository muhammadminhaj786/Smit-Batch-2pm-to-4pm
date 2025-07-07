import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Signup = () => {


  const [formData, setFormData] = useState({



    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    profileImage: '',

  });
  const [imageFile, setImageFile] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleImageChange = (e) => {
    // console.log('run')
    console.log(e.target.files[0])
    setImageFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);


    let imageurl = ''

    const imageData = new FormData()
    imageData.append('image',imageFile )

    const res = await axios.post('http://localhost:8080/upload',imageData)
    console.log(res)

    imageurl = res.data.imageUrl

    const sendData = ({
      ...formData,
      profileImage: imageurl
    })


    const response = await axios.post('http://localhost:8080/api/register',sendData )
    console.log(response)
    if (response.status == 201) {
      navigate('/signin')
    }

  };

  const navigateToSignIn = () => {
    navigate('/signin')
  }


  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              id="first-name"
              name='firstName'
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              id="last-name"
              name='lastName'
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
            />
          </div>
        </div>

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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            onChange={handleChange}
            type="tel"
            id="phone"
            name='phoneNo'
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

        <div>
          <input
            onChange={handleImageChange}
            type="file"
            accept='image/*'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
          />
        </div>

        <div>
          <p>already have an account <span className='text-green-600 font-bold underline underline-offset-4' onClick={navigateToSignIn}>SignIn</span></p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup