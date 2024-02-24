import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Reviews from "./components/reviewsCarousel/Reviews";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Reviews />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
