/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main_navebar from "../Main_navebar/Main_navebar";
import Image from "next/image";
import Footer from "@/app/components/footer/Footer";
import Library_books_main from "./Library_books_main";

const Library_books = () => {
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

        <Library_books_main />
        <div className="mb-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Library_books;
