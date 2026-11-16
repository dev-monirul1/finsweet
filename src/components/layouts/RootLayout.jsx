import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RootLayout = () => {
  return (
    <>
      <ToastContainer />

      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout