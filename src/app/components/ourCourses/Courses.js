import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courses.css";
import Link from "next/link";
import { getCourse } from "@/app/hooks/UseApi";
import { Modal } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const Courses = () => {
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);
  const [cardValues, setCardValues] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourse();
      // setCourse(data?.response);
      setCardValues(data?.response);
    };
    fetchCourse();
  }, []);

  return (
    <div className="course">
      <Container>
        <div className="course-headerpage">
          <div className="about-Title">
            <h1>Academics</h1>
          </div>
          <div className="course-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              quasi minus. Ut impedit voluptas excepturi aperiam iste non in
              explicabo. Tenetur inventore dolor distinctio necessitatibus vero,
              perspiciatis aliquam debitis ea.
            </p>
          </div>

          <div className="portfolio">
            <div className="portfolio-container">
              {cardValues.slice(0, 3).map((course) => (
                <Card className="portfolio-card" key={course.id}>
                  <Card.Img
                    variant="top"
                    className="portfolio-modal-images"
                    src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${course.image}`}
                  />
                  <Container>
                    <div className="course-data-items">
                      <span className="course-data-category">
                        <img
                          className="icon_pl p-1"
                          src="forbox.svg"
                          alt="photo"
                          width="auto"
                        />{" "}
                        {course.category}{" "}
                      </span>

                      <span className="course-data-duration">
                        <img
                          className="icon_pl p-1"
                          src="time.svg"
                          alt="photo"
                          width="auto"
                        />
                        {course.duration}
                      </span>
                    </div>
                  </Container>
                  <Card.Body>
                    <Card.Title>
                      <h2 className="portfolio-title">{course.courseName}</h2>
                    </Card.Title>
                    <Card.Text>
                      <p className="portfolio-text">{course.description}</p>
                    </Card.Text>

                    <button
                      variant="primary btn-primary"
                      className="portfolio-btn btn  "
                      onClick={() => handleShow(course)}
                    >
                      {" "}
                      <span>
                        <span className="">More Details</span>
                      </span>{" "}
                    </button>
                  </Card.Body>
                </Card>
              ))}
              <Modal
                key={modalVal?.id}
                show={show}
                onHide={handleClose}
                size="lg"
                className="Course-modal"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="course-modalitems">
                    <Col xl={12} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img
                          variant="top"
                          className="course-card-modalimages"
                          src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${modalVal?.image}`}
                        />
                      </Card>
                    </Col>
                    <Col xl={12} xs={12} sm={12}>
                      <Card.Title className="course-cardmodal-title pt-2">
                        {modalVal?.courseName}
                      </Card.Title>
                      <Card.Text className="course-cardmodal-desc">
                        <span className="course-modal-category">
                          <img
                            className="icon_pl"
                            src="forbox.svg"
                            alt="photo"
                            width="auto"
                          />{" "}
                          {modalVal?.category}{" "}
                        </span>
                        <span className="course-modal-duration">
                          <img
                            className="icon_pl"
                            src="time.svg"
                            alt="photo"
                            width="auto"
                          />{" "}
                          {modalVal?.duration}
                        </span>
                      </Card.Text>

                      <br />
                      <Card.Text className="course-cardmodal-text">
                        <br />
                        {modalVal?.description}
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </div>
          </div>

          <div className="btn">
            <Link href="/colleges" style={{ textDecoration: "none" }}>
              <button>
                {" "}
                <div className="icon_arrow_abt">
                  <span className="p-3">Explore More</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                    <path
                      d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                      fill="#619A46"
                    />
                  </svg>
                </div>{" "}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
