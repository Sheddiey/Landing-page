import React from "react";
import Button from "../button/Button";
import illustration from "../../assets/svgs/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-[40px] md:w-[80%] w-[95%] mx-[auto] mt-[40px]">
      <div className="my-[auto] md:text-left text-center">
        <h3 className="text-[40px] font-bold text-[#2b3356] leading-[50px]">
          Bring everyone together to build better products
        </h3>
        <p className="text-[#888888] my-[25px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button />
      </div>
      <div className="order-first md:order-last">
        <img src={illustration} alt="illustration intro" />
        <div className="bg-cover"></div>
      </div>
    </div>
  );
};

export default Hero;
