import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[96px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-[#00d8ff]">DEFI.</h1>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white ">
            {/* <NavLink to="/">Home</NavLink> */}
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[96px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-xl">Platform</li>
            <li className="text-xl">Developers</li>
            <li className="text-xl">Community</li>
            <li className="text-xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
