/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Card, Modal } from "react-bootstrap";
import Main_navebar from "../header/Header";
import Image from "next/image";
import Footer from "../footer/Footer";
const Publications_books = () => {
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
    const callMe = async () => {
      const resp = await axios.get(
        "https://aljamia-hgtgv.ondigitalocean.app/api/v1/department"
      );
      console.log({ resp });
    };

    callMe();
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
        <Main_navebar />
        {/* <PageHeader /> */}

        <div className="AboutUspage-img">
          <Image
            src="/image 7.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <div className="department-section events-section">
          <div className="container">
            <h1 class="TitleStyle">
              <hr />
              Our Publications
            </h1>
            <p>
              Our alumni continue to inspire through their stories, research,
              and expertise. Alumni Publications is our way of sharing their
              valuable insights, accomplishments, and knowledge with the world.
              Explore these publications to stay connected with our alumni
              community and stay informed about their diverse contributions
              across different domains
            </p>

            <Slider {...settings}>
              {cardValues.map((department) => (
                <div className="box m-2" key={department.id}>
                  <div className="caro-img">
                    <img src="book1.png" alt="" />
                  </div>
                  <div className="caro-items">
                    <h4 className="caro-des">Book Name</h4>
                    <p className="caro-paragraph">Joanne Schultz</p>
                    {/* <div className="More_btn2">
                    <button onClick={() => handleShow(department)}>
                      More Details
                    </button>

                  </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mb-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Publications_books;
