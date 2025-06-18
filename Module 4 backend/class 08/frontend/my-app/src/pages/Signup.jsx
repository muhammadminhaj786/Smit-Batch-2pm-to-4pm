import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNo, setPhoneNo] = useState("")


    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(name,password,email,phoneNo)

        const response = await axios.post("http://localhost:8080/signup",{
            name,
            email,
            password,
            phoneNo
        })

        console.log(response)
    }

  return (
    

    <form onSubmit={handleSubmit}> 
    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your name'  />
    <br />  <br />
    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
    <br />  <br />
    <input onChange={(e)=>setPhoneNo(e.target.value)} type="text"  placeholder='Enter your phone number' />
      <br />  <br />
    <input onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder='Enter your password'  />
    <br />   <br />
    <button type='submit'>Signup</button>
    </form>

  )
}

export default Signup