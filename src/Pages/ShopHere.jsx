import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../Components/Cart/Rating";
import ProductPreview from "../Components/Cart/ProductPreview";
import MoreCollection from "../Components/Cart/MoreCollection";
// import LatestOffer from "../Components/Cart/MoreCollection";
// import Arrival from "../Components/Cart/Arrival";

const ShopHere = () => {
  const { id } = useParams(); // yahan se product id milegi
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <ProductPreview product={product} />
      <Rating product={product} />
      <MoreCollection />
      {/* <Arrival /> */}
      {/* <LatestOffer/> */}
    </>
  );
};

export default ShopHere;
