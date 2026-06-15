import axios from "./axiosClient";

// Register
export const registerUser = async (userData) => {
  const response = await axiost.post("/api/v1/users/register", userData);

  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await axios.post("/api/v1/login", userData);

  return response.data;
};
//logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get Profile
// export const getProfile = async () => {
//   const token = localStorage.getItem("token");

//   const response = await axiosClient.get(
//     "/api/auth/profile",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };
