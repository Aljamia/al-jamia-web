"use client";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import Event from "@/app/components/Events/Event";
import Footer from "@/app/components/footer/Footer";

function HomePage(eventId) {
  console.log("connected", { eventId });
  const [events, setEvents] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://aljamia-hgtgv.ondigitalocean.app/api/v1/news", {
        params: {
          id: eventId.params.eventId,
        },
      })
      .then((response) => {
        setEvents(response.data.response);
        console.log("updatenews data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log({ events });

  return (
    <div>
      <PageHeader />
      <div className="news-section">
        <Container id="news-container">
          <div className="header-news">
            <div className="news-title">
              <h1>{events.title}</h1>
            </div>
            <div className="new-img">
              <img
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events.image}`}
                alt=""
                width="100%"
              />
            </div>
            <div className="news-para">
              <p>{events.description}</p>
            </div>
          </div>
        </Container>
        {/* news finesh--------------------------------- */}
        {/* <div className="event-first-section">
          <Container>
            <Row>
              <Col xl={5}>
                <div className="event-img">
                  <img
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${newsData[0]?.image}`}
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="event-btn">
                  <button>Up Coming Events</button>
                  <span>{new Date(newsData[0]?.date).toDateString()}</span>
                </div>
                <div className="event-des">
                  <h4>{newsData[0]?.title}</h4>
                  <p>{newsData[0]?.description.substring(0, 150)}</p>
                </div>
                <div className="learn-btn">
                <button onClick={() => handleClick(events[0]?._id)}>
                    Learn More
                  </button>
                </div>
              </Col>
              <Col xl={7}>
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {newsData.map((event) => (
                      <div key={event._id} className="right-event-caro">
                        <div className="right-event-des">
                          <h4>{event.title}</h4>
                          <p>{new Date(event.date).toDateString()}</p>
                          <p>{event.description.substring(0, 150)}</p>
                          <div className="right-learn-btn">
                            <button onClick={() => handleClick(event._id)}>
                              Learn More
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
        </div> */}
        <Event event-section-2={false} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
