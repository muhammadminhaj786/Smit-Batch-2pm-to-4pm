import axios from "axios"
import { useEffect, useState } from "react"



function useFetching(api){
    console.log('fetch', api)

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        axios.get(api)
        .then((res)=>setData(res.data))
        .catch((err)=>setError(err))
    },[api])

    return {data, error}

}

export default useFetching