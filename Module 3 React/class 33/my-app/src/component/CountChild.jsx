import React, { useState } from 'react'

const CountChild = () => {

    let [count, setCount] = useState(0)

    function add() {
        console.log("add")
        setCount(++count)
    }

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
          <button onClick={add}>add</button>
          <button onClick={less}>less</button>
        </div>
      </div>
    )
}

export default CountChild