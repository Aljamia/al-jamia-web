import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Department.css";
import Link from "next/link";

const Departments = () => {
  // ... (the rest of your settings and useEffect code)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Add this property to enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [department, setDepartment] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://website-builder-api.azurewebsites.net/api/v1//department")
      .then((response) => {
        setDepartment(response.data.response);
        console.log("department data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="department-section">
        <div className="container">
          <div className="row">
            <div className="department-heading">
              <h1>Department</h1>
            </div>
            <div className="department-para">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur consequuntur deserunt dolorum qui itaque aliquid hic
                labore, aut illum expedita reiciendis blanditiis quibusdam rerum
                pariatur consequatur optio ullam recusandae sequi?Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Tenetur
                consequuntur deserunt dolorum qui itaque aliquid hic labore, aut
                illum expedita reiciendis blanditiis quibusdam rerum pariatur
                consequatur optio ullam recusandae sequi?
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-2">
          <Slider {...settings}>
            {department.map((dept) => (
              <div className="box" key={dept._id}>
                <div className="caro-img">
                  <img src="book.png" alt="" />
                </div>
                <div className="caro-des">
                  <h4>{dept.description.substring(0, 30)}...</h4>
                  <div className="caro-btn">
                    <Link href="/coursepage">
                      <button>Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Departments;

// -----------------------------------------
