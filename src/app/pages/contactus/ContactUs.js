"use client";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Footer from "@/app/components/footer/Footer";

const ContactUs = () => {
  return (
    <div className="contact-header">
      <div className="contact-header-page">
        <PageHeader />
      </div>
      <div className="contact-header-items">
        <Container>
          <Row>
            <Col xl={6} data-aos="fade-right">
              <div className="contact-header-left">
                <div className="contact-header-title">
                  <h1 className="h1style">Contact us</h1>
                  <p className="pb-3">
                    Our friendly team would love to hear from you!
                    {/* Al Jamia Arts and Science College (AJAS), a resourceful
                    destination for higher studies in the region, was
                    established in 2010 with the main objective of uplifting the
                    educationally developing Muslims and other communities. */}
                  </p>
                </div>

                <form>
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline">
                        <label class="form-label" for="form6Example1">
                          First name
                        </label>

                        <input type="text" id="" class="cont_form" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline">
                        <label class="form-label" for="form6Example2">
                          Last name
                        </label>

                        <input
                          type="text"
                          id="form6Example2"
                          class="cont_form"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example5">
                      Email
                    </label>

                    <input type="email" id="form6Example5" class="cont_form" />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example6">
                      Phone
                    </label>

                    <input type="number" id="form6Example6" class="cont_form" />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form6Example4">
                      Address
                    </label>

                    <input type="text" id="form6Example4" class="cont_form" />
                  </div>

                  <button type="submit" class="send_button  mb-4">
                    Send message
                  </button>
                </form>
              </div>
            </Col>
            <Col xl={6} data-aos="fade-left">
              <div className="contact-header-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2670557627926!2d76.22156737457779!3d11.018578854681394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd2a01624cbd%3A0xacc202556b7e348d!2sAl%20Jamia%20Al%20Islamiya!5e0!3m2!1sen!2sin!4v1690781859394!5m2!1sen!2sin"
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

      <div className="pt-5">
        <Container>
          <Row>
            <Col xl={4} data-aos="zoom-in-down">
              <div className="addres_box">
                <img src="location_icon.svg" />
                <p>Santhapuram (PO). Pattikkad 673 325, Malappuram, Kerala</p>
              </div>
            </Col>
            <Col xl={4} data-aos="zoom-in-down">
              <div className="addres_box">
                <img src="mail_icon.svg" />
                <p>
                  aljamiaalislamia@gmail.com <br />
                  www.aljamiaalislamia.com{" "}
                </p>
              </div>
            </Col>
            <Col xl={4} data-aos="zoom-in-down">
              <div className="addres_box">
                <img src="call_icon.svg" />
                <p>
                  00914933 270439 ,
                  <br /> 00914933 270565{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-end mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
