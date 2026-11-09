import React from 'react'
import Container from '../common/Container'
import Image from '../ui/Image'
import footerlogo from '../../assets/footerlogo.png'
import Anchor from '../ui/Anchor'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#161722] '>
      <Container>
        <div className="">
          <div className="">
            <Anchor>
              <Image src={footerlogo} alt="Not found" />
              <p>© Copyright Finsweet 2022</p>
            </Anchor>
            <ul>
              <li>
                <Anchor href="#">(480) 555-0103</Anchor>
              </li>
              <li>
                <Anchor href="#">4517 Washington Ave. </Anchor>
              </li>
              <li>
                <Anchor href="#">finsweet@example.com</Anchor>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </Container>
    </footer>
    </>
  )
}

export default Footer