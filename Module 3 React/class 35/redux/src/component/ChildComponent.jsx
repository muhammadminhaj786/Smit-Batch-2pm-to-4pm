import React, { useState } from 'react'
import { increment } from '../REDUX/counterSlice'
import { useDispatch } from 'react-redux'

const ChildComponent = () => {
  let [count, setCount] = useState(0)
  localStorage.setItem('count', count)
  // const dispatch = useDispatch()
  const dispatch = useDispatch()
  return (
    <div>ChildComponent
      {count}
      <button onClick={() => setCount(++count)}>add</button>
      <button onClick={() => dispatch(increment(count))}>increment</button>
    </div>

  )
}

export default ChildComponent