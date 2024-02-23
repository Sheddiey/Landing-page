import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Reviews from "./components/reviewsCarousel/Reviews";
import GetStarted from "./components/getStarted/GetStarted";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Reviews />
      <GetStarted />
    </div>
  );
};

export default App;
