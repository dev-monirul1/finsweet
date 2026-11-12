
import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'
import { menuData } from '../../dummyData/menuData'
import { FaBars } from "react-icons/fa6";
import { AnimatePresence, motion } from 'motion/react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);

  const handleSidebar = () => {
    setSidebarShow(true);
  }
  return (
    <>
    <nav className="bg-navbg py-3 md:py-5 lg:py-3 w-full overflow-x-hidden">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-32 ">
            <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:h-30 after:bg-white/10 after:-bottom-7 after:-right-16">
              <Image src={logo} alt="Not found" />
            </Anchor>
            <ul className='hidden lg:flex items-center gap-12'>
              {menuData.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.url} className='text-white text-base uppercase font-normal font-roboto'>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className='hidden lg:block bg-primary px-8 xl:px-12 py-3 xl:py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-roboto'>contact us</button>
            <FaBars onClick={handleSidebar} className='lg:hidden text-white text-2xl cursor-pointer' />

          </div>
        </div>

      </Container>
      <AnimatePresence>
        {sidebarShow && (
          <motion.div
            className="absolute top-0 right-0 h-screen w-[300px] bg-red-600 z-20 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setSidebarShow(false)}
                className="text-white uppercase font-roboto"
              >
                Close
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6">
              {menuData.map((item) => (
                <li key={item.url}>
                  <NavLink
                    to={item.url}
                    className="text-white text-base uppercase font-normal font-roboto"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className=' mt-5 ml-6 bg-primary px-8 xl:px-12 py-3 xl:py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-roboto'>contact us</button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
    
    </>
  )
}

export default Navbar