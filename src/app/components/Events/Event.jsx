import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
//
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { getNews } from "@/app/hooks/UseApi";

const Event = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  // Fetch the API data on component mount using Axios

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setEvents(data?.response);
    };
    fetchNews();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true, // Set the vertical option to true
    verticalSwiping: true, // Enable vertical swiping
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
    // alert(eventId);
    router.push(`/testpage/${eventId}`);
  };

  return (
    <div>
      <div className="events-section" >
        <div className="event-title">
          <div className="about-Title" data-aos="fade-up">
            <h1>News and Events</h1>
          </div>
          <hr />
          <p className="center_div" data-aos="fade-up">
            Al Jamia offers good academic programs with a few specializations to
            meet the needs of both the Nation and Society. It includes the
            Preparatory program, two Bachelor programs, three Masters programs
            and one Diploma program.
          </p>
        </div>
        <div></div>
        <div className="event-first-section p-1">
          <Container>
            <Row>
              <Col xl={5} data-aos="fade-right">
                <div className="event-img pt-3">
                  <img
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events[0]?.image}`}
                    alt=""
                    style={{ borderRadius: "20px", width: "100%" }}
                  />
                </div>
                <div className="event-btn ">
                  <button>Up Coming Events</button>
                  <span className="m-2">
                    {" "}
                    {new Date(events[0]?.date).toDateString()}
                  </span>
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

              <Col xl={7} className="pt-3" data-aos="fade-left">
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {events.map((event) => (
                      <>
                        <ul>
                          <li className="card" key={event._id}>
                            <img
                              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                              alt=""
                              className="event-img-items featured-image"
                            />

                            <article className="card-body">
                              <header>
                                <a href="utilidata-national-governors-association-meeting">
                                  <div className="title">
                                    <h4>{event.title}</h4>
                                  </div>
                                  <p className="meta">
                                    <span className="author">
                                      <p>
                                        {event.description.substring(0, 90)}...
                                      </p>
                                    </span>
                                    <span> | </span>
                                    <time
                                      className="updated"
                                      datetime=""
                                      itemprop="datePublished"
                                    >
                                      {" "}
                                      {new Date(event.date).toDateString()}{" "}
                                      <button
                                        className="chip"
                                        onClick={() => handleClick(event._id)}
                                      >
                                        Read More
                                      </button>
                                    </time>
                                  </p>
                                </a>
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
    </div>
  );
};

export default Event;
