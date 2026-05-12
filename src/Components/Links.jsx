import React from 'react'
import greater from '../assets/greater.svg'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
       <ul className='flex  gap-6'>
     <li className='flex items-center gap-2'>
  <Link className='font-normal text-[16px] leading-[100%]'>
    Home
  </Link>

  <span>
    <img src={greater} alt='' />
  </span>
</li>
<li className='flex items-center gap-2'>
  <Link className='font-normal text-[16px] leading-[100%]'>
    Shop
  </Link>

  <span>
    <img src={greater} alt='' />
  </span>
</li>

<li className='flex items-center gap-2'>
  <Link className='font-normal text-[16px] leading-[100%]'>
    Men
  </Link>

  <span>
    <img src={greater} alt='' />
  </span>
</li>
  <li className='flex items-center gap-2'>
  <Link className='font-normal text-[16px] leading-[100%]'>
   T-shirts
  </Link>

  <span>
    <img src={greater} alt='' />
  </span>
</li>
      </ul> 
    </div>
  )
}

export default Links