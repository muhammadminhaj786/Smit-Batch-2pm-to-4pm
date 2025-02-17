import { useState } from "react"
import { Child1 } from "./Child1"


export  const Parent =  ()=> {

    // let count = 45

    let [count, setCount] = useState(10)

    let [dummy, setDummy] = useState('abc')

    let [name, setName] = useState('abc')

    const counting = ()=> {
        setCount(++count)
        console.log(name)
        setName('def')
        setDummy('new')
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <button onClick={counting}>add</button>
            <div>
            {count}
            {name}
            <Child1 c={'Parent value'} dummy={dummy} d={'dummy value'} />
          
            </div>
        </div>
    )
}