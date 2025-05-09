import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const role = localStorage.getItem('role')

    return role==='vendor' ? <Outlet /> : <Navigate to='/'  />
 
}

export default ProtectedRoutes