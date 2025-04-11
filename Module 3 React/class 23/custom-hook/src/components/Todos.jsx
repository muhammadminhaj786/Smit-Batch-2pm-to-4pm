import React, { useState } from 'react'
import useFetching from '../hooks/useFetching'
import useToggle from '../hooks/useToggle'

const Todos = () => {
    //  const {data, error} =  useFetching('https://jsonplaceholder.typicode.com/todos')

    
 
  // console.log(data)
  // console.log(error)

  const [isVisibility, toggleStatus] = useToggle()

  return (
  <>
    <div>Todos</div>
    {
      isVisibility ? <div className='h-[500px] bg-green-500'>
        s
      </div> : <div className='h-[200px] bg-red-500'></div>
    }
    <button onClick={toggleStatus}>
      Change
    </button>
  </>
  )
}

export default Todos