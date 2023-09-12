import { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import "./PageHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PageHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar-fixed-top");
      if (nav) {
        nav.classList.toggle(
          "scrolled",
          document.documentElement.scrollTop > 100
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
                <Nav.Link href="/" className="nav-links nav-link-black">
                  Home
                </Nav.Link>
            

<nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/" className="nav-links nav-link-black">
                      About{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/about">
                            {" "}
                            <h5>Al Jamia Al Islamiya</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Director_message">
                            {" "}
                            <h5>Rectors welcome Message </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Visionpage">
                            {" "}
                            <h5>
                            Our Vision
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Missionpage">
                            {" "}
                            <h5>
                            Our Mission
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Organizational_structure">
                            {" "}
                            <h5>
                            Organizational Structure
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                      </ul>
                    </li>
                  </ul>
                </nav>




                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/Academics" className="nav-links nav-link-black">
                      Academics{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Centre_for_it">
                            {" "}
                            <h5>Colleges</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Centre_for_it">
                            {" "}
                            <h5>Centre for Information Technology </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Centre_for_hr">
                            {" "}
                            <h5>
                            Centre for Human Resource Development
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Centre_for_research">
                            {" "}
                            <h5>
                            Centre for Research & Academic Excellence
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Faculty">
                            {" "}
                            <h5>
                            Faculty
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Activities_Centre">
                            {" "}
                            <h5>
                            Al Jamia Students’ Activities Centre 
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Online_Program">
                            {" "}
                            <h5>
                            Al Jamia World Campus (Online Program)
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Research_Academic">
                            {" "}
                            <h5>
                            Al Jamia Centre for Research & Academic Excellence
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Students_Council">
                            {" "}
                            <h5>
                            Students Council
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                      </ul>
                    </li>
                  </ul>
                </nav>


                


                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/centralibrary" className="nav-links nav-link-black">
                      The Library{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/centralibrary">
                            {" "}
                            <h5>Digital Library </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>Catalogue</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            New Arrivals
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Library Service
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Donate Books
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Al Jamia Students’ Activities Centre 
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Heritage
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Gallery
                            </h5>{" "}
                          </Nav.Link>
                        </li>

                      
                      </ul>
                    </li>
                  </ul>
                </nav>

                
                


                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/" className="nav-links nav-link-black">
                      Admissions{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Preparatory_Course">
                            {" "}
                            <h5>Preparatory Course Admission</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Under_Graduate">
                            {" "}
                            <h5>Under Graduate Admission</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/Post_Graduate">
                            {" "}
                            <h5>
                            Post Graduate Admission
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>

                
                
                


                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/" className="nav-links nav-link-black">
                      Students Life{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>Student Development</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>Student Counseling Service</h5>{" "}
                          </Nav.Link>
                        </li>
                      
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Students Centre
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Student Housing
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Student Life & Services
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Student Representative Board
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>
                            Our Facilities and General Service
                            </h5>{" "}
                          </Nav.Link>
                        </li>
                      
                      </ul>
                    </li>
                  </ul>
                </nav>


              
                


                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="/" className="nav-links nav-link-black">
                      Alumni{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ fontSize: "10px" }}
                        />
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>Alumni Chapters</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/">
                            {" "}
                            <h5>Recognition & Awards</h5>{" "}
                          </Nav.Link>
                        </li>
                       
                      </ul>
                    </li>
                  </ul>
                </nav>

                
                <Nav.Link href="/contact" className="nav-links nav-link-black">
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
