import React from "react";
import About from "../components/about/About";
import CarouselComponent from "../components/carousel/Carousel";
import Event from "../components/Events/Event";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <About/>
      <Event/>
      <Footer />
    </div>
  );
};

export default LandingPage;
