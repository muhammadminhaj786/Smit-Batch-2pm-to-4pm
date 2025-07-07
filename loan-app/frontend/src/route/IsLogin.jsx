import { Navigate, Outlet, useNavigate } from "react-router-dom"





export const IsLogin = ()=> {

    // const navigate = useNavigate()


    const isAuth = !!localStorage.getItem('token')
    console.log(isAuth)

    return (
        isAuth ? <Navigate to={'/'} /> : <Outlet />
    )

}