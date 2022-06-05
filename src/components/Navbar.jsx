import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[96px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-[#00d8ff]">
          <Link to="/">DEFI.</Link>
        </h1>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white ">
            <li>
              <Link to="#platform" smooth>
                Platform
              </Link>
            </li>
            <li>
              <Link to="#developers" smooth>
                Developers
              </Link>
            </li>
            <li>
              <Link to="#community" smooth>
                Community
              </Link>
            </li>
            <li>
              <Link to="#about" smooth>
                About
              </Link>
            </li>
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
            <li className="text-xl">
              <Link to="#platform" smooth>
                Platform
              </Link>
            </li>
            <li className="text-xl">
              <Link to="#developers" smooth>
                Developers
              </Link>
            </li>
            <li className="text-xl">
              <Link to="#community" smooth>
                Community
              </Link>
            </li>
            <li className="text-xl">
              <Link to="#about" smooth>
                About
              </Link>
            </li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
