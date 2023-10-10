/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import "./academics.css";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Courses from "@/app/components/ourCourses/Courses";
import Library from "@/app/components/Events/Library";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";

const Academics = () => {
  return (
    <div>
      <PageHeader />

      <div className="AboutUspage-img">
        <Image
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <div>
        <Container>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              {/* <div className="AboutUspage-mission-img pt-5">
                <Image
                  src="/academics.png"
                  layout="responsive" // Use layout="responsive" for responsiveness
                  width={500} // Provide the width of the image
                  height={800} // Adjust the height as needed to make it taller
                  alt="Image"
                  objectFit="cover"
                />
              </div> */}
            </Col>
            <Col xl={6} lg={6} xs={12} className="Academicsstyle">
              <div className="Colleges_div_bg">
                <h1>Colleges</h1>
                <p>
                  Al Jamia offers excellent academic programs with
                  specializations designed to address the needs of both the
                  nation and society. These programs encompass the Preparatory
                  Program, Bachelor's Programs, Master's Programs, Diplomas, and
                  Certificates.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Courses />

        <div className="PreparatoryStyle">
          <h4 className="PreparatoryH4">Preparatory Programme</h4>
          <h2 className="PreparatoryH2">
            Handshake infographic mass market <br /> crowdfunding iteration.
          </h2>

          <Container>
            <Row>
              <Col xl={3} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/chrd.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                  />

                  <p className="PreparatoryTittle">CHRD</p>
                  <div className="right-learn-btn">
                    <button className="event-btn-right">Read More</button>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/chrd.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                  />

                  <p className="PreparatoryTittle">Registration</p>
                  <div className="right-learn-btn">
                    <button className="event-btn-right">Read More</button>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/Registration.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                  />

                  <p className="PreparatoryTittle">Online Programmes</p>
                  <div className="right-learn-btn">
                    <button className="event-btn-right">Read More</button>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/Online.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                  />
                  <p className="PreparatoryTittle">Research</p>
                  <div className="right-learn-btn">
                    <button className="event-btn-right">Read More</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Library />
        <Footer />
      </div>
    </div>
  );
};

export default Academics;
