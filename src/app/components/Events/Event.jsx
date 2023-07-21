import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const Event = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  const MAX_DESCRIPTION_LENGTH = 100; // Set the maximum length for the description

  function trimDescription(description) {
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description;
    }
    return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
  }

  const [newsData, setNewsData] = useState([]); // Set initial value to an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://website-builder-api.azurewebsites.net/api/v1/news"
        );
        const data = await response.json();
        setNewsData(data.response.slice(0, 4)); // Slice the array to extract the first 3 elements
       console.log("news",data.response)
      } catch (error) {
        console.error("Error fetching data:", error);
        setNewsData([]);
      }
    }

    fetchData();
  }, []);

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
                  <img src="image 13.png" alt="" width="100%" />
                </div>
                <div className="event-btn">
                  <button>Up Coming Events</button>
                  <span>{new Date(newsData[0]?.date).toDateString()}</span>
                </div>
                <div className="event-des">
                  <h4>
                  {newsData[0]?.title}
                  </h4>
                  <p>
                  {newsData[0]?.description.substring(0,100)}
                  </p>
                </div>
                <div className="learn-btn">
                  <Link href="/Event">
                    <b>
                      <button>Read More</button>
                    </b>
                  </Link>
                </div>
              </Col>
              <Col xl={8}>
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    {newsData.map((newsItem) => (
                      <>
                        <div className="right-event-caro">
                          <div className="righttevent-caro-des">
                            <h4>{newsItem.title}</h4>
                            <h5>{new Date(newsItem.date).toDateString()}</h5>
                            <p>{trimDescription(newsItem.description)}</p>
                            <div className="learn-btn">
                              <Link href="/Event">
                                <b>
                                  <button>Read More</button>
                                </b>
                              </Link>
                            </div>
                          </div>
                          <div className="right-evnt-img">
                            <img
                              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${newsItem.image}`}
                              alt={newsItem.title}
                              width="100%"
                            />
                          </div>
                        </div>
                      </>
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
