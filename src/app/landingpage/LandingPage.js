import React from "react";
import About from "../components/about/About";
import CarouselComponent from "../components/carousel/Carousel";
import Deparments from "../components/deparments/Deparments";
import Director from "../components/director/Director";
import Event from "../components/Events/Event";
import Footer from "../components/footer/Footer";
import Courses from "../components/ourCourses/Courses";
import Grades from "../components/grades/Grades";
import Library from "../components/Events/Library";
import "../globals.css";
import AlJamiaApp from "../pages/AlJamiaApp/AlJamiaApp";
import CareerLink from "../pages/CareerLink/CareerLink";
// import SliderBanner from "../components/SliderBanner/SliderBanner";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      {/* <SliderBanner /> */}
      <About />
      <Courses />
      <Grades />
      <Event />
      <Library />
      {/* <Deparments /> */}
      <Director />
      <CareerLink />
      <AlJamiaApp />

      <Footer />
    </div>
  );
};

export default LandingPage;
