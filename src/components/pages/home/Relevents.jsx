import React from 'react'
import Container from '../../common/Container'
import relevantimg1 from '../../../assets/relevantimg1.png'
import Bottomline from '../../../assets/Bottomline.png'
import relevantimg2 from '../../../assets/relevantimg2.png'
import relevantimg3 from '../../../assets/relevantimg3.png'


const Relevents = () => {
  return (
    <section className='my-32'>
      <Container>
        <div className='text-center'>
          <h6 className='text-[#161722] font-normal font-roboto text-base uppercase'>sub-headline</h6>
          <h2 className='mt-4 text-[#161722] font-bold leading-[64px] font-roboto text-[48px] uppercase'>a church that's relevant</h2>
        </div>
        <div className="mt-16 flex gap-[24px]">
          <div className="p-[80px] bg-[#FFF5EB] relative">
            <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center">
              <img src={relevantimg1} alt="" />
            </div>
            <div className="mt-6">
              <h4 className='text-[#161722] font-bold font-roboto text-[32px] leading-[44px] uppercase'>About us</h4>
              <p className='mt-2 w-[251px] text-[#161722] font-normal font-roboto text-base leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="absolute left-0 bottom-0">
              <img src={Bottomline} alt="" />
            </div>
          </div>
          <div className="p-[80px] bg-[#FFF5EB] relative">
            <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center">
              <img src={relevantimg2} alt="" />
            </div>
            <div className="mt-6">
              <h4 className='text-[#161722] font-bold font-roboto text-[32px] leading-[44px] uppercase'>Get involved</h4>
              <p className='mt-2 w-[251px] text-[#161722] font-normal font-roboto text-base leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="absolute left-0 bottom-0">
              <img src={Bottomline} alt="" />
            </div>
          </div>
          <div className="p-[80px] bg-[#FFF5EB] relative">
            <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center">
              <img src={relevantimg3} alt="" />
            </div>
            <div className="mt-6">
              <h4 className='text-[#161722] font-bold font-roboto text-[32px] leading-[44px] uppercase'>Giving back</h4>
              <p className='mt-2 w-[251px] text-[#161722] font-normal font-roboto text-base leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="absolute left-0 bottom-0">
              <img src={Bottomline} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  )
}

export default Relevents