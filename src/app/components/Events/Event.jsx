import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Event = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
                  <img src="image 13.png" alt="" width="100%" />
                </div>
                <div className="event-btn">
                  <button>Up Coming Events</button>
                  <span>32 MINUTES AGO</span>
                </div>
                <div className="event-des">
                  <h4>
                    Lorem ipsum dolor sit amet corrupti natus perferendis
                    commodi sit?
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet nobis molestias!adipisicing
                    elit.corrupti quam libero atque nisi mollitia doloribus
                    distinctio? Sapiente non illo, porro ad eum dicta ducimus
                    aliquam nemo.
                  </p>
                </div>
                <div className="learn-btn">
                  <button>Learn More</button>
                </div>
              </Col>
              <Col xl={7}>
                <div className="carouselevent">
                  <Slider {...settings} className="event-slick">
                    <div className="right-event-caro">
                      <div className="right-event-des">
                        <h4>
                          Lorem ipsum dolor sit amet corrupti natus perferendis
                          commodi sit?
                        </h4>
                        <p>30 june 2023 _____</p>
                        <p>
                          Lorem, ipsum dolor sit amet nobis
                          molestias!adipisicing elit.corrupti quam libero atque
                          nisi mollitia doloribus distinctio? Sapiente non illo,
                          porro ad eum dicta ducimus aliquam nemo.
                        </p>
                        <div className="right-learn-btn">
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className="event-caro-img">
                        <img src="events.png" alt="" />
                      </div>
                    </div>
                    <div className="right-event-caro">
                      <div className="right-event-des">
                        <h4>
                          Lorem ipsum dolor sit amet corrupti natus perferendis
                          commodi sit?
                        </h4>
                        <p>30 june 2023 _____</p>
                        <p>
                          Lorem, ipsum dolor sit amet nobis
                          molestias!adipisicing elit.corrupti quam libero atque
                          nisi mollitia doloribus distinctio? Sapiente non illo,
                          porro ad eum dicta ducimus aliquam nemo.
                        </p>
                        <div className="right-learn-btn">
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className="event-caro-img">
                        <img src="events.png" alt="" />
                      </div>
                    </div>
                    <div className="right-event-caro">
                      <div className="right-event-des">
                        <h4>
                          Lorem ipsum dolor sit amet corrupti natus perferendis
                          commodi sit?
                        </h4>
                        <p>30 june 2023 _____</p>
                        <p>
                          Lorem, ipsum dolor sit amet nobis
                          molestias!adipisicing elit.corrupti quam libero atque
                          nisi mollitia doloribus distinctio? Sapiente non illo,
                          porro ad eum dicta ducimus aliquam nemo.
                        </p>
                        <div className="right-learn-btn">
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className="event-caro-img">
                        <img src="events.png" alt="" />
                      </div>
                    </div>
                    <div className="right-event-caro">
                      <div className="right-event-des">
                        <h4>
                          Lorem ipsum dolor sit amet corrupti natus perferendis
                          commodi sit?
                        </h4>
                        <p>30 june 2023 _____</p>
                        <p>
                          Lorem, ipsum dolor sit amet nobis
                          molestias!adipisicing elit.corrupti quam libero atque
                          nisi mollitia doloribus distinctio? Sapiente non illo,
                          porro ad eum dicta ducimus aliquam nemo.
                        </p>
                        <div className="right-learn-btn">
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className="event-caro-img">
                        <img src="events.png" alt="" />
                      </div>
                    </div>
                    <div className="right-event-caro">
                      <div className="right-event-des">
                        <h4>
                          Lorem ipsum dolor sit amet corrupti natus perferendis
                          commodi sit?
                        </h4>
                        <p>30 june 2023 _____</p>
                        <p>
                          Lorem, ipsum dolor sit amet nobis
                          molestias!adipisicing elit.corrupti quam libero atque
                          nisi mollitia doloribus distinctio? Sapiente non illo,
                          porro ad eum dicta ducimus aliquam nemo.
                        </p>
                        <div className="right-learn-btn">
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className="event-caro-img">
                        <img src="events.png" alt="" />
                      </div>
                    </div>
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
