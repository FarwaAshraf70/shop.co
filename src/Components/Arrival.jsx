import React from 'react'

import tshirt from '../assets/tshirt.png'
import skinnyjeans from '../assets/skinnyjeans.png'
import chekshirt from '../assets/chekshirt.png'
import orange from '../assets/orange.png'

import vertical from '../assets/vertical.png'
import courage from '../assets/courage.png'
import loose from '../assets/loose.png'
import faded from '../assets/faded.png'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Arrival = () => {

  const products = [
    {
      id: 1,
      image: tshirt,
      title: 'T-SHIRT WITH TAPE DETAILS',
      rating: 4.5,
      price: '$120'
    },

    {
      id: 2,
      image: skinnyjeans,
      title: 'SKINNY FIT JEANS',
      rating: 3.5,
      price: '$240'
    },

    {
      id: 3,
      image: chekshirt,
      title: 'CHECKERED SHIRT',
      rating: 3.5,
      price: '$240'
    },

    {
      id: 4,
      image: orange,
      title: 'SLEEVE STRIPED T-SHIRT',
      rating: 3.5,
      price: '$240'
    },
  ]


  const tipselling = [
    {
      id: 1,
      image: vertical,
      title: 'VERTICAL STRIPED SHIRT',
      rating: 5,
      price: '$212'
    },

    {
      id: 2,
      image: courage,
      title: 'COURAGE GRAPHIC T-SHIRT',
      rating: 4,
      price: '$145'
    },

    {
      id: 3,
      image: loose,
      title: 'LOOSE FIT BERMUDA SHORTS',
      rating: 3,
      price: '$80'
    },

    {
      id: 4,
      image: faded,
      title: 'FADED SKINNY JEANS',
      rating: 4.5,
      price: '$210'
    },
  ]

  // ⭐ STAR FUNCTION (same, just working now)
  const renderStars = (rating) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className='text-yellow-500' />)
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className='text-yellow-500' />)
      } else {
        stars.push(<FaRegStar key={i} className='text-yellow-500' />)
      }
    }

    return stars
  }

  return (
    <>

      <h1 className='flex justify-center items-center font-bold text-3xl mt-[35px]'>
        NEW ARRIVALS
      </h1>

      <div className='grid grid-cols-4 gap-6 mt-[55px] justify-items-center  '>

        {
          products.map((item) => (

            <div key={item.id} className=' flex flex-col gap-[4px]'>
              <img
                src={item.image}
                alt=''
                className='rounded-[20px]  mx-auto max-w-[295px] h-[298px] '
              />

              <p className='font-[700] text-[20px] leading-[100%]  mt-[16px] '>
                {item.title}
              </p>

            
              <p className='flex items-center gap-1 mt-2'>
                {renderStars(item.rating)}
                <span className='text-black ml-2'>
                  {item.rating}/5
                </span>
              </p>

              <p className='font-bold text-[24px] mt-2'>
                {item.price}
              </p>

            </div>
          ))
        }

      </div>



      <h1 className='flex justify-center items-center font-bold text-3xl mt-[80px] '>
        TOP SELLING
      </h1>

      <div className='grid grid-cols-4 gap-6 mt-[55px] justify-items-center  '>

        {
          tipselling.map((item) => (

          <div key={item.id} className=''>
<div className='flex flex-col justify-center items-center'>
              <img
                src={item.image}
                alt=''
                className='rounded-[20px]  mx-auto max-w-[295px] h-[298px] '
              />

              <p className='font-bold text-[20px] leading-[100%] mt-4'>
                {item.title}
              </p>

             
              <p className='flex items-center gap-1 mt-2'>
                {renderStars(item.rating)}
                <span className='text-black ml-2'>
                  {item.rating}/5
                </span>
              </p>

              <p className='font-bold text-[24px] mt-2'>
                {item.price}
              </p>
</div>
            </div>
          ))
        }

      </div>

    </>
  )
}

export default Arrival