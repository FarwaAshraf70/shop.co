import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { reviews } from "../../utils/Data";

const Rating = () => {
  return (
    <>
      <div className="border-b max-w-[1240px] mx-auto flex justify-center items-center pt-[80px] ">
        <ul className="flex  gap-[269px] flex justify-center items-center pt-[24px]">
          <li>
            <Link className="font-normal text-[16px] leading-[100%] ">
              Product Details
            </Link>{" "}
          </li>
          <li>
            <Link className="font-normal text-[16px] leading-[100%] ">
              Rating & Reviews
            </Link>{" "}
          </li>
          <li>
            <Link className="font-normal text-[16px] leading-[100%] ">
              FAQs
            </Link>{" "}
          </li>
        </ul>
      </div>

      <div>
        <div className="pt-[80px]  w-full mx-auto max-w-[1240px]">
          <div className="flex gap-[8px]">
            <p className="font-bold text-[24px] leading-[100%] text-[#000000] pl-[100px] ">
              All Reviews
              <span className="font-[400] text-[16px] leading-[22px] text-black/60">
                (451)
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2  gap-[20px] mt-[40px] place-items-center pt-[40px]">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="[max-w-[510px] border border-[#0000001A] py-[28px] px-[32px] rounded-[20px] w-full "
              >
                <div className="flex text-[#FFC633]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="flex items-center gap-[6px] mt-[10px]">
                  <p className="font-bold text-[20px]">{item.name}</p>

                  <img src="/images/greentick.svg" alt="" />
                </div>

                <p className="text-[16px] text-black/60 mt-[10px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center whitespace-nowrap pt-[36px]">
          <button className="font-[500] max-w-[230px]  text-[16px] leading-[100%] text-[#000000] rounded-[62px] px-[54px] py-[16px] border border-[#0000001A]">
            Load More Reviews
          </button>
        </div>
      </div>
    
    </>
  );
};

export default Rating;
