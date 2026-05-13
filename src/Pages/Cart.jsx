import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Cart = () => {
  const [yourcart, setYourCart] = useState([
    {
      id: 1,
      image: "/images/gradient.png",
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      image: "/images/checkered.png",
      title: "CHECKERED SHIRT",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
    },
    {
      id: 3,
      image: "/images/skinny.png",
      title: "FADED SKINNY JEANS",
      size: "Large",
      color: "White",
      price: 240,
      quantity: 2,
    },
  ]);

  const increaseQty = (id) => {
    setYourCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setYourCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  };

  return (
    <div className="px-6 pl-[100px]">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/cart">
          Cart
        </Link>
      </Breadcrumbs>

      <p className="font-bold text-[48px] mt-6 pl-[100px]">Your Cart</p>

      <div className="flex gap-6 mt-8 items-start justify-center">
        <div className="border border-[#0000001A]">
          {yourcart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-[#0000001A]"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-24 object-cover"
                />

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p className="font-bold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[62px] max-w-[126px] text-xl px-[20px] py-[12px] bg-[#F0F0F0]">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="text-xl px-2 bg-[#F0F0F0]"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="text-xl px-2 bg-[#F0F0F0]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[505px] py-[20px] px-[24px] rounded-[20px] h-fit border border-[#0000001A]">
          <h2 className="font-bold text-[24px] leading-[100%] pb-[24px]">
            Order Summary
          </h2>

          <div className="flex justify-between pb-2">
            <p className="text-[#00000099]">Subtotal</p>
            <p>$565</p>
          </div>

          <div className="flex justify-between pb-2">
            <p className="text-[#00000099]">Discount -20%</p>
            <p>-$113</p>
          </div>

          <div className="flex justify-between pb-4">
            <p className="text-[#00000099]">Delivery Fee</p>
            <p>-$113</p>
          </div>
          <div className="flex justify-between font-bold border-t pt-4">
            <p>Total</p>
            <p>$650</p>
          </div>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full bg-[#F0F0F0] rounded-[62px] px-[20px] py-[12px] outline-none text-[16px]"
            />

            <button className="bg-black text-white px-[24px] py-[12px] rounded-[62px]">
              Apply
            </button>
          </div>

          <button className="w-full mt-4 bg-black py-[16px] px-[54px] rounded-[62px] text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
