import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/counterSlice'

const CountChild = () => {

    let [count, setCount] = useState(0)
    const dispatch = useDispatch()

    // function add() {
    //     console.log("add")
    //     setCount(++count)
    // }

    function less() {
        console.log("less")
        setCount(--count)
    }

    return (
        <div>
        <div>
          hello
          {
            count
          }
        </div>
        <div>
          <button onClick={()=> dispatch(add())}>add</button>
          <button onClick={less}>less</button>
        </div>
      </div>
    )
}

export default CountChild