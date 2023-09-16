"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Centre_for_it() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);
  {
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Centre for Information Technology
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The Centre for Information Technology was established with
                    the aim of equipping students, teachers, and researchers to
                    enhance their knowledge in Information Technology. The
                    students of each faculty have separate syllabi and training
                    sessions, compatible with their academic programs. IT
                    education is mandatory for students of all programs, and
                    they have to pass the IT Examination to obtain their course
                    certificates.
                    <br />
                    <br />
                    Students need to submit their projects on their chosen topic
                    to complete the certification. Al Jamia IT Centre runs a
                    full-fledged Smart Classroom with live teaching, and two
                    general IT labs and an internet cafe.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Centre_for_it;
