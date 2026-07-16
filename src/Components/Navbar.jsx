import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import cartimg from "../assets/cartimg.svg";
import userIcon from "../assets/user.svg";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setSearchQuery, searchQuery, getCartCount } =
    useAppContext();
  console.log("Navbar Cart Count:", getCartCount());
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setOpen(false);
    navigate("/login");
  };
  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/onsale");
    }
  }, [searchQuery]);

  return (
    <>
      <div className="py-[24px]">
        <nav className="flex justify-center items-center gap-[24px]">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <ul className="flex gap-[24px]">
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrival</li>
              <li>Brands</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="relative bg-[#F0F0F0] max-w-[577px] rounded-full">
            <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="Search"
              placeholder="Search for Products"
              className="placeholder:text-[16px] placeholder:font-[16px] placeholder:leading-[100%] placeholder:text-[#00000066] outline-none py-[14px] pl-[40px]"
            />
          </div>

          <div className="flex gap-[14px] relative">
            <div
              onClick={() => navigate("/cart")}
              className="cursor-pointer relative"
            >
              <img src={cartimg} alt="cartimg" className="max-w-[24px]" />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">
                {getCartCount()}
              </button>
            </div>
            <img
              src={userIcon}
              alt="userIcon"
              className="max-w-[24px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute top-8 right-0 bg-white shadow-md rounded-md p-3 w-[150px]">
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">My Orders</li>

                  <li className="cursor-pointer">Wishlist</li>

                  <li className="cursor-pointer">Your Shop</li>

                  <li className="cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
