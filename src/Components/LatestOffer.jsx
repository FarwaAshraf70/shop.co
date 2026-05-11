import React from 'react'
import message from '../assets/message.svg'

const LatestOffer = () => {
  return (
    <div className='bg-[#000000] mx-auto py-[40px] px-[64px]  w-full mx-auto mt-[80px] '>
<div className='max-w-[1240px] mx-auto '>
      <div className='flex justify-between items-center'>

        <div className=''>
          <p className=' max-w-[551px] font-bold text-[40px] leading-[45px] text-[#FFFFFF]'>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>

        <div className='flex flex-col gap-[12px]'>

          {/* Input */}
          <div className='flex items-center gap-[12px] bg-[#FFFFFF] py-[12px] px-[16px] max-w-[349px] rounded-[62px]'>

            <img src={message} alt='' className='max-w-[24px]' />

            <input
              type='email'
              placeholder='Enter Your Email'
              className='outline-none placeholder:text-black/40'
            />

          </div>

          {/* Button */}
          <button
            type='button'
            className='text-[#000000] bg-[#FFFFFF] max-w-[349px] py-[12px] rounded-[62px] font-medium'
          >
            Subscribe to Newsletter
          </button>

        </div>

      </div>
</div>
    </div>
  )
}

export default LatestOffer