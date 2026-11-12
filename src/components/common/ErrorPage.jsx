import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-center text-[120px] font-bold ">404 Error</h1>
            <NavLink to="/" className="bg-primary text-black px-10 py-5 mx-auto ">Go back to Home</NavLink>
        </div>
    </div>
  )
}

export default ErrorPage