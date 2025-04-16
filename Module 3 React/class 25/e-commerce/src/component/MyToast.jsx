import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

const MyToast = () => {
  return (
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />
  )
}

export default MyToast