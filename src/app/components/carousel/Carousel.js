import "./Carousel.css";
import React from "react";
import Header from "../header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    arrows: false,
  };
  return (
    <div className="header">
      <Header /> {/*imported navbar from header */}
      <div className="header-contents">
        <div className="header-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fullscreen-video"
            style={{ width: "100%" }}
          >
            <source
              src="/ENCORE 2022 -GRADUATION CEREMONY- AFTER MOVIE-JWALA 2015 MBBS -GOVERNMENT MEDICAL COLLEGE TRIVANDRUM.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="carousel-overlay">
            <Slider {...settings}>
              <div className="carousel-para animate__bounceIn">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="carousel-para animate__bounceIn">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="carousel-para animate__bounceIn">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
