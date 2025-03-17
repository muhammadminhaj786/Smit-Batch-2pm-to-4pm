import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {

  const [data, setData] = useState([])

   



    useEffect(()=>{
      const apiCAlling=  async ()=>{
        const response =  await axios.get("https://jsonplaceholder.typicode.com/users")
          // console.log(response.data)
          // return response.data
          setData(response.data)
        
        
    }
   
    apiCAlling()
    console.log(data)
    } ,[])
  //  apiCAlling
  //   console.log(data)

    

  return (
    <div>Api
       <button  className='h-[45px] w-[120px] rounded-md bg-slate-600'>Fetch</button>
    </div>
  )
}

export default Api