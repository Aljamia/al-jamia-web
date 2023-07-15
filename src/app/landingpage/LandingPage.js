import React from "react";
import About from "../components/about/About";
import CarouselComponent from "../components/carousel/Carousel";
import Event from "../components/Events/Event";
import Footer from "../components/footer/Footer";
import Courses from "../components/ourCourses/Courses";
import Grades from "../components/grades/Grades";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <About />
      <Courses />
      <Grades />
      <Footer />
    </div>
  );
};

export default LandingPage;
