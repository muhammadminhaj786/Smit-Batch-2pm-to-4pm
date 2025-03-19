import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    let [count, setCount] = useState(0)



    // function increment (){
    //     setCount(++count)
    // }

    // function run(){
    //     console.log('run')
    // }
    // run()


    // useEffect(()=>{
    //     run()
    //     return ()=> {
    //         console.log('component unmount')
    //     }
    // },[])

    // console.log('component render')

    useEffect(() => {
        const apiCalling = async () => {
            // await axios.get("https://jsonplaceholder.typicode.com/todos")
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((api) => api.json())
        }

        apiCalling()

    }, [])


    return (
        <div>
            <div>useEffect</div>
            {/* <p>{count}</p> */}
            {/* <button onClick={increment}>Add</button> */}
        </div>
    )
}

export default UseEffect