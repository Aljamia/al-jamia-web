import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Department.css";
import Link from "next/link";
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
      <div className="department-section">
        <div className="container">
          <div className="row">
            <div className="department-heading">
              <h1>Department</h1>
            </div>
            <div className="department-para">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur consequuntur deserunt dolorum qui itaque aliquid hic
                labore, aut illum expedita reiciendis blanditiis quibusdam rerum
                pariatur consequatur optio ullam recusandae sequi?Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Tenetur
                consequuntur deserunt dolorum qui itaque aliquid hic labore, aut
                illum expedita reiciendis blanditiis quibusdam rerum pariatur
                consequatur optio ullam recusandae sequi?
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-2">
          <Slider {...settings}>
            {cardValues.map((department) => (
              <div className="box" key={department.id}>
                <div className="caro-img">
                  <img src="book.png" alt="" />
                </div>
                <div className="caro-des">
                  <h4>{department.description.substring(0, 30)}</h4>
                  <div className="caro-btn">
                    <button onClick={() => handleShow(department)}>
                      Learn More
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
