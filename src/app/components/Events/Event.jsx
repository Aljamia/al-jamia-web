/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { getNews, getEvents } from "@/app/hooks/UseApi";
import CustomSlider from "../customSlider/CustomSlider";

const Event = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data?.response);
    };
    fetchNews();

    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data?.response);
    };
    fetchEvents();

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
              <div className="event_slider_section">
                <CustomSlider>
                  {events.map((event, index) => (
                    <>
                      <img
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                        key={index}
                        alt="Image Loading"
                        loading="lazy"
                      />
                    </>
                  ))}
                </CustomSlider>
              </div>
            </Col>
            <Col xl={8} className="pt-3">
              <div className="carouselevent">
                <Slider {...settings} className="event-slick">
                  {news.map((event) => (
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
                              <div className="title">
                                <h4>{event.title}</h4>
                              </div>

                              <span className="author">
                                {event.description.substring(0, 110)}...
                              </span>
                              <div className="news_button">
                                <div>
                                  <button
                                    className="chip"
                                    onClick={() => handleClick(event._id)}
                                  >
                                    Read More
                                  </button>
                                </div>
                              </div>
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
