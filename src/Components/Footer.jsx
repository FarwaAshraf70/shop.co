import React from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.svg'
import fb from '../assets/fb.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mx-auto bg-[#F0F0F0] w-full  '> 
      <div className='max-w-[1441px] mx-auto  '>
      <div className='max-w-[248px] flex justify-between items-center gap-[113px] px-[101px]'>
      <div className='flex flex-col gap-[25px] mt-[20px]'>
<img src={logo} alt='' className='max-w-[167px]'/>
<p className='font-[400px] text-[14px] leading-[22px] text-black/60'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p> 
<div className='flex gap-[12px] '>
<img src={twitter} alt='' className='  rounded-full px-[9px] py-[7px]  border border-1 border-black/20'/>
<img src={fb} alt='' className='  bg-black rounded-full px-[9px] py-[8px]  border border-1 border-black/20'/>
<img src={instagram} alt='' className='  rounded-full px-[9px] py-[7px]  border border-1 border-black/20'/>
<img src={github} alt='' className='  rounded-full px-[9px] py-[7px]  border border-1 border-black/20'/>
</div>
</div>

<ul className='flex flex-col justify-center items-center'>
   <li ><Link className='font-[500] text-[16px] leading-[18px] tracking-[3px]  text-[#000000]'>Company</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60 '>About</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Features </Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Works </Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px]  text-black/60 '>Career </Link> </li>
</ul>
<ul>
   <li ><Link className='font-[500] text-[16px] leading-[18px] tracking-[3px]  text-[#000000]'>Help</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] whitespace-nowrap text-black/60 '>Customer Support</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px]  text-black/60  '>Delivery Details</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Terms & Conditions </Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px]  text-black/60 '>Privacy Policy </Link> </li>
</ul>
<ul>
   <li ><Link className='font-[500] text-[16px] leading-[18px] tracking-[3px]  text-[#000000]'>FAQ</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60 '>Account</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Manage Deliveries</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Orders </Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px]  text-black/60 '>Payments</Link> </li>
</ul><ul>
   <li ><Link className='font-[500] text-[16px] leading-[18px] tracking-[3px]  text-[#000000]'>Resources</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60 '>Free eBooks</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>Development Tutorial</Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px] text-black/60  '>How to - Blog </Link> </li>
   <li ><Link className='font-[400] text-[16px] leading-[19px] tracking-[0px]  text-black/60 '>Youtube Playlist</Link> </li>
</ul>
</div>


      </div>
    </div>

  )
}

export default Footer