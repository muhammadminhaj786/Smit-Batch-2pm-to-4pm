
import React, { useEffect, useState } from 'react'

const Effect = () => {

  let [count, setCount] = useState(0)

 console.log('component create')




 function dummy(){
  console.log('run')
 }

 

 useEffect(()=> {
  dummy()
 }, [count])
 

  return (
    <div>Effect
      <button onClick={()=>setCount(count++)} className='border-2 border-green-500 w-[120px]' >Add</button>
    </div>
  )
}

export default Effect