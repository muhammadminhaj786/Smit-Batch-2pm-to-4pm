import React from 'react'
import useFetching from '../hooks/useFetching'

const Todos = () => {
     const {data, error} =  useFetching('https://jsonplaceholder.typicode.com/todos')
 
  console.log(data)
  console.log(error)
  return (
    <div>Todos</div>
  )
}

export default Todos