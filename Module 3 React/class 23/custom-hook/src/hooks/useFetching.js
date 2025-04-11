import axios from "axios"
import { useEffect, useState } from "react"


function useFetching(url){
    console.log('run', url)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios.get(url)
        .then((res)=>setData(res.data))
        .catch((error)=>setError(error))

    }, [url])

    return {data, error}

}

export default useFetching
