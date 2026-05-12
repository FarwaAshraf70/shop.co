import React, { useState } from "react";

const ProductPreview = () => {
  const products = [
    {
      id: 1,
      title: "One Life Graphic T-shirt",

      description:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      sellingPrice: 260,

      orignalPrice: 300,

      percentDiscount: 40,

      rating: 4.5,

      images: [
        "/images/front.png",
        "/images/backside.png",
        "/images/dummy.png",
      ],

      colors: ["#4F4631", "white", "gray"],

      sizes: ["S", "M", "L", "XL"],
    },
  ];

  // single product
  const product = products[0];

  // states
  const [mainImage, setMainImage] = useState(product.images[0]);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <>
      <div className="flex justify-center items-center gap-[40px] mt-[36px]">
        {/* LEFT SIDE IMAGES */}
        <div className="flex flex-col gap-[14px]">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setMainImage(img)}
              className={`w-[152px] h-[152px] object-cover rounded-[20px] cursor-pointer border-2
              
              ${mainImage === img ? "border-black" : "border-transparent"}
            `}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div>
          <img
            src={mainImage}
            alt=""
            className="w-[444px] h-[500px] object-cover rounded-[20px]"
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col gap-5 max-w-[600px]">
          {/* TITLE */}
          <p className="font-bold text-[40px] leading-[100%] text-black">
            {product.title}
          </p>

          {/* RATING */}
          <p className="text-[18px]">⭐ {product.rating}/5</p>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <p className="font-bold text-[32px]">${product.sellingPrice}</p>

            <p className="text-black/40 line-through text-[32px]">
              ${product.orignalPrice}
            </p>

            <button className="bg-red-100 text-red-500 px-3 py-1 rounded-full">
              -{product.percentDiscount}%
            </button>
          </div>

          {/* DESCRIPTION */}
          <p className="text-black/60 text-[16px] leading-[24px]">
            {product.description}
          </p>

          {/* COLORS */}
          <div className="flex flex-col gap-3">
            <p className="text-black/60">Select Colors</p>

            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2
                  
                  ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }
                `}
                />
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="flex flex-col gap-3">
            <p className="text-black/60">Choose Size</p>

            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full border
                  
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-black"
                  }
                `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
