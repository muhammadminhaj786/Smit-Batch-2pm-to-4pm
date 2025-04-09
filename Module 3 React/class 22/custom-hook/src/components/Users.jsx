import React from 'react'
import useFetching from '../hooks/useFetching'

const Users = () => {

   const {data, error} = useFetching('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=6264c2af55653a7b45fcff5bd1cabf4e')
console.log(data)
  return (
    <div>Users</div>
  )
}

export default Users