import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/banner'
import Relevents from '../../components/pages/home/Relevents'
import Footer from '../../components/layouts/Footer'

const HomeIndex = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Relevents/>
    <Footer/>
    </>
    
  )
}

export default HomeIndex