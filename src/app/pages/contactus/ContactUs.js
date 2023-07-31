"use client";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React from "react";
import "./Contact.css";
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

const ContactUs = () => {
  return (
    <div className="contact-header">
      <div className="contact-header-page">
        <PageHeader />
      </div>
      <div className="contact-header-items">
        <Container>
          <Row>
            <Col xl={6}>
              <div className="contact-header-left">
                <div className="contact-header-title">
                  <h1>Contact Us</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="contact-header-phone">
                  <span className="social-logo">
                    <Image
                      src="/Group 2092.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />
                  </span>
                  <span className="social-details">
                    <div>00914933 – 270439</div>
                    <div>00 914933 – 270565</div>
                  </span>
                </div>
                <div className="contact-header-mail">
                  <span className="social-logo">
                    <Image
                      src="/Group 2089.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />
                  </span>
                  <span className="social-details">
                    <div className="social-mail">
                      aljamiaalislamia@gmail.com
                    </div>
                  </span>
                </div>
                <div className="contact-header-location">
                  <span className="social-logo">
                    <Image
                      src="/Group 2090.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />
                  </span>
                  <span className="social-details">
                    <div className="social-address">
                      SANTHAPURAM , P.O. PATTIKKAD 679 325, MALAPPURAM ,KERALA{" "}
                    </div>
                  </span>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="contact-header-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.54081443219!2d76.21293589105628!3d11.009698189352825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cce05a42ee09%3A0x54f67afa3d76f84d!2sAl%20Jamia%20Arts%20and%20Science%20College!5e0!3m2!1sen!2sin!4v1690361731329!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="contact-map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-end">
        <Container>
          <Row>
            <div>
              <hr className="footer-line " />
            </div>
            <Col xs={12} lg={6} sm={12}>
              <p className="footer-copyright">
                © 2023 al jamia All Rights Reserved Privacy Policy | Powered by
                @Datahex
              </p>
            </Col>
            <Col
              xs={12}
              lg={6}
              sm={12}
              className="footer-social-icons"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
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

export default ContactUs;
