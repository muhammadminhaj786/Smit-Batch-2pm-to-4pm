import React, { useState } from 'react'
import useFetching from '../hooks/useFetching'
import useToggle from '../hooks/useToggle'



const Users = () => {


 const {data, error} = useFetching('https://jsonplaceholder.typicode.com/users')
 console.log(data, error)

 const [value, toggleStatus] = useToggle()

  return (
    <div>

    {
      data?.map((user, index)=> {
        return (
          <p key={index}>
            {user.name}
          </p>
        )
      })
    }

    {
      value ? 'users active' : 'user unactive'
    }

    {
      error && <p>{error.message}</p>
    }

    <br />

    <button className='h-[50px] w-[120px] border-none bg-slate-500 text-white rounded-xl shadow-xl' onClick={toggleStatus}>
      change status
    </button>

    </div>
  )
}

export default Users