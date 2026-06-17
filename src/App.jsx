import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ShopHere from "./Pages/ShopHere";
import Footer from "./Components/Footer";
import LatestOffer from "./Components/LatestOffer";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shophere/:id" element={<ShopHere />} />
          {/* <Route path="/shophere" element={<ShopHere />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <LatestOffer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /* <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />} /> */
}
