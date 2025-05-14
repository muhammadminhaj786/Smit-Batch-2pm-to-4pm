import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/todoSlice'
import { setMyName } from './redux/nameSlice'

function App() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")
  // const [todo, setTodo] = useState([])
  // const [name,setName] = useState("asd")
  const name = useSelector((state)=>state.names.name)
  console.log(name)
  const val = 'kashan'
  const todo = useSelector((state)=>state.todo)
  console.log(todo)
  


  // console.log(task)
  // function addTask() {

  //   console.log("Task", task)
  // }
  // function addTodo() {
  //   console.log("e")
  //   setTodo([...todo, task])
  //   console.log(todo);

  // }
  // function setmyName(){
  //   setName('minhaj')
  // }
  return (
    <div className='mx-auto w-[80%] border h-[300px] text-center'>
      <p className='text-blue-500'>Todo App</p>
      <div>
        <input onChange={(e) => setTask(e.target.value)} type="text" placeholder='Enter todo..' className='border rounded-md px-4 py-2' />
        {/* <button className='bg-blue-500 px-4 py-2 rounded-md ml-2 text-white' onClick={() => dispatch(addTodo(task))}>Add Todo</button> */}
        <button className='bg-blue-500 px-4 py-2 rounded-md ml-2 text-white' onClick={()=>dispatch(addTodo(task))}>Add Todo</button>
        <button onClick={()=>dispatch(setMyName(val))} className='bg-blue-500 px-4 py-2 rounded-md ml-2 text-white'>set my name</button>
      </div>
      <div>
        {todo.map((value, index) => {
          return (<div key={index}>
            {value}
          </div>)
        })}
        {
          name
        }
      </div>
    </div>
  )
}

export default App
