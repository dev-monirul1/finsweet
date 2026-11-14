import React from 'react'
import Container from '../../common/Container'
import bannerbg from '../../../assets/bannerbg.jpg'

const Banner = () => {
  return (
    <section className='py-32 bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${bannerbg})`}}>
        <Container>
            <div>
              <h6 className='text-white font-bold font-roboto text-base uppercase'>Welcome to our CHURCH</h6>
              <h1 className='mt-4 mb-8 text-white font-bold font-roboto text-[64px] w-[592px] uppercase'>Become a part of our community</h1>
              <button className='bg-primary px-8 xl:px-12 py-3 xl:py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-roboto'>contact us</button>
              <div className="mt-16 flex gap-[12px]">
                <div className="bg-primary w-[18px] h-[2px] mt-3"></div>
                <p className='w-[308px] text-white font-bold font-roboto text-base leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              </div>
            </div>
        </Container>
    </section> 
  )
}

export default Banner