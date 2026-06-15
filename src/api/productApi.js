import axios from "./axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("/api/product/list");
    return res.data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};