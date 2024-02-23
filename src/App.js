import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Reviews from "./components/reviewsCarousel/Reviews";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Reviews />
    </div>
  );
};

export default App;
