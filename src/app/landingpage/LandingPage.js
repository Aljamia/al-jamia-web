import React from "react";
import About from "../components/about/About";
import CarouselComponent from "../components/carousel/Carousel";
import Event from "../components/Events/Event";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <About/>
      <Event/>
    </div>
  );
};

export default LandingPage;
