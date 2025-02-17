import { useState } from "react"
import { Child2 } from "./Child2"


export function Child1 (props){

    const value = 15

    // let [value, setValue] = useState(10)

    // function one (name){
    //     console.log(name)
    // }

    console.log(value)

    // one('abc')

    return (
        <div>
            <h1>
                Child component
            </h1>
            {props.c}
            {props.dummy}
            {props.d}
            <Child2 value={value} />
        </div>
    )
}