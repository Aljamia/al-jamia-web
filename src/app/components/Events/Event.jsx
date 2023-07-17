import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import Image from "next/image";
const Event = () => {
  return (
    <div>
      <div className="events-section">
        <div className="event-title">
          <h1>Events</h1>
        </div>
        <div className="event-first-section">
          <Container>
            <Row>
              <Col xl={5}>
                <div className="event-img">
                  <img src="image 13.png" alt="" />
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
                <h1>
                  ha Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium fuga, vero cumque nulla, quas sapiente assumenda
                  repellat iusto quis similique voluptatibus incidunt amet
                  doloremque nostrum minima esse quae consequuntur aperiam.
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="event-section-2">
          <div className="event-s-img">
            <img src="Mask group.png" alt="" />
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
