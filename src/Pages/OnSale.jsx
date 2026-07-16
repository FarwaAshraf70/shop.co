import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const OnSale = () => {
  const { onSaleProducts, searchQuery } = useAppContext();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterProducts(
        onSaleProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setFilterProducts(onSaleProducts);
    }
  }, [onSaleProducts, searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-12 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-72 border rounded-2xl p-6 h-fit shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Categories */}
        <div className="border-b pb-5 mb-5">
          <h3 className="font-semibold mb-3">Category</h3>

          <div className="space-y-2 text-gray-600">
            <p className="cursor-pointer hover:text-black">T-Shirts</p>
            <p className="cursor-pointer hover:text-black">Shirts</p>
            <p className="cursor-pointer hover:text-black">Jeans</p>
            <p className="cursor-pointer hover:text-black">Shorts</p>
          </div>
        </div>

        {/* Price */}
        <div className="border-b pb-5 mb-5">
          <h3 className="font-semibold mb-3">Price</h3>

          <input type="range" min="0" max="500" className="w-full" />

          <div className="flex justify-between text-sm mt-2">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>

        {/* Colors */}
        <div className="border-b pb-5 mb-5">
          <h3 className="font-semibold mb-3">Colors</h3>

          <div className="flex flex-wrap gap-3">
            <button className="w-7 h-7 rounded-full bg-red-500 border"></button>

            <button className="w-7 h-7 rounded-full bg-blue-500 border"></button>

            <button className="w-7 h-7 rounded-full bg-green-500 border"></button>

            <button className="w-7 h-7 rounded-full bg-yellow-400 border"></button>

            <button className="w-7 h-7 rounded-full bg-purple-600 border"></button>

            <button className="w-7 h-7 rounded-full bg-pink-500 border"></button>

            <button className="w-7 h-7 rounded-full bg-black border"></button>
          </div>
        </div>

        {/* Sizes */}
        <div className="border-b pb-5 mb-5">
          <h3 className="font-semibold mb-3">Sizes
          </h3>

          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white">
              Small
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white">
              Medium
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white">
              Large
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white">
              X-Large
            </button>
          </div>
        </div>

        {/* Dress Style */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Dress Style</h3>

          <div className="space-y-2 text-gray-600">
            <p className="cursor-pointer hover:text-black">Casual</p>
            <p className="cursor-pointer hover:text-black">Formal</p>
            <p className="cursor-pointer hover:text-black">Party</p>
            <p className="cursor-pointer hover:text-black">Gym</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900">
          Apply Filter
        </button>
      </div>

      {/* Products */}
      <div className="flex-1">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">On Sale Products</h2>

          <select className="border rounded-lg px-4 py-2">
            <option>Newest</option>
            <option>Price Low - High</option>
            <option>Price High - Low</option>
            <option>Popular</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {filterProducts
            .filter((product) => product.inStock)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>

    // <div>
    //   <div className="">
    //     {filterProducts
    //       .filter((product) => product.inStock)
    //       .map((product, index) => (
    //         <ProductCard key={index} product={product} />
    //       ))}
    //   </div>
    // </div>
  );
};

export default OnSale;
