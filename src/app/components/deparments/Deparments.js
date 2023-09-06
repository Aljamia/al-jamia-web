import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Card, Modal } from "react-bootstrap";
const Departments = () => {
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);
  const [cardValues, setCardValues] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://aljamia-hgtgv.ondigitalocean.app/api/v1/department")
      .then((response) => {
        setCardValues(response.data?.response);
        console.log("department data", response.data?.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // ... (the rest of your settings and useEffect code)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Add this property to enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className="department-section">
        <div className="container">
          <div className="row">
            <div className="about-Title">
              <h1>Department</h1>
            </div>
            <div className="about-description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur consequuntur deserunt dolorum qui itaque aliquid hic
                labore, aut illum expedita reiciendis blanditiis quibusdam rerum
                pariatur consequatur optio ullam recusandae sequi?Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Tenetur
                consequuntur deserunt dolorum qui itaque aliquid hic labore, aut
                illum expedita reiciendis blanditiis quibusdam rerum pariatur
                consequatur optio ullam recusandae sequi?
              </p>{" "}
            </div>
          </div>{" "}
          <Slider {...settings}>
            {cardValues.map((department) => (
              <div className="box" key={department.id}>
                <div className="caro-img">
                  <img src="book.png" alt="" />
                </div>
                <div className="caro-items">
                  <h4 className="caro-des">{department.courseName}</h4>
                  <p className="caro-paragraph">
                    {department.description.substring(0, 110)}
                  </p>
                  <div className="caro-btn">
                    <button onClick={() => handleShow(department)}>
                      More Details
                    </button>

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
                              {/* <Card.Img
                                variant="top"
                                className="course-card-modalimages"
                                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${modalVal?.image}`}
                              /> */}
                            </Card>
                          </Col>
                          <Col xl={6} xs={12} sm={12}>
                            <Card.Title className="course-cardmodal-title">
                              {modalVal?.courseName}
                            </Card.Title>

                            <Card.Text className="course-cardmodal-text">
                              {modalVal?.description}
                            </Card.Text>
                          </Col>
                        </Row>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Departments;

// -----------------------------------------
