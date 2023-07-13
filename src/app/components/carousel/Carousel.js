import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <div>
      <div className="header">
        {/* <navbar-start> */}
        <div className="navbar-header">
          <Navbar expand="lg" className="bg-body-tertiary navbar" fixed="top">
            <Container>
              <Navbar.Brand href="#">
                <Image
                  src="/image 5.png"
                  width={250}
                  height={80}
                  alt="Picture of the author"
                  className="nav-logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="navbar-toggler-white"
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0 nav-carousel">
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Home
                  </Nav.Link>
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Academics
                  </Nav.Link>
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Admission
                  </Nav.Link>
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Examination
                  </Nav.Link>
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Event
                  </Nav.Link>
                  <Nav.Link href="" className="nav-links nav-link-black">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* </navbar-end> */}
        <div className="carousel-header">
          <Carousel controls={false} className="carousel">
            <Carousel.Item interval={1000}>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="First slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption ">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="Second slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="Third slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
