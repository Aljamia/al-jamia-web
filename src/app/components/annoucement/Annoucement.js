import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./Announcement.css";
import Link from "next/link";
import { getNotification } from "@/app/hooks/UseApi";
import { FaCableCar } from "react-icons/fa6";
const Annoucement = () => {
  const [notify, setNotify] = useState([]);
  useEffect(() => {
    const fetchNotify = async () => {
      const data = await getNotification();
      setNotify(data?.response);
    };

    fetchNotify();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true, // Set the vertical option to true
    verticalSwiping: true, // Enable vertical swiping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
    <div className="annon-header">
      <Container className="annon-slick">
        <Slider {...settings} className="annon-slick ">
          <div className="annon-caro"></div>

          {notify.map((notify, index) => (
            <div className="annon-caro" key={index}>
              <div className="right-event-des">
                <span>
                  {" "}
                  <p>
                    {notify.title}
                    <Link href={notify.link} style={{ textDecoration: "none" }}>
                      {" "}
                      <h2>
                        Click Here <FaCableCar />
                      </h2>
                    </Link>
                    <hr />
                  </p>{" "}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Annoucement;
