"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Library_books_main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { getNewArrivals } from "@/app/hooks/UseApi";

const Library_books_main = () => {
  const [cardValues, setCardValues] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    const fetchNewArrivals = async () => {
      const data = await getNewArrivals();
      console.log(data);
      setCardValues(data?.response);
    };
    fetchNewArrivals();
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
    autoplaySpeed: 1300, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
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
    <div id="New_Arrivals">
      <div className="AboutUspage">
        <div className="department-section events-section">
          <div className="container">
            <div className="AboutUspage-title center_div">
              {" "}
              <hr />
              New Arrivals
            </div>

            <p>
              Excitement fills the air as our library welcomes its newest
              additions. Our collection is constantly evolving to offer you the
              latest and greatest. Whether you re seeking inspiration,
              information, or simply a great read, our new arrivals section is
              the place to explore.
            </p>

            <Slider {...settings}>
              {cardValues.map((item, index) => (
                <>
                  <div className="box m-2 caro-box-border" key={index}>
                    <div className="caro-img books">
                      <Image
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item?.image}`}
                        alt=""
                        width={100}
                        height={100}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </>
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
