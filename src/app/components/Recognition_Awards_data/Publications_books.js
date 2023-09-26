/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main_navebar from "../header/Header";
import Image from "next/image";
import Footer from "../footer/Footer";
import { getpublication } from "@/app/hooks/UseApi";
import Publications_books_main from "./Publications_books_main";
const Publications_books = () => {
  const [publicbooks, setPublicbooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getpublication();
        setPublicbooks(data?.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
            src="/banner/Publications.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <Publications_books_main />
        <div className="mb-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Publications_books;
