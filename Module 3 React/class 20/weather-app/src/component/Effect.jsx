
import React, { useEffect, useState } from 'react'

const Effect = () => {

  var [count,setCount] = useState(0)

  function increment(){
    setCount(++count)
    console.log(count)
  }

  function another(){
    console.log('run')
  }

  

  useEffect(()=> {
    another()
  }, [])

 

  console.log('re render')

  useEffect(()=> {
    function calculatePrize(){
      console.log('prise')
    }
    calculatePrize()

  }, [count])

  return (
    <div>Effect
      <button onClick={increment}>Add</button>
    </div>
  )
}

export default Effect