import React from 'react'
import Container from '../common/Container'
import Image from '../ui/Image'
import footerlogo from '../../assets/footerlogo.png'
import Anchor from '../ui/Anchor'
import { companyInfo, Quicklinks } from '../../dummyData/menuData'
import { li } from 'motion/react-client'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom'




const linkStyle = `text-white font-roboto text-xs uppercase`

const Footer = () => {
  return (
    <>
      <footer className='bg-footerbg py-16'>
        <Container>
          <div className="flex justify-between ">
            <div className="">
              <Anchor href="/">
                <Image src={footerlogo} alt="Not found" />
              </Anchor>
              <div className="mt-4">
                <span className={linkStyle}>© Copyright Finsweet 2022</span>
              </div>

              <ul className='grid grid-col-1 mt-8 gap-4'>
                {companyInfo.map((item) => (
                  <li key={item.id} className={linkStyle}>
                    <Anchor href="#">{item.value}</Anchor>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-[115px]">
              <div className="flex gap-18">
                <div>
                  <h6 className='text-white font-normal font-roboto leading-[24px] text-base'>Quicklinks</h6>
                  <ul className='mt-5 grid grid-col-1  gap-6 opacity-[0.8px]'>
                    {Quicklinks.map((item,index)=>(
                      <li key={index} className={linkStyle}>
                        <Anchor href='#'>{item.label}</Anchor>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className='text-white font-normal font-roboto leading-[24px] text-base'>Connect</h6>
                  <div className="text-primary flex gap-5 mt-5 text-[20px]">
                    <NavLink>
                      <FaFacebook />
                    </NavLink>
                    <NavLink>
                      <FaTwitter />
                    </NavLink>
                    <NavLink>
                      <FaLinkedin />
                    </NavLink> 
                  </div>
                </div>
              </div>
              <div>
                <h2 className='max-w-[377px] font-roboto text-white font-bold text-[32px] leading-11 uppercase'>Subscribe to get Latest Updates and News</h2>
                <div className="border border-white/15 h-16 mt-8 rounded-xl relative">
                  <input type="email" placeholder='Enter your email' className='h-full font-roboto rounded-xl w-[60%] font-normal text-white text-base placeholder:text-white pl-5 outline-0' />
                  <button className='bg-primary text-[#1C1D28] font-roboto text-base font-normal uppercase px-16  py-3 rounded-xl hover:bg-opacity-80 transition duration-300 absolute right-0 top-0 h-full cursor-pointer'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer