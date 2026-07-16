import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import CustomersReview from "../components/CustomersReview";
import ProductCard from "../components/ProductCard";
import NewArrival from "../components/NewArrival";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart, onSaleProducts } =
    useAppContext();

  const { id } = useParams();

  const allProducts = [...products, ...onSaleProducts];
  const product = allProducts.find((item) => item.id == id);
  console.log("Current Product:", product);
  console.log("Products:", products);
  console.log("OnSale Products:", onSaleProducts);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (products.length > 0 && product) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter(
        (item) => product.category === item.category,
      );

      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    setThumbnail(product?.images ? product.images[0] : product?.image);
  }, [product]);
  console.log(relatedProducts);
  return (
    product && (
      <div className="flex flex-col items-center my-12">
        <div>
          <p>
            <Link to={"/"}>Home</Link>/<Link to={"/Products"}>Products</Link>/
            <span className="text-black"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {(product.images || [product.image]).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                  >
                    <img src={image} alt={product.name} />
                  </div>
                ))}
              </div>

              <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                <img
                  src={thumbnail}
                  alt="Selected product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium">{product.name}</h1>

              <div className="mt-6">
                <p className="text-gray-500/70 line-through">
                  MRP: {currency}
                  {product.price}
                </p>

                <p className="text-2xl font-medium">
                  MRP: {currency}
                  {product.offerPrice || product.price}
                </p>

                <span className="text-gray-500/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>

              <ul className="list-disc ml-4 text-gray-500/70">
                {product.description?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <p className="text-base font-medium mt-6">Select Size</p>

              <div className="flex flex-wrap gap-3 mt-3">
                {product.sizes?.map((size, index) => (
                  <button
                    key={index}
                    className="px-5 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div
                onClick={() => addToCart(product.id)}
                className="flex items-center mt-10 gap-4 text-base"
              >
                <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                  Add to Cart
                </button>

                <button
                  onClick={() => {
                    addToCart(product.id);
                    navigate("/cart");
                  }}
                  className="w-full py-3 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>

        <CustomersReview />
        {/* related products */}
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col justify-center items-center w-max">
            <p className="text-3xl font-medium ">You might also like</p>
            <div className="w-20 h-0.5 bg-black rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
            {relatedProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>

          <button
            onClick={() => {
              navigate("/onsale");
              scrollTo(0, 0);
            }}
            className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-white bg-black transition"
          >
            See MOre
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
