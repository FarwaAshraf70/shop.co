import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const NewArrival = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-[72px]">
      <p className="font-bold text-[48px] text-black leading-[100%] tracking-[0] text-center">
        NEW ARRIVALS
      </p>
      {/* <div className="grid grid-cols-4 justify-items-center">
        {product
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div> */}

      <div className="grid grid-cols-4 justify-items-center gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
