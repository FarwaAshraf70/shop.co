import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import cart from '../assets/cart.svg'
import signIn from '../assets/signIn.svg'


const Navbar = () => {
  const [open , setOpen]=useState(false)
  return (
    <>

<div className=''>
    <nav className='flex justify-center items-center gap-10 mt-[24px] mx-[100px]'>
  
      <img src={logo} alt='' className='max-w-40 h-5'/>
  
    <div className=''>
      <ul className='flex  gap-6'>
      {/* <li><Link className='font-bold text-[32px] leading-[100%] text-[#000000]'>SHOP.CO</Link></li> */}
      <li ><Link className='font-normal text-[16px] leading-[100%] '>Shop</Link> </li>
      <li><Link className='font-normal text-[16px] leading-[100%] '>On Sale<span></span></Link> </li>
      <li><Link className='font-normal text-[16px] leading-[100%] '>New Arrivals</Link> </li>
      <li><Link className='font-normal text-[16px] leading-[100%] '>Brands</Link> </li> 
      </ul>
    </div>
    <div className='relative bg-[#F0F0F0] py-3 pl-8.5  rounded-[62px] max-w-144.25 gap-3'>
      <input type='text' placeholder='Search for products...' className=' placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] ' />
      <CiSearch  className='absolute bottom-3.75 left-1.25 bg-black/400'/>
    </div>
    <div className='flex gap-3'>
      <img src={cart} alt='' className='w-8'/>
      <img src={signIn} alt='' className='w-8'/>
      </div>

    </nav>
 </div>
    
    </>
  )
}

export default Navbar
