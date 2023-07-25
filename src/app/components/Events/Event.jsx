import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
//
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"; // Import Axios
import Link from "next/link";
import { useRouter } from "next/navigation";

const Event = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://website-builder-api.azurewebsites.net/api/v1/news")
      .then((response) => {
        setEvents(response.data.response);
        console.log("news data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 3,
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

  const handleClick = (eventId) => {
    alert(eventId);
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
                    width="100%"
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
                  <Link href={`/event/${events[0]?._id}`}>
                    <button>Learn More</button>
                  </Link>
                </div>
              </Col>
              <Col xl={7}>
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {events.map((event) => (
                      <div key={event._id} className="right-event-caro">
                        <div className="right-event-des">
                          <h4>{event.title}</h4>
                          <p>{new Date(event.date).toDateString()}</p>
                          <p>{event.description.substring(0, 150)}</p>
                          <div className="right-learn-btn">
                            {/* Use Link to navigate to the dynamic event details page */}
                            <Link href={`/testpage?${event._id}`}>
                              <button>Learn More</button>
                            </Link>
                            <button onClick={() => handleClick(event._id)}>
                              Learn some
                            </button>
                          </div>
                        </div>
                        <div className="event-caro-img">
                          <img
                            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${event.image}`}
                            alt=""
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
        <div className="event-section-2">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
