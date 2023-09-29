/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import { getCourse } from "@/app/hooks/UseApi";
import Image from "next/image";
// import "./CoursePage.css";
const HomeCourses = () => {
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
                <p className="portfolio-text">
                  {course.description.substring(0, 150)}...
                </p>
              </Card.Text>
            </Card.Body>
            <div className="center_div mb-4">
              <button
                variant="primary btn-primary"
                className="portfolio-btn More_btn"
                onClick={() => handleShow(course)}
              >
                {" "}
                <span className="">More Details</span>{" "}
              </button>
            </div>
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
                  <h2 className="portfolio-title">{modalVal?.courseName} </h2>
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
  );
};

export default HomeCourses;
