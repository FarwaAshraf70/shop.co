import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCart = ({ item }) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={item.image}
        alt={item.title}
        className="rounded-[20px] mx-auto max-w-[295px] h-[298px]"
      />

      <p className="font-bold text-[20px] leading-[100%] mt-4">
        {item.title}
      </p>

      <p className="flex items-center gap-1 mt-2">
        {renderStars(item.rating)}
        <span className="text-black ml-2">
          {item.rating}/5
        </span>
      </p>

      <p className="font-bold text-[24px] mt-2">
        {item.price}
      </p>
    </div>
  );
};

export default ProductCart;