import React from "react";
import Rating from "../Components/Cart/Rating";
import ProductPreview from "../Components/Cart/ProductPreview";
import MoreCollection from "../Components/Cart/MoreCollection";
// import LatestOffer from "../Components/Cart/MoreCollection";
// import Arrival from "../Components/Cart/Arrival";

const ShopHere = () => {
  return (
    <>
      <ProductPreview />
      <Rating />
      <MoreCollection />
      {/* <Arrival /> */}
      {/* <LatestOffer/> */}
    </>
  );
};

export default ShopHere;
