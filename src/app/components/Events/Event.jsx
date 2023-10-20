/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { getNews } from "@/app/hooks/UseApi";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa6";

const Event = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setEvents(data?.response);
    };
    fetchNews();

    // Check if the screen width is less than 600px (typical mobile width)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 3, // Adjust the number of slides to show based on mobile or not
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1300,
    vertical: !isMobile, // Set the vertical option based on mobile or not
    verticalSwiping: !isMobile, // Enable/disable vertical swiping based on mobile or not
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
          initialSlide: 1,
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
    router.push(`/testpage/${eventId}`);
  };

  return (
    <div className="events-section">
      <div className="event-title">
        <div className="about-Title">
          <h1>News and Events</h1>
          <hr />
        </div>
        <div id="grades" className="grades">
          <div className="container_paragraph">
            <p>
              Discover Al Jamia Al Islamiya latest news and events, celebrating
              academic excellence and vibrant campus life. Stay informed about
              our enriching activities, workshops, and more, contributing to
              holistic education and character development
            </p>
          </div>
        </div>
      </div>
      <div className="event-first-section">
        <Container>
          <Row>
            <Col xl={4}>
              <div className="event-img pt-3">
                <Image
                  src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events[0]?.image}`}
                  alt=""
                  width={1000}
                  layout="responsive"
                  height={1000}
                  priority
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="event-btn">
                <button>Up Coming Events</button>
                <span className=" m-3 ">{events[0]?.textDate}</span>
              </div>
              <div className="event-des">
                <h4>{events[0]?.title}</h4>
                <p>{events[0]?.description.substring(0, 100)}...</p>
              </div>
              <div className="learn-btn">
                <button
                  className="chip m-0"
                  onClick={() => handleClick(events[0]?._id)}
                >
                  Read More
                </button>
              </div>
            </Col>

            <Col xl={8} className="pt-3">
              <div className="carouselevent">
                <Slider {...settings} className="event-slick">
                  {events.map((event) => (
                    <>
                      <ul>
                        <li
                          className="card card_event_slick news_card"
                          key={event._id}
                        >
                          <img
                            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                            alt=""
                            className="event-img-items featured-image"
                            loading="lazy"
                          />
                          <article className="card-body">
                            <header>
                              <div className="title ml-2 pt-2">
                                <h4>{event.title}</h4>
                              </div>

                              <span className="author">
                                {event.description.substring(0, 115)}...
                              </span>
                              <button
                                className="chip"
                                onClick={() => handleClick(event._id)}
                              >
                                Read More
                              </button>
                              {event?._id === "65321347b5552c3f834edbe5" && (
                                <div className="Download_news_button btn-3 ">
                                  <a href="/pdf/Application Form.pdf" download>
                                    <button>
                                      <FaFilePdf /> Download PDF
                                    </button>
                                  </a>
                                </div>
                              )}
                            </header>
                          </article>
                        </li>
                      </ul>
                    </>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Event;
