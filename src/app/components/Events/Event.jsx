import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
//
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getNews } from "@/app/hooks/UseApi";

const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setEvents(data?.response);
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
          dots: false,
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

  const handleClick = (eventId) => {
    // alert(eventId);
    router.push(`/testpage/${eventId}`);
  };

  return (
    <div>
      <div className="events-section">
        <div className="event-title">
          <h1>Events</h1>
        </div>
        <div></div>
        <div className="event-first-section">
          <Container>
            <Row>
              <Col xl={4}>
                <div className="event-img">
                  <Image
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events[0]?.image}`}
                    alt=""
                    layout="responsive"
                    style={{ borderRadius: "10px" }}
                    width={200} // Set the desired width of the image
                    height={300} // Set the desired height of the image
                  />
                </div>
                <div className="event-btn">
                  <button>Up Coming Events</button>
                  <span>{new Date(events[0]?.date).toDateString()}</span>
                </div>
                <div className="event-des">
                  <h4>{events[0]?.title}</h4>
                  <p>{events[0]?.description.substring(0, 150)}</p>
                </div>
                <div className="learn-btn">
                  <button onClick={() => handleClick(events[0]?._id)}>
                    Read More
                  </button>
                </div>
              </Col>
              <Col xl={8}>
                {/* <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {events.map((event) => (
                      <div key={event._id} className="right-event-caro">
                        <div className="right-event-des">
                          <h4>{event.title}</h4>
                          <p>{new Date(event.date).toDateString()}</p>
                          <p>{event.description.substring(0, 150)}</p>
                          <div className="right-learn-btn">
                            <button onClick={() => handleClick(event._id)}>
                              Read More
                            </button>
                          </div>
                        </div>
                        <div className="event-caro-img">
                          <Image
                            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                            alt=""
                            layout="responsive"
                            width={300}
                            height={100}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div> */}
                <div className="slider-news">
                  <Slider {...settings}>
                    {events.map((events, index) => (
                      <div
                        key={index}
                        className="slide-content"
                        style={{ height: "500px" }}
                      >
                        <Container fluid>
                          <Row className="news-rows">
                            <Col xs={12} xl={6} lg={6}>
                              <p>{events.description}</p>
                            </Col>
                            <Col xs={12} xl={6} lg={6}>
                              <Image
                                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events.image}`}
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
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="event-section-2">
          <div className="event-s-img">
            <img src="Mask group.png" alt="" width="100%" />
          </div>
          <Container>
            <div className="library">
              <h2>Central Library</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                eveniet, sit similique eum ipsum fugit tenetur? Aliquid
                voluptatum perspiciatis eveniet ipsam eius, vero Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores, eaque
                repellat at earum blanditiis soluta est dolor molestiae
                deserunt! Autem corporis eius velit voluptatem ipsa iusto,
                reiciendis cum adipisci eos. consequuntur, aliquam maxime
                accusantium sequi libero error?
              </p>
            </div>
            <div className="learn-btn">
              <button>Learn More</button>
            </div>
          </Container>
        </div> */}
      </div>
    </div>
  );
};

export default Event;
