import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"; // Import Axios
import { Container } from 'react-bootstrap';
import "./Announcement.css"
const Annoucement = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true, // Set the vertical option to true
        verticalSwiping: true, // Enable vertical swiping
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
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
        <Container className="annon-slick">

                <Slider {...settings} className="annon-slick ">
              <div className="annon-caro">
                <div className="right-event-des">
                    <p>32 MINUTES AGO</p>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam.</h2>
                    <hr />
                </div>
               
              </div>
              <div className="annon-caro">
                <div className="right-event-des">
                    <p>32 MINUTES AGO</p>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam.</h2>
                    <hr />
                </div>
              
              </div>
              <div className="annon-caro">
                <div className="right-event-des">
                    <p>32 MINUTES AGO</p>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam.</h2>
                    <hr />
                </div>
              </div>
              <div className="annon-caro">
                <div className="right-event-des">
                    <p>32 MINUTES AGO</p>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam.</h2>
                    <hr />
                </div>
              </div>
          </Slider>
               
        </Container>
    </div>
  )
}

export default Annoucement
