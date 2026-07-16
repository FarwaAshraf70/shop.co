import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import React from "react";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  // console.log(cartItems);
  console.log("Current Product:", product.id);
  console.log("Cart Items:", cartItems);
  console.log("Current Quantity:", cartItems[product.id]);
  // console.log(product.id, cartItems[product.id]);
  return (
    product && (
      <>
        <div
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
          className="mt-[55px] "
        >
          <div key={product.id} className="">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-[295px] h-[298px]"
            />

            <p className="text-[#000000] text-[20px] font=[700] leading-[100%] tracking-[0]">
              {product.name}
            </p>

            <div className="font-[400] text-[14px] tracking-[0] leading-[100%]">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      product.rating > i
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="md:w-3.5 w-3"
                  />
                ))}
            </div>

            <div className="flex">
              <p className="text-[#000000] text-[24px] font-[700]">
                {currency}
                {product.price}
              </p>

              <p className="text-[#00000066] text-[24px] font-[700]">
                {currency}
                {product.oldPrice}
              </p>

              <p className="text-[#FF3333] text-[12px] font-[500]">
                {product.discount}
              </p>
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-white"
            >
              {!cartItems[product.id] ? (
                <button
                  className="bg-[#000000] cursor-pointer"
                  onClick={() => {
                    addToCart(product.id);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2 w-[120px]">
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                    className="cursor-pointer"
                  >
                    -
                  </button>

                  <span>{cartItems[product.id]}</span>

                  <button
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="cursor-pointer"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProductCard;
