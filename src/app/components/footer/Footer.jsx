import React from "react";
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
  return (
    <div className="footer">
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
          {/* <Col lg={4}>
            <div className="footer-nav">
              <Link href="/" className="footer-links">
                <h5>Home</h5>
              </Link>
              <Link href="/about" className="footer-links">
                <h5>About Us</h5>
              </Link>
              <Link href="/" className="footer-links">
                <h5>Authorities</h5>
              </Link>
              <Link href="/venture" className="footer-links">
                <h5>Ventures</h5>
              </Link>
              <Link href="/contact" className="footer-links">
                <h5>Contact</h5>
              </Link>
            </div>
          </Col> */}
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
                | Developed by
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
        </Container>
      </div>
    </div>
  );
};

export default Footer;
