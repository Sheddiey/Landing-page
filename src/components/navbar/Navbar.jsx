import React, { useState } from "react";
import logo from "../../assets/svgs/logo.svg";
import bars from "../../assets/svgs/icon-hamburger.svg";
import close from "../../assets/svgs/icon-close.svg";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex justify-between md:w-[80%] w-[95%] mx-[auto] mt-[40px] relative">
      <div>
        <img className="cursor-pointer" src={logo} alt="manage logo" />
      </div>
      <div
        className={`${
          isToggle ? "fixed md:hidden inset-0 bg-black opacity-50 z-[10]" : ""
        }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`${
          isToggle ? "absolute shadow-lg z-50 bg-white" : ""
        }  top-[70px] py-[40px] w-[95%] ml-[10px] text-center text-[#273d99] `}
      >
        <ul
          className={`${
            isToggle ? "flex flex-col" : "hidden"
          } md:flex gap-[20px] text-[#273d99] font-bold`}
        >
          <li className="cursor-pointer hover:underline">Pricing</li>
          <li className="cursor-pointer hover:underline">Product</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Careers</li>
          <li className="cursor-pointer hover:underline">Community</li>
        </ul>
      </div>
      <div>
        <button className="text-white rounded-[100vw] px-[15px] py-[5px] bg-[#dc3737] shadow-red-500 shadow-lg hidden md:block">
          Get Started
        </button>
      </div>
      <div onClick={handleToggle} className="md:hidden">
        {isToggle ? <img src={close} alt="" /> : <img src={bars} alt="" />}
      </div>
    </div>
  );
};

export default Navbar;
