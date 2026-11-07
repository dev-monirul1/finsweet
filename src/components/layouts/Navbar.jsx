import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'


const Navbar = () => {
  return (
    <nav className="bg-[#0D0D0D]">
      <Container>
        <div className="">
          <Anchor href="/">
            <Image src={logo} alt="Not found" />
          </Anchor>
          
        </div>
        <div className="">
          <button className='bg-[#FFD2A4] px-12 py-5 uppercase font-normal text-base'>contact us</button>
        </div>
        
      </Container>
    </nav>
  )
}

export default Navbar