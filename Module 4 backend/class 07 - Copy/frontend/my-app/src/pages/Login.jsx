import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password)

        const response = await axios.post('http://localhost:8080/login',
            {
                email,
                password
             
          }
        )

        console.log(response)
        
    }

  return (
    

    <form onSubmit={handleSubmit}> 
   
    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
    <br />  <br />
 
    <input onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder='Enter your password'  />
    <br />   <br />
    <button type='submit'>Login</button>
    </form>

  )
}

export default Login