import React from "react";

const AboutUs = () => {
  return (
    <div className="grid md:grid-cols-2 md:w-[80%] w-[95%] mx-[auto] mt-[40px] gap-[40px]">
      <div className="md:text-left text-center">
        <h3 className="text-[35px] leading-[40px] font-bold text-[#2b3356]">What&apos;s different about Manage?</h3>
        <p className="text-[14px] text-[#888888] mt-[25px]">
          Manage provides all the functionality your team needs. Without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <div className="bg-cover-about"></div>
      </div>
      <div className="grid gap-[30px]">
        <div className="flex gap-[15px]">
          <h2 className="bg-[#f3613c] h-max text-white font-bold rounded-[100vw] px-[10px]">
            01
          </h2>
          <div>
            <h4 className="font-bold mb-[10px] text-[#2b3356]">
              Track company-wide progress
            </h4>
            <p className="text-[#888888] text-[14px]">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <h2 className="bg-[#f3613c] h-max text-white font-bold rounded-[100vw] px-[10px]">
            02
          </h2>
          <div>
            <h4 className="font-bold mb-[10px] text-[#2b3356]">
              Advanced built-in reports
            </h4>
            <p className="text-[#888888] text-[14px]">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <h2 className="bg-[#f3613c] h-max text-white font-bold rounded-[100vw] px-[10px]">
            03
          </h2>
          <div>
            <h4 className="font-bold mb-[10px] text-[#2b3356]">
              Everything you need in one place
            </h4>
            <p className="text-[#888888] text-[14px]">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
