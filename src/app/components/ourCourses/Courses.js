import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="course">
      {" "}
      <Container>
        <Row>
          <Col>
            <div className="course-header">
              <h1>Our Courses</h1>
            </div>
            <div className="course-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus neque dolorem consectetur at molestiae quidem,
                eligendi maxime architecto similique deserunt quas, nemo,
                voluptates voluptatibus ab ipsum sequi! Expedita, possimus iure.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="portfolio">
        <Container>
          <Row>
            <Col>
              <ul id="portfolio-flters">
                <li data-filter=".first">Certificate</li>
                <li data-filter=".second">Diploma</li>
                <li data-filter=".third">Short Term</li>
              </ul>
            </Col>
          </Row>
          <Row className="portfolio-container">
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* Add the rest of the portfolio items */}
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="portfolio-item first">
              <div className="portfolio-wrap">
                <Card
                  style={{ width: "18rem" }}
                  className="portfolio-card shadow-sm"
                >
                  <Card.Img variant="top" src="/Rectangle 970.jpg" />
                  <Card.Body>
                    <Card.Title className="portfolio-title">
                      Card Title
                    </Card.Title>
                    <Card.Text className="portfolio-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
