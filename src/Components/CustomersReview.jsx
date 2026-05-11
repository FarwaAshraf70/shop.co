import React from 'react'
import { FaStar } from "react-icons/fa";
import greentick from '../assets/greentick.svg'

const CustomersReview = () => {
const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex M.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
//   {
//     name: "James L.",
//     text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
//   },
//   {
//     name: "Alex M",
//     text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//   },
//    {
//     name: "Alex M",
//     text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//   },
];

  return (
    <>
    <div className='pt-[80px]  w-full mx-auto max-w-[1240px]'>
    <p className='font-bold text-[48px] leading-[100%] text-[#000000] pl-[100px] '>OUR HAPPY CUSTOMERS</p>
<div className='grid grid-cols-3 gap-[20px] mt-[40px] place-items-center pt-[40px]'>
  {reviews.map((item, index) => (
    <div key={index} className='max-w-[336px] w-full'>

      <div className='flex text-[#FFC633]'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <div className='flex items-center gap-[6px] mt-[10px]'>
        <p className='font-bold text-[20px]'>
          {item.name}
        </p>

        <img src={greentick} alt='' />
      </div>

      <p className='text-[16px] text-black/60 mt-[10px]'>
        {item.text}
      </p>

    </div>
  ))}
</div>
</div>




    </>
  )
}

export default CustomersReview