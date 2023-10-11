"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Publications_books_main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getpublication } from "@/app/hooks/UseApi";
import Image from "next/image";

const Publications_books_main = () => {
  const [publication, setpublication] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    const fetchpublication = async () => {
      const data = await getpublication();
      setpublication(data?.response);
    };
    fetchpublication();
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
          slidesToShow: 1,
          slidesToScroll: 0,
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
            <h1 className="TitleStyle pt-5">Our Publications</h1>
            <p>
              Our alumni continue to inspire through their stories, research,
              and expertise. Alumni Publications is our way of sharing their
              valuable insights, accomplishments, and knowledge with the world.
              Explore these publications to stay connected with our alumni
              community and stay informed about their diverse contributions
              across different domains
            </p>
            <Slider {...settings}>
              {publication.map((item, index) => (
                <>
                  <div className=" box m-2 caro-box-border" key={index}>
                    <div className="caro-img books">
                      <Image
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item?.image}`}
                        alt=""
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </div>
                    {/* <div className="caro-items">
                      <h4 className="caro-des"> {item.title}</h4>
                      <p className="caro-paragraph"> {item.author}</p>
                      <div className="More_btn2">
                  <button onClick={() => handleShow(department)}>
                    More Details
                  </button>

                </div> 
                    </div> */}
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mb-5"> </div>
      </div>
    </div>
  );
};

export default Publications_books_main;
