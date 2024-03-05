/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import { getCourse } from "@/app/hooks/UseApi";
import "../../globals.css";
import Image from "next/image";

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
            style={{height:"250px",width:"100%"}}
            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${course.image}`}
          />
          <Container>
            <div className="course-data-items">
              <span className="course-data-category">
                <img unoptimized={true}
          unselectable={true}
                  className="icon_pl"
                  src="forbox.svg"
                  alt="photo"
                  style={{ width: "20px", height: "20px", objectFit: "contain" }}
                />{" "}
                {course.category}{" "}
              </span>
              <span className="course-data-duration">
                <img unoptimized={true}
          unselectable={true}
                  className="icon_pl"
                  src="time.svg"
                  alt="photo"
                  style={{ width: "20px", height: "20px", objectFit: "contain" }}
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
            <Col xl={6} xs={12} sm={12}>
              <Card className="faculties-cardmodal shadow-sm">
                <Card.Img
                  variant="top"
                  className="course-card-modalimages"
                  src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${modalVal?.image}`}
                />
              </Card>
            </Col>
            <Col xl={6} xs={12} sm={12}>
              <Card.Title className="course-cardmodal-title pt-2">
                <h2 className="portfolio-title">{modalVal?.courseName} </h2>
              </Card.Title>
              <Card.Text className="course-cardmodal-desc">
                <span className="course-modal-category">
                  <img unoptimized={true}
          unselectable={true}
                    className="icon_pl"
                    src="forbox.svg"
                    alt="photo"
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
              <Card.Text className="course_cardmodal_desc card-text">
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
