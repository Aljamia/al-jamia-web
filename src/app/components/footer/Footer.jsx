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
          <Col lg={4}>
            <div>
              <Image
                src="/image 5.png"
                width={300}
                height={80}
                alt="Picture of the author"
                className="footer-logo"
              />
              <p className="footer-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid reprehenderit fugit vitae provident dolorem magnam
                tempore modi debitis laboriosam? Tenetur aliquid fuga voluptates
                asperiores reiciendis? Eligendi, deserunt! Sit, exercitationem
                sunt.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footer-nav">
              <Link href="/" className="footer-links">
                <h5>Home</h5>
              </Link>
              <Link href="/contact" className="footer-links">
                <h5>Academics</h5>
              </Link>
              <Link href="/academics" className="footer-links">
                <h5>Examinations</h5>
              </Link>
              <Link href="/admissions" className="footer-links">
                <h5>Admissions</h5>
              </Link>
              <Link href="/admissions" className="footer-links">
                <h5>Contact</h5>
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footer-contact">
              <h2>Contact</h2>
              <p>
                <FaPhone /> 00914933 – 270439
              </p>
              <p className="footer-number"> 00914933 – 270565</p>

              <p>
                <FaEnvelope /> mail@aljamia.net
              </p>
              <p className="footer-location">
                <FaLocationDot />
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
            <Col xs={12} lg={6}>
              <p className="footer-copyright">
                © 2023 al jamia All Rights Reserved Privacy Policy
              </p>
            </Col>
            <Col xs={12} lg={6} className="footer-social-icons">
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
