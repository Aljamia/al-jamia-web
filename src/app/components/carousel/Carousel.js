import "./Carousel.css";
import Header from "../header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";

const CarouselComponent = () => {
  const sliderRef = useRef(null);
  const slideDuration = 6000; // Adjust the slide duration (in milliseconds)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, slideDuration);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
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
          <div className="carousel-overlay ">
            <Slider ref={(slider) => (slider = slider)} {...settings}>
              <div className="carousel-para">
                <p className="animate__bounceIn">
                  Resolve The Campaign with our pleasure everyone
                </p>
              </div>
              <div className="carousel-para">
                <p className="animate__bounceIn">
                  Welcome To Al-jamia member everyone hi
                </p>
              </div>
              <div className="carousel-para ">
                <p className="animate__bounceIn">
                  This is a wonderful occation to have you all join us
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
