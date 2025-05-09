import { Navigate, Outlet } from "react-router-dom"


function AuthRoute(){
    const isAuthenticated = !!localStorage.getItem('token')
    console.log(isAuthenticated)

    return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}

export default AuthRoute