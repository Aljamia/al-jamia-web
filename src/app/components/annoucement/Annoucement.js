import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Announcement.css"; // Make sure to include your custom CSS file here
import { getNotification } from "@/app/hooks/UseApi";
import Link from "next/link";
import { FaHandPointUp } from "react-icons/fa6";

const Announcement = () => {
  const [notify, setNotify] = useState([]);
  useEffect(() => {
    const fetchNotify = async () => {
      const data = await getNotification();
      setNotify(data?.response);
    };

    fetchNotify();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="news-alerts holder">
      <h1 className="news-alert-headertitle">Announcement</h1>
      <Slider {...settings}>
        {notify.map((item, index) => (
          <div className="news-item" key={index}>
            <span>
              <span className="date-display-single">{item.date}</span>
            </span>
            <Link
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h5 className="news-alert-title">{item.title}</h5>
              <Link style={{ textDecoration: "none" }} href={item.link}>
                <p className="news-alert-desc">
                  click here <FaHandPointUp />
                </p>
              </Link>
            </Link>
            <hr style={{ margin: "auto", width: "50%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Announcement;
