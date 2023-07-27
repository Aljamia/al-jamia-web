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

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <About />
      <Courses />
      <Grades />
      <Event />
      <Library/>
      <Director />
      <Deparments />
      <Footer />
    </div>
  );
};

export default LandingPage;
