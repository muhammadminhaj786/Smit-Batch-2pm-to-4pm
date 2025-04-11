import { useState } from "react"



function useToggle(){
    console.log('tOggle')
    const [value, setValue] = useState(false)

    const toggle = ()=> {
        setValue(value => !value)
    }

    return [value , toggle]

}

export default useToggle