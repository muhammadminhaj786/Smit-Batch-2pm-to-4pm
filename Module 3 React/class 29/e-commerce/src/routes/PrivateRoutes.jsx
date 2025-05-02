import MyNavBar from "../component/MyNavBar"
import { Navigate, Outlet } from "react-router-dom"


function PrivateRoute (){

    const isAuthenticated = !!localStorage.getItem('token')

    return isAuthenticated ? <><MyNavBar /><Outlet /> </>: <Navigate to='/signin' />


}

export default PrivateRoute