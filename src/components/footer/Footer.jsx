import React from "react";
import logo_footer from "../../assets/svgs/logo_footer.svg";
import facebook from "../../assets/svgs/icon-facebook.svg";
import youtube from "../../assets/svgs/icon-youtube.svg";
import twitter from "../../assets/svgs/icon-twitter.svg";
import pinterest from "../../assets/svgs/icon-pinterest.svg";
import instagram from "../../assets/svgs/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-[#1e1e26] py-[60px]">
      <div className="w-[95%] md:w-[80%] mx-[auto] text-[#888888] relative">
        <div className="grid md:grid-cols-4">
          <div className="grid content-between md:order-first order-last mx-auto">
            <img className="my-[40px] mx-[auto] md:my-[0px]" src={logo_footer} alt="" />
            <div className="flex gap-[35px] md:gap-[10px] md:order-last order-first justify-between">
              <img className="cursor-pointer" src={facebook} alt="" />
              <img className="cursor-pointer" src={youtube} alt="" />
              <img className="cursor-pointer" src={twitter} alt="" />
              <img className="cursor-pointer" src={pinterest} alt="" />
              <img className="cursor-pointer" src={instagram} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 mx-auto gap-[40px] my-[50px] md:my-[0px]">
            <ul className="grid gap-[5px]">
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Home</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Pricing</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Products</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">About us</li>
            </ul>
            <ul className="grid gap-[5px] md:hidden">
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Careers</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Community</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">
                Privacy Poicy
              </li>
            </ul>
          </div>
          <div>
            <ul className="md:grid hidden gap-[5px]">
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Careers</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">Community</li>
              <li className="w-max hover:text-[#f3613c] cursor-pointer">
                Privacy Poicy
              </li>
            </ul>
          </div>
          <div className="grid content-between md:order-last order-first mx-auto">
            <div className="flex gap-[15px]">
              <input
                className="rounded-[100vw] px-[10px] active:outline-none"
                type="email"
                name="email"
                placeholder="Updates in your inbox..."
              />
              <button className="text-white rounded-[100vw] px-[15px] py-[4px] bg-[#f3613c] hover:shadow-red-300 hover:shadow-lg ">
                Go
              </button>
            </div>
            <p className="text-[12px] md:text-right md:right-[30px] left-[100px] absolute bottom-[-20px]">
              Copyright 2024. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
