import React from 'react'

import tshirt from '../assets/tshirt.png'
import skinnyjeans from '../assets/skinnyjeans.png'
import chekshirt from '../assets/chekshirt.png'
 import orange from '../assets/orange.png'

const Arrival = () => {

  const products = [
    {
      id: 1,
      image: tshirt,
      title: 'T-SHIRT WITH TAPE DETAILS',
      rating: '4.5/5',
      price: '$120'
    },

    {
      id: 2,
      image: skinnyjeans,
      title: 'SKINNY FIT JEANS',
      rating: '3.5/5',
      price: '$240'
    },
    {
      id: 3,
      image: chekshirt,
      title: 'CHECKERED SHIRT',
      rating: '3.5/5',
      price: '$240'
    },
    {
      id: 4,
      image: orange,
      title: 'SLEEVE STRIPED T-SHIRT',
      rating: '3.5/5',
      price: '$240'
    },


    
  ]

  return (
    <>
<h1 className='flex justify-center items-center font-bold text-3xl mt-[35px]'>NEW ARRIVALS</h1>
    
      <div className='grid grid-cols-4 gap-6 mt-[55px]'>
        {
          products.map((item) => (

            <div key={item.id}>

              <img
                src={item.image}
                alt=''
                className='rounded-[20px]'
              />

              <p className='font-bold text-[20px] mt-4'>
                {item.title}
              </p>

              <p className='text-yellow-500 mt-2'>
                 {item.rating}
              </p>

              <p className='font-bold text-[24px] mt-2'>
                {item.price}
              </p>

            </div>
          ))
        }

      </div>

    </>
  )
}

export default Arrival