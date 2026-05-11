import React from 'react'
import versace from '../assets/versace.png'
import zara from '../assets/zara.png'
import gucci from '../assets/gucci.png'
import prada from '../assets/prada.png'
import calvin from '../assets/calvin.png'
const Brands = () => {
  return (
    <>
<div className='bg-[#000000]'>
<div className='flex bg-[#000000] gap-[106px] px-[30px] py-[42px] justify-center items-center'>
  <img src={versace} alt=''/>
  <img src={zara} alt=''/> 
  <img src={gucci} alt=''/>
  <img src={prada} alt=''/>
  <img src={calvin} alt=''/>
</div>
</div>
    </>
  )
}

export default Brands