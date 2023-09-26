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
const Publications_books_main = () => {
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
              {publicbooks.map((books) => (
                <div className="box m-2" key={books.id}>
                  <div className="caro-img">
                    <Image
                      src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${books.image}`} // Use the image URL from the API response
                      alt="Image"
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="caro-items">
                    <h4 className="caro-des">{books.title}</h4>
                    <p className="caro-paragraph">{books.author}</p>
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
      </div>
    </div>
  );
};

export default Publications_books_main