import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React from "react";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

// import PopularOutfit from "./Pages/PopularOutfit";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Toaster } from "react-hot-toast";
// Layout (YOUR STRUCTURE)
import MainLayout from "./MainLayout/Layout";
import Footer from "./components/Footer";
import OnSale from "./pages/OnSale";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      <Toaster />
      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          {/* 🔴 PUBLIC ROUTES (NO NAVBAR / FOOTER) */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🟢 MAIN ROUTES (WITH LAYOUT) */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            {/* all product */}
            <Route path="/onsale" element={<OnSale />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        {!isSellerPath && <Footer />}
      </div>
    </div>
  );
}

export default App;
