import axiosInstance from "./axios";

export const getProducts = async () => {
  try {
    const res = await axiosInstance.get("/api/v1/products/listProduct")
    return res.data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};