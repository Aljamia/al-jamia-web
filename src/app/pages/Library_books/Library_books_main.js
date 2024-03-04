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
                           unoptimized={true} 
                      />
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>{" "}
          <div
            className="btn"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              href="https://library.aljamia.in/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <button>
                {" "}
                <div className="icon_arrow_abt">
                  <span className="p-3">Explore More</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                    <path
                      d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                      fill="#619A46"
                    />
                  </svg>
                </div>{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-5"> </div>
      </div>
    </div>
  );
};

export default Library_books_main;
