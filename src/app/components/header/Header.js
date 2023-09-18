import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../pages/Main_navebar/Main_navebar.css";
import "../../pages/Main_navebar/Nave_Bootstrap.css";
import Image from "next/image";

function Main_navebar() {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hovered, setHovered] = useState(null); // Track which dropdown is hovered

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownEnter = (eventKey) => {
    setHovered(eventKey);
  };

  const handleDropdownLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <div
        className={`start-style ${scrolling ? "scroll-on" : ""} ${
          darkMode ? "dark" : ""
        }`}
      ></div>

      <Navbar
        className={`navigation-wrap bg-light start-header start-style ${
          scrolling ? "scroll-on" : ""
        }`}
        expand="md"
      >
        <div className="container">
          <Navbar.Brand href="/">
            <Image
              src="/al_jamia_logo.png"
              width={350}
              height={80}
              alt="Picture of the author"
              className="nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto py-4 py-md-0">
              <Nav.Link href="/" className="pl-4 pl-md-0 ml-0 ml-md-4 active">
                Home
              </Nav.Link>

              <NavDropdown
                title="About"
                id="about-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "about"}
              >
                <NavDropdown.Item href="/about">
                  Al Jamia Al Islamiya
                </NavDropdown.Item>
                <NavDropdown.Item href="/Director_message">
                  Rectors welcome Message
                </NavDropdown.Item>
                <NavDropdown.Item href="/Visionpage">
                  Our Vision
                </NavDropdown.Item>
                <NavDropdown.Item href="/Missionpage">
                  Our Mission
                </NavDropdown.Item>
                <NavDropdown.Item href="/Organizational_structure">
                  Organizational Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Career">Career</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Academics"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("Academics")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "Academics"}
              >
                <NavDropdown.Item href="/colleges">Colleges</NavDropdown.Item>
                <NavDropdown.Item href="/Centre_for_it">
                  Centre for Information Technology
                </NavDropdown.Item>
                <NavDropdown.Item href="/Centre_for_hr">
                  Centre for Human Resource Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/Centre_for_research">
                  Centre for Research & Academic Excellence
                </NavDropdown.Item>
                <NavDropdown.Item href="/Faculty">Faculty</NavDropdown.Item>
                <NavDropdown.Item href="/Activities_Centre">
                  Al Jamia Students Activities Centre
                </NavDropdown.Item>
                <NavDropdown.Item href="/Online_Program">
                  Al Jamia World Campus (Online Program)
                </NavDropdown.Item>
                <NavDropdown.Item href="/Research_Academic">
                  Al Jamia Centre for Research & Academic Excellence
                </NavDropdown.Item>
                <NavDropdown.Item href="/Students_Council">
                  Students Council
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="The Library"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("The Library")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "The Library"}
              >
                <NavDropdown.Item href="/centralibrary">
                  Digital Library
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/">Catalogue</NavDropdown.Item>
                <NavDropdown.Item href="/">New Arrivals</NavDropdown.Item>
                <NavDropdown.Item href="/">Library Service</NavDropdown.Item>
                <NavDropdown.Item href="/">Donate Books</NavDropdown.Item>
                <NavDropdown.Item href="/">Heritage</NavDropdown.Item>
                <NavDropdown.Item href="/">Gallery</NavDropdown.Item> */}
              </NavDropdown>

              <NavDropdown
                title="Admissions"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("Admissions")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "Admissions"}
              >
                {" "}
                <NavDropdown.Item href="/Preparatory_Course">
                  Preparatory Course Admission
                </NavDropdown.Item>
                <NavDropdown.Item href="/Under_Graduate">
                  Under Graduate Admission
                </NavDropdown.Item>
                <NavDropdown.Item href="/Post_Graduate">
                  Post Graduate Admission
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Students Life"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("Students Life")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "Students Life"}
              >
                {" "}
                <NavDropdown.Item href="/Student_Development">
                  Student Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/Student_Counseling_Service">
                  Student Counseling Service
                </NavDropdown.Item>
                <NavDropdown.Item href="/Students_Centre">
                  Students Centre
                </NavDropdown.Item>
                <NavDropdown.Item href="/Student_Housing">
                  Student Housing
                </NavDropdown.Item>
                <NavDropdown.Item href="/Student_Life_Services">
                  Student Life & Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/Student_Representative_Board">
                  Student Representative Board
                </NavDropdown.Item>
                <NavDropdown.Item href="/Our_Facilities">
                  Our Facilities and General Service
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Alumni"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("Alumni")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "Alumni"}
              >
                {" "}
                <NavDropdown.Item href="/Alumni">
                  Alumni Chapters
                </NavDropdown.Item>
                <NavDropdown.Item href="/Recognition_Awards">
                  Recognition & Awards
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://docs.google.com/forms/d/e/1FAIpQLSct13Xcjv43IXJqJyH309IAzfEje8Viw4CgtNteNP6oa6FNWA/viewform"
                  target="blank"
                >
                  Alumni Membership
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact" className="pl-4 pl-md-0 ml-0 ml-md-4">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Main_navebar;
