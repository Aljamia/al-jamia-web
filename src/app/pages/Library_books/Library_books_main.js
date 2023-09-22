"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./Library_books_main.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Library_books_main = () => {
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);
  const [cardValues, setCardValues] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://aljamia-hgtgv.ondigitalocean.app/api/v1/department")
      .then((response) => {
        setCardValues(response.data?.response);
        console.log("department data", response.data?.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <div>
      <div className="AboutUspage">
        <div className="department-section events-section">
          <div className="container">
            <h1 class="TitleStyle">
              <hr />
              New Arrivals
            </h1>
            <p>
              Excitement fills the air as our library welcomes its newest
              additions. Our collection is constantly evolving to offer you the
              latest and greatest. Whether you're seeking inspiration,
              information, or simply a great read, our new arrivals section is
              the place to explore.
            </p>

            <Slider {...settings}>
              {cardValues.map((department) => (
                <div className="box m-2" key={department.id}>
                  <div className="caro-img">
                    <img src="book1.png" alt="" />
                  </div>
                  <div className="caro-items">
                    <h4 className="caro-des">Book Name</h4>
                    <p className="caro-paragraph">Schultz Joanne</p>
                    {/* <div className="More_btn2">
                    <button onClick={() => handleShow(department)}>
                      More Details
                    </button>

                  </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>{" "}
          <div className="explore-btn ">
            <Link
              href="https://library.aljamia.in/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h5>Explore More</h5>
            </Link>
          </div>
        </div>
        <div className="mb-5"> </div>
      </div>
    </div>
  );
};

export default Library_books_main;
