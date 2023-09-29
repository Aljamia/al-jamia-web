/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/app/components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { getCourse } from "@/app/hooks/UseApi";
import Information_Technology from "../Centre_for_it/Information_Technology";
import Centre_for_hr_main from "../Centre_for_hr/Centre_for_hr_main";
import Centre_for_research_main from "../Centre_for_research/Centre_for_research_main";
import Faculty_mail from "../Faculty/Faculty_mail";
import Students_Council_main from "../Students_Council/Students_Council_main";
import Image from "next/image";
import "./CoursePage.css";
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

      <div className="AboutUspage-img">
        <Image
          src="/banner/about_banner2.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <div>
        <div className="course pt-5">
          <div className="AboutUspage-desc">
            <>
              <Container className="AboutUspage-short-desc">
                <div class="about-Title m-0">
                  <h1>Colleges</h1>
                </div>
                <p className="about-description">
                  Al Jamia offers good academic programs with a few
                  specializations to meet the needs of both the Nation and
                  Society. It includes the Preparatory program, two Bachelor
                  programs, three Masters programs and one Diploma program.
                </p>
              </Container>
            </>
          </div>

          <Container>
            <div className="course-headerpage">
                <div className="portfolio-container">
                  {cardValues.map((course) => (
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
                          <h2 className="portfolio-title">
                            {course.courseName}
                          </h2>
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
                            <h2 className="portfolio-title">
                              {modalVal?.courseName}{" "}
                            </h2>
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
          </Container>

          <Container>
            <Information_Technology />
            <Centre_for_hr_main />
            <Centre_for_research_main />

            <Row className="course-modalitems">
              <Col xl={6} xs={12} sm={12}>
                <Faculty_mail />
              </Col>
              <Col xl={6} xs={12} sm={12}>
                <Students_Council_main />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursePage;
