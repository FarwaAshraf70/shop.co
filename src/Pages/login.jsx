import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/authApi";
import cargo from "/images/cargo.webp";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await loginUser({ email, password });

  //     localStorage.setItem("token", data.token);
  //     navigate("/home");
  //   } catch (error) {
  //     alert(error.response?.data?.message || "Login Failed");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // save role

      if (data.role === "admin") {
        navigate("/admin"); // admin page
      } else {
        navigate("/home"); // user page
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex w-full max-w-5xl">
        {/* Left Side */}
        <div className="hidden md:block w-1/2 relative">
          <img src={cargo} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-3">Login Account</h1>

          <p className="text-gray-500 mb-8">
            Hello, welcome back to your account!
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-full px-4 py-3 mt-2 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-full px-4 py-3 mt-2 outline-none"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button type="button" className="text-yellow-500 text-sm">
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-400 py-3 rounded-full font-semibold"
            >
              Log In
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center mt-8 text-gray-500">
            Don't Have An Account?{" "}
            <Link to="/signup" className="text-yellow-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
