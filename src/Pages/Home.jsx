import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";

import CustomersReview from "../components/CustomersReview";
import LatestOffer from "../components/LatestOffer";
// import Footer from "../Components/\Footer";
import { Link } from "react-router-dom";
import NewArrival from "../components/NewArrival";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <>
      {/* hero component is banner */}
      <Hero />
      <Brands />
      <NewArrival />
      <BottomBanner />
      {/* //arrial means catagories of images */}
      <CustomersReview />
      <LatestOffer />

      {/* <AddToCart/> */}
    </>
  );
};

export default Home;
