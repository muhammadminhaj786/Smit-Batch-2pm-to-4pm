import { Navigate, } from "react-router-dom"


export default function PrivateRoutes({children}){

    


    const isAuthenticated = !!localStorage.getItem('token')
    console.log(isAuthenticated)

    return isAuthenticated ? children : <Navigate to='/signin'/>

}