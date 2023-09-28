"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Alumni_Chapters() {
  return (
    <div className="">
      <div className="AboutUspage-ourMission">
        <Container>
          <Row>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
              rel="stylesheet"
            />

            <section>
              <h1
                className="TitleStyle center_aln pt-2 pb-2"
                data-aos="fade-up"
              >
                Alumni Chapters
              </h1>
              <p data-aos="fade-up">
                Our global network of Al Jamia alumni chapters brings together
                graduates from diverse backgrounds and generations. These
                chapters serve as platforms for networking, mentorship, and
                collaboration. Alumni connect, share experiences, and contribute
                to the growth of our institution and society at large. Join an
                alumni chapter near you to stay connected, give back, and
                continue the Al Jamia legacy
              </p>

              <Container>
                <Row>
                  <Col xl={4} lg={4} xs={12}>
                    <div>
                      <div
                        className="AboutUspage-mission-title"
                        id="our-mission-header"
                      >
                        <h2 className="Chapters_center_div"> GCC</h2>
                      </div>
                      <ul className="blog-details-list mt-30">
                        <li data-aos="fade-left">
                          <i className="icofont-tick-mark"></i>U.A.E Chapter
                        </li>
                        <li data-aos="fade-left">Qater Chapter</li>
                        <li data-aos="fade-left">Kuwait Chapter</li>
                        <li data-aos="fade-left">Oman Chapter.</li>
                        <li data-aos="fade-left">Jeddah Chapter</li>
                        <li data-aos="fade-left">Riyadh Chapter</li>
                        <li data-aos="fade-left">Dammam Chapter</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} xs={12}>
                    <div>
                      <div
                        className="AboutUspage-mission-title"
                        id="our-mission-header"
                      >
                        <h2 className="Chapters_center_div">
                          {" "}
                          District Chapters{" "}
                        </h2>
                      </div>
                      <ul className="blog-details-list mt-30">
                        <li data-aos="fade-left">
                          <i className="icofont-tick-mark"></i>
                          Thiruvananthapuram{" "}
                        </li>
                        <li data-aos="fade-left">Kollam </li>
                        <li data-aos="fade-left">Alappuzha </li>
                        <li data-aos="fade-left">Kottayam </li>
                        <li data-aos="fade-left">Eranamkulam </li>
                        <li data-aos="fade-left">Thrissure </li>
                        <li data-aos="fade-left">Palakkad</li>
                        <li data-aos="fade-left">Kannur</li>
                        <li data-aos="fade-left">Kozhikkode</li>
                      </ul>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} xs={12}>
                    <div>
                      <div
                        className="AboutUspage-mission-title"
                        id="our-mission-header"
                      >
                        <h2 className="Chapters_center_div"> Taluk Chapters</h2>
                      </div>
                      <ul className="blog-details-list mt-30">
                        <li data-aos="fade-left">
                          <i className="icofont-tick-mark"></i>Eranad{" "}
                        </li>
                        <li data-aos="fade-left">Perinthalmanna </li>
                        <li data-aos="fade-left">Nilambur </li>
                        <li data-aos="fade-left">Kondotty </li>
                        <li data-aos="fade-left">Tirurangadi </li>
                        <li data-aos="fade-left">Tirur </li>
                        <li data-aos="fade-left">Ponnani </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Alumni_Chapters;
