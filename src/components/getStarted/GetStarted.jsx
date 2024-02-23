import React from "react";

const GetStarted = () => {
  return (
    <div className="mt-[100px] bg-[#f3613c] md:pb-[15px] pb-[45px] py-[20px]">
      <div className="grid md:grid-cols-2 w-[80%] mx-auto gap-[30px] md:gap-[60px]">
        <h3 className="font-bold text-white text-[30px] md:text-left text-center">
          Simplify how your team works today.
        </h3>
        <div className="relative">
          <button className="bg-white absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[100vw] px-[15px] py-[4px] text-[#f3613c] shadow-red-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
