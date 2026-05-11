import React from 'react'
import casual from '../assets/casual.png'
import formal from '../assets/formal.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png'
const Dressing = () => {
  return (
    <>
    <div className=' mt-[80px] bg-[#F0F0F0] mx-auto '>
   <div className='max-w-[1240px] mx-auto '>
    <div className=' bg-[#F0F0F0]  mx-auto max-w-[1239px] pb-[76px] pt-[70px] px-[64px]'>
  
    <p className='text-center  font-bold text-[48px] leading-[100%] pt-[64px]'>BROWSE BY dress STYLE</p>

    <div className='w-full px-[64px] flex justify-center items-center gap-[20px] mt-[64px]   '>

    <img src={casual} alt='casual' className='w-full max-w-[407px]'/>
    <img src={formal} alt='formal' className=' w-full max-w-[684px]'/>
    </div>
     <div className='w-full px-[64px] flex justify-center items-center gap-[20px] pt-[20px] '>


    <img src={party} alt='party' className=' w-full max-w-[684px]'/>
    <img src={gym} alt='gym'  className=' w-full max-w-[407px]'/>
    </div>
    </div>
    </div>
</div>
    </>
  )
}

export default Dressing