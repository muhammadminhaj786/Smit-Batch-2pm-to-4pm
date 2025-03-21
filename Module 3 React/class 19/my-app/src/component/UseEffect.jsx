import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    let [count, setCount] = useState(10)
    const [data, setData] = useState([])
    // let count = 0

    function increment() {
        setCount(++count)

        // count = count + 1
        console.log(count)
    }

    function dummy() {
        console.log('run')
    }

    // dummy()

    useEffect(() => {
        dummy()
    }, [])

    useEffect( ()=> {
        //  fetch("https://jsonplaceholder.typicode.com/todos")
        //  .then((data)=> data.json() )

       async function apiCalling (){
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response)
       }


       apiCalling()

    },[

    ])

    console.log('component re render')

    return (
        <div>
            <div className='text-[#BF0A30]'>UseEffect</div>
            <button onClick={increment}>Add</button>
            <p>{count}</p>
        </div>
    )
}

export default UseEffect