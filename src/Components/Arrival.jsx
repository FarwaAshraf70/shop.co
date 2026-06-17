import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCart from "../Components/ProductCart";
import { getProducts } from "../api/productApi";

const Arrival = () => {
  const [products, setProducts] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        setProducts(Array.isArray(data) ? data.slice(0, 4) : []);

        setTopSelling(
          Array.isArray(data)
            ? data.filter((item) => item.bestSeller).slice(0, 4)
            : [],
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <h1 className="flex justify-center items-center font-bold text-3xl mt-[35px]">
        NEW ARRIVALS
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-[55px] justify-items-center">
        {products.map((item) => (
          <div
            key={item._id}
            className="w-[250px] cursor-pointer"
            onClick={() => navigate(`/shophere/${item._id}`)}
          >
            <div className="bg-[#F0F0F0] rounded-[20px] overflow-hidden">
              <img
                src={item.image?.[0]}
                alt={item.name}
                className="w-full h-[280px] object-contain"
              />
            </div>
            <h3 className="font-bold text-lg mt-3">{item.name}</h3>
            <div className="flex items-center gap-2">
              <span>{item.rating} </span>
            </div>
            <p className="font-bold text-2xl">${item.price}</p>
          </div>
        ))}
      </div>

      <h1 className="flex justify-center items-center font-bold text-3xl mt-[80px]">
        TOP SELLING
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-[55px] justify-items-center">
        {topSelling.map((item) => (
          <ProductCart key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Arrival;
