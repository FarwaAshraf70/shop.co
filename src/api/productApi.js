import axios from "./axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("/api/v1/products/listProduct")
    return res.data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};