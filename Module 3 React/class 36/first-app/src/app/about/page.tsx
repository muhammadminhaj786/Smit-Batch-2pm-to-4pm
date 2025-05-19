"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Home = () => {

   interface todo {
    item: string
  }

  let [count,setCount] = useState(0)
  const [todo , setTodo] = useState<todo[]>([])
  const [item,setItem] = useState("")

  function addTodo(){

    const task : todo = {
      item: item
    }
   

    setTodo([...todo,task])

  }



  return (
    <div>Home
      {count}
      <button onClick={()=>setCount(++count)} className='block h-[45px] w-[120px] bg-slate-700 text-white rounded-sm p-2'>Add</button>
      {/* <Image /> */}
      <input className='border-2 border-zinc-500 p-4' onChange={(e)=>setItem(e.target.value)} type="text" />
      <button onClick={addTodo}>Add todo</button>
      {
        todo.map((item,index)=>{
          return (
            <p>{item.item}</p>
          )
        })
      }
    </div>
  )
}

export default Home