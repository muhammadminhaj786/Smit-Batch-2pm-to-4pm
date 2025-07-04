import { Navigate, Outlet, useNavigate } from "react-router-dom"





export const AuthGaurd = ()=> {

    // const navigate = useNavigate()


    const isAuth = !!localStorage.getItem('token')
    console.log(isAuth)

    return (
        isAuth ?  <Outlet /> : <Navigate to={'/signin'} />
    )

}