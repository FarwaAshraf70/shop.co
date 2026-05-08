import React from 'react'
import coupletwinning from '../assets/coupletwinning.png'
const Hero = () => {
  return (
    <>
<div>
    <div className=' flex justify-center items-center   gap-[10px] mt-[24px] bg-[#F2F0F1] '>
    <div className='max-w-[577px] pt-[103px] pb-[116px] flex flex-col  gap-[32px]'>
        <p className='font-bold text-[64px] leading-[64px] tracking-[0%] '>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
        <p className='font-normal text-[16px] leading-[22px] max-w-[545px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-[#000000] rounded-[62px] text-[#FFFFFF] py-4 px-[54px] max-w-[210px]'>Shop Now</button>
        <div className='grid grid-cols-3 '>
          <div className=''>
              <p className='font-bold text-[40px] leading-[100%] '>200+</p>
               <p className='text-bg-black/60 font-normal text-[16px] leading-[22px]'>International Brands </p>
            </div>
             <div className='font-bold text-[40px] leading-[100%] '>
           <p>2,000+</p>
                  <p className='text-bg-black/60 font-normal text-[16px] leading-[22px]'>High-Quality Products </p>
            </div>
           <div className='font-bold text-[40px] leading-[100%] '>
          <p>30,000+</p>
           <p className='text-bg-black/60 font-normal text-[16px] leading-[22px]'>Customers</p>
           </div>
          </div>
         </div>
           <div>
          <img src={coupletwinning} alt='' className='max-w-[473px] h-[663px]'/>
               </div>
        
        
    </div>

    
</div>
    </>
  )
}

export default Hero