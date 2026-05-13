import React from 'react'
import Hero from '../Components/Hero'
import Brands from '../Components/Brands'
import Arrival from '../Components/Arrival'
import Dressing from '../Components/Dressing'
import CustomersReview from '../Components/CustomersReview'
import LatestOffer from '../Components/\LatestOffer'
import Footer from '../Components/\Footer'
import { Link } from 'react-router-dom'
import Links from '../Components/Links'

const Home = () => {
  return (
    <>
    <Hero />
    <Brands />
    <Arrival/>
    <Dressing/>
    <CustomersReview/>
    {/* <LatestOffer/> */}
    {/* <Links/> */}
   {/* <AddToCart/> */}
    </>
  )
}

export default Home