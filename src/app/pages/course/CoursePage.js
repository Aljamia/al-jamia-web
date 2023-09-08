"use client";
import Footer from "@/app/components/footer/Footer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import "./CoursePage.css";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { getCourse } from "@/app/hooks/UseApi";

const CoursePage = () => {
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState({});
  const [cardValues, setCardValues] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    console.log(data);
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
    <div className="coursePage">
      <PageHeader />
      <div
        className="coursePage-header"
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <Container>
          <div className="coursePage-img pt-5 mag_top">
            <Image
              src="/image 15.jpg"
              layout="responsive"
              width={1000}
              height={500}
              alt="Image"
            />
            <div className="coursePage-text center_div">
              <h2> Explore Our More Courses</h2>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div className="course">
          <Container>
            <div className="course-headerpage">
              <div className="course-header">
                <h1>Academics</h1>
              </div>
              <div className="course-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, quasi minus. Ut impedit voluptas excepturi aperiam
                  iste non in explicabo. Tenetur inventore dolor distinctio
                  necessitatibus vero, perspiciatis aliquam debitis ea.
                </p>
              </div>
              <div className="portfolio">
                <div className="portfolio-container">
                  {cardValues?.map((course) => (
                    <Card className="portfolio-card shadow-sm" key={course.id}>
                      <Card.Img
                        variant="top"
                        className="portfolio-modal-images"
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${course.image}`}
                      />
                      <Container>
                        <div className="course-data-items">
                          <span className="course-data-category">
                            <img
                              className="icon_pl"
                              src="forbox.svg"
                              alt="photo"
                              width="auto"
                            />{" "}
                            {course.category}{" "}
                          </span>

                          <span className="course-data-duration">
                            <img
                              className="icon_pl"
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
                          <h2 className="portfolio-title">
                            {course.courseName}
                          </h2>
                        </Card.Title>
                        <Card.Text>
                          <p className="portfolio-text">{course.description}</p>
                        </Card.Text>

                        <div className="center_div">
                          <button
                            variant="primary btn-primary"
                            className="portfolio-btn btn btn-primary btn-primary"
                            onClick={() => handleShow(course)}
                          >
                            {" "}
                            <span className="">More Details</span>{" "}
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                  <Modal
                    key={modalVal?._id}
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
                          <Card.Title className="course-cardmodal-title">
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
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
