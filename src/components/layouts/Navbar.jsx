import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'
import { menuData } from '../../dummyData/menuData'
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="bg-navbg py-3">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-32 ">
            <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:h-30 after:bg-white/10 after:-bottom-7 after:-right-16">
              <Image src={logo} alt="Not found" />
            </Anchor>
            <ul className='hidden lg:flex items-center gap-12'>
              {menuData.map((item, index) => (
                <li key={index}>
                  <Anchor href={item.url} className='text-white text-base uppercase font-normal font-roboto'>
                    {item.label}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className='hidden lg:block bg-primary px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-roboto'>contact us</button>
            <FaBars className='lg:hidden text-white text-2xl cursor-pointer' />

          </div>
        </div>

      </Container>
      {/* <div className="bg-red-600 xs:bg-amber-500 h-20 w-full sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500 xl:bg-pink-500 2xl:bg-yellow-500"></div> */}
    </nav>
  )
}

export default Navbar