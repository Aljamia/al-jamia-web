/* eslint-disable react/no-unescaped-entities */
"use client";
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
              className="nav-logo "
            />

            {/* cssanimation hu__hu__ sequence */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto py-4 py-md-0">
              <Nav.Link href="/" className="pl-4 pl-md-0 ml-0 ml-md-4 active">
                Home
              </Nav.Link>

              <NavDropdown
                title="About"
                to="/about"
                id="about-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "about"}
              >
                <NavDropdown.Item href="/about">
                  Al Jamia Al Islamiya
                </NavDropdown.Item>
                <NavDropdown.Item href="/about#Director_message">
                  Rector's Message
                </NavDropdown.Item>
                <NavDropdown.Item href="/about#Visionpage">
                  Vision & Mission
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/Missionpage">
                  Our Mission
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/Organizational_structure">
                  Organizational Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Recognition_MOU">
                  Recognition & MOU
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
                <NavDropdown.Item href="/colleges#Centre_for_it">
                  Centre for Information Technology
                </NavDropdown.Item>
                <NavDropdown.Item href="/colleges#Centre_for_research">
                  Centre for Research & Academic Excellence
                </NavDropdown.Item>
                <NavDropdown.Item href="/colleges#Centre_for_hr">
                  Centre for Human Resource Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/Activities_Centre">
                  Al Jamia Students Activities Centre
                </NavDropdown.Item>

                <NavDropdown.Item href="/Online_Program">
                  Al Jamia World Campus (Online Program)
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/Research_Academic">
                  Al Jamia Centre for Research & Academic Excellence
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/faculties">
                  Our Faculties
                </NavDropdown.Item>
                <NavDropdown.Item href="/colleges#Students_Council">
                  Students Council
                </NavDropdown.Item>
                <NavDropdown.Item href="/OffCampus">
                  Off-Campus
                </NavDropdown.Item>
                <NavDropdown.Item href="/AljamiaArts_Science">
                  Aljamia Arts & Science College
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/Studentrecognition"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
              >
                Gallery
              </Nav.Link>
              <NavDropdown
                title="Library"
                id="basic-nav-dropdown"
                className="pl-4 pl-md-0 ml-0 ml-md-4"
                onMouseEnter={() => handleDropdownEnter("The Library")}
                onMouseLeave={handleDropdownLeave}
                show={hovered === "The Library"}
              >
                <NavDropdown.Item href="/centralibrary#centralibrary">
                  Central Libary{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/centralibrary#Digitallibrary">
                  Digital Library
                </NavDropdown.Item>
                <NavDropdown.Item href="/centralibrary#New_Arrivals">
                  New Arrivals
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
                {/* <NavDropdown.Item href="/Student_Counseling_Service">
                  Student Counseling Service
              </NavDropdown.Item> */}
                <NavDropdown.Item href="/Student_Housing">
                  Student Housing
                </NavDropdown.Item>
                <NavDropdown.Item href="/Student_Life_Services">
                  Student Life & Services
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/Student_Representative_Board">
                  Student Representative Board
                </NavDropdown.Item> */}
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
                <NavDropdown.Item href="/Publications_books">
                  Our Publications
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
              <Nav.Link className="pl-1 pl-md-0 ml-0 ml-md-1"></Nav.Link>

              <Nav.Link href="/" className="pl-4 pl-md-0 ml-0 ml-md-4">
                <div className="sl-nav">
                  <ul>
                    <li>
                      EN
                      <div className="triangle"></div>
                      <ul>
                        <li>
                          <span>العربية</span>
                        </li>
                        <li>
                          <span>Urdu</span>
                        </li>
                        <li>
                          <span className="active">English</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Main_navebar;
