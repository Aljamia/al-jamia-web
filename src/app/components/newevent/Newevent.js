"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import { getNews } from "@/app/hooks/UseApi";
import Image from "next/image";

const Newevent = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data?.response);
    };
    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    slidesToShow: 2,
    autoplaySpeed: 2000,
    slidesToScroll: 1, // Change this value to control how many slides scroll at once
    initialSlide: 0,
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
          slidesToShow: 2,
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
  const sliderHeight = "1200px"; // Set your desired height here
  return (
    <div style={{ height: sliderHeight }}>
      <Slider {...settings}>
        {news.map((newsItem, index) => (
          <div key={index} className="slide-content">
            <Container fluid>
              <Row>
                <Col xs={12} xl={6} lg={6}>
                  <p>{newsItem.description}</p>
                </Col>
                <Col xs={12} xl={6} lg={6}>
                  <Image
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${newsItem.image}`}
                    alt=""
                    width={200}
                    height={160}
                    className="right-img"
                    style={{ borderRadius: "5px" }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Newevent;
