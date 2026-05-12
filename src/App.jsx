import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ShopHere from "./Pages/ShopHere";
import Footer from "./Components/Footer";
import LatestOffer from "./Components/LatestOffer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shophere" element={<ShopHere />} />
        </Routes>
        <LatestOffer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
