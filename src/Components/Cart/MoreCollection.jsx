import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const MoreCollection = () => {
  const products = [
    {
      id: 1,
      title: "Polo with Contrast Trims",

      sellingPrice: 260,

      rating: 4.5,

      image: "/images/Frame 32.png",
    },

    {
      id: 2,
      title: "Gradient Graphic T-shirt",

      sellingPrice: 145,

      rating: 3.5,

      image: "/images/Frame 33.png",
    },

    {
      id: 3,
      title: "Polo with Tipping Details",

      sellingPrice: 180,

      rating: 4.5,

      image: "/images/Frame 34.png",
    },

    {
      id: 4,
      title: "Black Striped T-shirt",

      sellingPrice: 120,

      rating: 5,

      image: "/images/Frame 35.png",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} />);
      } else if (i - rating <= 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-bold text-3xl mt-[35px] text-center">
        You might also like
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-[55px] max-w-[1240px] w-full place-items-center justify-center">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col gap-[4px]">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-[20px] mx-auto max-w-[295px] h-[298px]"
            />

            <p className=" text-center">{item.title}</p>

            <p className="flex items-center justify-center gap-1 mt-2 text-yellow-500 text-center">
              {renderStars(item.rating)}
              <span className="text-black ml-2">{item.rating}/5</span>
            </p>

            <p className=" text-center font-bold text-[24px] mt-2">
              ${item.sellingPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreCollection;
