import React from "react";
import ProductCart from "../Components/ProductCart";

import tshirt from "../assets/tshirt.png";
import skinnyjeans from "../assets/skinnyjeans.png";
import chekshirt from "../assets/chekshirt.png";
import orange from "../assets/orange.png";

import vertical from "../assets/vertical.png";
import courage from "../assets/courage.png";
import loose from "../assets/loose.png";
import faded from "../assets/faded.png";

const Arrival = () => {
  const products = [
    {
      id: 1,
      image: tshirt,
      title: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      price: "$120",
    },
    {
      id: 2,
      image: skinnyjeans,
      title: "SKINNY FIT JEANS",
      rating: 3.5,
      price: "$240",
    },
    {
      id: 3,
      image: chekshirt,
      title: "CHECKERED SHIRT",
      rating: 3.5,
      price: "$240",
    },
    {
      id: 4,
      image: orange,
      title: "SLEEVE STRIPED T-SHIRT",
      rating: 3.5,
      price: "$240",
    },
  ];

  const tipselling = [
    {
      id: 5,
      image: vertical,
      title: "VERTICAL STRIPED SHIRT",
      rating: 5,
      price: "$212",
    },
    {
      id: 6,
      image: courage,
      title: "COURAGE GRAPHIC T-SHIRT",
      rating: 4,
      price: "$145",
    },
    {
      id: 7,
      image: loose,
      title: "LOOSE FIT BERMUDA SHORTS",
      rating: 3,
      price: "$80",
    },
    {
      id: 8,
      image: faded,
      title: "FADED SKINNY JEANS",
      rating: 4.5,
      price: "$210",
    },
  ];

  return (
    <>
      <h1 className="flex justify-center items-center font-bold text-3xl mt-[35px]">
        NEW ARRIVALS
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-[55px] justify-items-center">
        {products.map((item) => (
          <ProductCart key={item.id} item={item} />
        ))}
      </div>

      <h1 className="flex justify-center items-center font-bold text-3xl mt-[80px]">
        TOP SELLING
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-[55px] justify-items-center">
        {tipselling.map((item) => (
          <ProductCart key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Arrival;
