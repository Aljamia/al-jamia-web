import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courses.css";
import { getCourse, getFaculties, getAboutUsGallery } from "@/app/hooks/UseApi";
import { Modal } from "react-bootstrap";

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

  const fields = [
    {
      title: "Certificate",
      content: <p>The course is about a majid alsharia in al-ja mia</p>,
      styleIn: 4,
      functionName: "certificate",
    },
    {
      title: "Diploma",
      content: <p>almajia sample course page mia</p>,
      styleIn: 4,
      functionName: "diploma",
    },
    {
      title: "Short Term",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, sint.
          Aspernatur excepturi consequatur, iure incidunt ut quae sed dolore
          repellat maxime cum illum, magni pariatur delectus accusamus
          voluptate, modi magnam!
        </p>
      ),
      styleIn: 4,
      functionName: "shortTerm",
    },
  ];

  const handleClick = async (functionName) => {
    if (functionName === "certificate") {
      const data = await getFaculties();
      setCardValues(data.response);
    } else if (functionName === "diploma") {
      const data = await getAboutUsGallery();
      setCardValues(data.response);
    } else {
      const data = await getCourse();
      setCardValues(data?.response);
    }
  };

  return (
    <div className="course">
      <Container>
        <div className="course-headerpage">
          <div className="course-header">
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
                        {course.category}{" "}
                      </span>

                      <span className="course-data-duration">
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

                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                      onClick={() => handleShow(course)}
                    >
                      Read More
                    </Button>

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
                            <Card.Title className="course-cardmodal-title">
                              {modalVal?.courseName}
                            </Card.Title>
                            <Card.Text className="course-cardmodal-desc">
                              <span className="course-modal-category">
                                {modalVal?.category}{" "}
                              </span>
                              <span className="course-modal-duration">
                                {modalVal?.duration}
                              </span>
                            </Card.Text>
                            <Card.Text className="course-cardmodal-text">
                              {modalVal?.description}
                            </Card.Text>
                          </Col>
                        </Row>
                      </Modal.Body>
                    </Modal>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
