import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import "./PageHeader.css";

const PageHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar-fixed-top");
      if (nav) {
        nav.classList.toggle(
          "scrolled",
          document.documentElement.scrollTop > 500
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <Navbar
          expand="lg"
          className="bg-body-tertiary navbar navbar-fixed-top"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#">
              <Image
                src="/image 5.png"
                width={350}
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
    </div>
  );
};

export default PageHeader;
