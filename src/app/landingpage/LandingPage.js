import React from "react";
import About from "../components/about/About";
import CarouselComponent from "../components/carousel/Carousel";
import Deparments from "../components/deparments/Deparments";
import Director from "../components/director/Director";
import Event from "../components/Events/Event";
import Footer from "../components/footer/Footer";
import Courses from "../components/ourCourses/Courses";
import Grades from "../components/grades/Grades";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <About />
      <Event />
      <Director/>
      <Deparments/>
      <Courses />
      <Grades />
      <Footer />
    </div>
  );
};

export default LandingPage;
