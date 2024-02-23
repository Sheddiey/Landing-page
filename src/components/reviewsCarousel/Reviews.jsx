import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ali from "../../assets/images/avatar-ali.png";
import anisha from "../../assets/images/avatar-anisha.png";
import richard from "../../assets/images/avatar-richard.png";
import shanai from "../../assets/images/avatar-shanai.png";
import Button from "../button/Button";

const Reviews = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          swipe: true,
        },
      },
    ],
  };
  return (
    <div className="w-[95%] md:w-[100%] mx-[auto] mb-[50px] relative">
      <h2 className="text-[#2b3356] text-[34px] font-bold text-center my-[40px]">
        What they&apos;ve said
      </h2>
      <div>
        <Slider {...settings}>
          <div className="text-center relative bg-[#fafafa] p-[5px] rounded ">
            <img
              className="h-[70px] absolute left-[50%] translate-x-[-50%] w-[70px]"
              src={anisha}
              alt="Anisha Li"
            />
            <h3 className="font-bold text-[#2b3356] mt-[80px]">Anisha Li</h3>
            <p className="text-[#888888] text-[14px]">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="text-center relative bg-[#fafafa] p-[5px] rounded">
            <img
              className="h-[70px] absolute left-[50%] translate-x-[-50%] w-[70px]"
              src={ali}
              alt="Anisha Li"
            />
            <h3 className="font-bold text-[#2b3356] mt-[80px]">Ali Bravo</h3>
            <p className="text-[#888888] text-[14px]">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="text-center relative bg-[#fafafa] p-[5px] rounded">
            <img
              className="h-[70px] absolute left-[50%] translate-x-[-50%] w-[70px]"
              src={richard}
              alt="Anisha Li"
            />
            <h3 className="font-bold text-[#2b3356] mt-[80px]">
              Richard Watts
            </h3>
            <p className="text-[#888888] text-[14px]">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
          <div className="text-center relative bg-[#fafafa] p-[5px] rounded">
            <img
              className="h-[70px] absolute left-[50%] translate-x-[-50%] w-[70px]"
              src={shanai}
              alt="Anisha Li"
            />
            <h3 className="font-bold text-[#2b3356] mt-[80px]">
              {" "}
              Shanai Gough
            </h3>
            <p className="text-[#888888] text-[14px]">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </Slider>
      </div>
      <div className="my-[30px] absolute left-[50%] translate-x-[-50%]">
        <Button />
      </div>
    </div>
  );
};

export default Reviews;
