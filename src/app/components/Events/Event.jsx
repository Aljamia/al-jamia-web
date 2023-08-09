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
    slidesToShow: 2,
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
      <div className="events-section">
        <div className="event-title">
          <h1>Events</h1>
        </div>
        <div></div>
        <div className="event-first-section">
          <Container>
            <Row>
              <Col xl={5}>
                <div className="event-img">
                  <img
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events[0]?.image}`}
                    alt=""
                    style={{ borderRadius: "10px", width: "100%" }}
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
                  <button
                    className="event-btn-right"
                    onClick={() => handleClick(events[0]?._id)}
                  >
                    More
                  </button>
                </div>
              </Col>
              <Col xl={7}>
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {events.map((event) => (
                      <div key={event._id} className="right-event-caro">
                        <div className="right-event-des">
                          <h4>{event.title}</h4>
                          <p>
                            {new Date(event.date).toDateString()}{" "}
                            <span>
                              {" "}
                              <hr style={{ color: "grey" }} />
                            </span>
                          </p>
                          <p>{event.description.substring(0, 165)}</p>
                          <div className="right-learn-btn">
                            {/* Use Link to navigate to the dynamic event details page */}
                            {/* <Link href={`/testpage?${event._id}`}>
                              <button>Learn More</button>
                            </Link> */}
                            <button
                              className="event-btn-right"
                              onClick={() => handleClick(event._id)}
                            >
                              More
                            </button>
                          </div>
                        </div>
                        <div className="event-caro-img">
                          <img
                            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                            alt=""
                            className="event-img-items"
                          />
                        </div>
                      </div>
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
