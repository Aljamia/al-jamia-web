/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React, { useState } from "react";
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
import { BASE_URL } from "@/app/hooks/UseApi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const postContact = async (formData) => {
    console.log(formData);
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(`${BASE_URL}/contact`, data);
      console.log(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Now you can send the form data with the updated photo
      await postContact(formData);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Form submission failed");
    }
  };

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
                  <h1 className="h1style">Contact us</h1>
                  <p className="pb-3">
                    Our friendly team would love to hear from you!
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">
                          First name
                        </label>

                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="cont_form"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="lastName">
                          Last name
                        </label>

                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="cont_form"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="cont_form"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="cont_form"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>

                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="cont_form"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="send_button  mb-4">
                    Send message
                  </button>
                </form>
              </div>
            </Col>
            <Col xl={6}>
              <div className="contact-header-map contactbox_shodo p-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2670557627926!2d76.22156737457779!3d11.018578854681394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd2a01624cbd%3A0xacc202556b7e348d!2sAl%20Jamia%20Al%20Islamiya!5e0!3m2!1sen!2sin!4v1690781859394!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
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
            <Col xl={4}>
              <div className="addres_box contactbox_shodo">
                <img src="location_icon.svg" />
                <p>
                  Santhapuram Pattikkad PO, Malappuram DT Kerala, India - 679325
                </p>
              </div>
            </Col>
            <Col xl={4}>
              <div className="addres_box contactbox_shodo">
                <img src="mail_icon.svg" />
                <p>mail@aljamia.net</p>
              </div>
            </Col>
            <Col xl={4}>
              <div className="addres_box contactbox_shodo">
                <img src="call_icon.svg" />
                <p>
                  +91 9656612612
                  <br /> +91 4933270439
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
