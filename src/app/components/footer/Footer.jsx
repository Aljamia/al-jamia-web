import React, { useState, useEffect } from "react";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  <div
    className={`back-to-top ${isVisible ? "visible" : ""}`}
    onClick={scrollToTop}
  >
    <i className="fa fa-chevron-up"></i>
  </div>;

  return (
    <div className="footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <Image
                src="/aljamiya_logo.png"
                width={350}
                height={80}
                alt="Picture of the author"
                className="footer-logo"
              />
              <div className="footer-about">
                <p>
                  Al Jamia Arts and Science College (AJAS), a resourceful
                  destination for higher studies in the region, was established
                  in 2010 with the main objective of uplifting the educationally
                  developing Muslims and other communities.
                </p>{" "}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 pt-4">
              <div className="useful-link">
                <h2>Useful Links</h2>
                <div className="use-links">
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-angles-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/about">
                      <i className="fa-solid fa-angles-right"></i> Al Jamia Al
                      Islamiya
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/Career">
                      <i className="fa-solid fa-angles-right"></i> Career
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/colleges">
                      <i className="fa-solid fa-angles-right"></i> Colleges
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/Alumni">
                      <i className="fa-solid fa-angles-right"></i> Alumni
                      Chapters
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/contact">
                      <i className="fa-solid fa-angles-right"></i> Contact Us
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-2  pt-4">
              <div className="social-links">
                <h2>Follow Us</h2>
                <div className="social-icons">
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i> Linkedin
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://play.google.com/store/apps/details?id=in.ixian.campus7.aljamia.student&pcampaignid=web_share"
                      target="blank"
                    >
                      <i className="fa-solid fa-angles-right"></i> Playstore
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4  pt-4">
              <div className="address">
                <h2>Address</h2>
                <div className="address-links">
                  <li className="address1">
                    <i className="fa-solid fa-location-dot"></i> AL JAMIA AL
                    ISLAMIYA SANTHAPURAM P.O. PATTIKKAD –679 325 MALAPPURAM
                    DISTRICT, KERALA – INDIA.
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-phone"></i> 00914933 – 270439 -
                      00914933 – 270565
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-envelope"></i> mail@aljamia.net
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copy-right">
        <div className="copy-right-sec">
          <p className="footer-copyright pt-3">
            © 2023 Al Jamia Al Islamiya{" "}
            <Link
              href="/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Privacy{" "}
            </Link>{" "}
            | Powered by
            <Link
              href="https://datahex.in/"
              className="datahex-link"
              target="blank"
            >
              DataHex
            </Link>
          </p>
        </div>
      </section>

      <div
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa fa-chevron-up"></i>
      </div>

      {/*       
      <Container className="footer-contents">
        <Row>
          <Col lg={6}>
            <div>
              <Image
                src="/aljamiya_logo.png"
                width={350}
                height={80}
                alt="Picture of the author"
                className="footer-logo"
              />
              <p className="footer-desc">
                Al Jamia Arts and Science College (AJAS), a resourceful
                destination for higher studies in the region, was established in
                2010 with the main objective of uplifting the educationally
                developing Muslims and other communities.
              </p>
            </div>
          </Col>
        
          <Col lg={6}>
            <div className="footer-contact">
              <h2>Contact</h2>
              <p>
                <span className="">
                  <FaPhone />{" "}
                </span>
                00914933 – 270439 - 00914933 – 270565
              </p>

              <p>
                <span>
                  {" "}
                  <FaEnvelope />
                </span>{" "}
                mail@aljamia.net
              </p>
              <p className="footer-location">
                <span>
                  {" "}
                  <FaLocationDot />
                </span>
                AL JAMIA AL ISLAMIYA SANTHAPURAM P.O.
              </p>
              <p className="footer-address">
                {" "}
                PATTIKKAD –679 325 MALAPPURAM DISTRICT, KERALA – INDIA.{" "}
              </p>
            </div>
          </Col>
        </Row>

        <hr className="footer-line" />
      </Container>

      <div className="footer-end">
        <Container>
          <Row>
            <Col xs={12} lg={6} sm={12}>
              <p className="footer-copyright">
                © 2023 Al Jamia Al Islamiya{" "}
                <Link
                  href="/"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Privacy{" "}
                </Link>{" "}
                | Powered by
                <Link
                  href="https://datahex.in/"
                  className="datahex-link"
                  target="blank"
                >
                  DataHex
                </Link>
              </p>
            </Col>
            <Col xs={12} lg={6} sm={12} className="footer-social-icons">
              <span>
                <Link href="/" className="footer-social-icons-list">
                  <FaFacebook />
                </Link>
              </span>
              <span>
                <Link href="/" className="footer-social-icons-list">
                  <FaTwitter />
                </Link>
              </span>
              <span>
                <Link href="/" className="footer-social-icons-list">
                  <FaInstagram />
                </Link>
              </span>
              <span>
                <Link href="/" className="footer-social-icons-list">
                  <FaLinkedin />
                </Link>
              </span>
            </Col>
          </Row>
        </Container> */}
    </div>
  );
};

export default Footer;
