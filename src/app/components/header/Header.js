import { useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import "./Header.css";

const Header = () => {
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
                <Nav.Link href="/" className="nav-links nav-link-black">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="nav-links nav-link-black">
                  About us
                </Nav.Link>

                <nav role="navigation" className="primary-navigation ">
                  <ul>
                    <li>
                      <Nav.Link href="" className="nav-links nav-link-black">
                        Authorities
                      </Nav.Link>

                      <ul className="dropdown">
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/management">
                            {" "}
                            <h5>Management</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/boardofdirector">
                            {" "}
                            <h5> Board of director</h5>{" "}
                          </Nav.Link>
                        </li>
                        <li className="nav-dropdown-links">
                          <Nav.Link href="/faculties">
                            {" "}
                            <h5> Faculties</h5>{" "}
                          </Nav.Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>

                <Nav.Link href="/venture" className="nav-links nav-link-black">
                  Ventures
                </Nav.Link>

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

export default Header;
