"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Student_Counseling_Service_main() {
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
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={12} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image unoptimized={true}
          unselectable={true}
                      src="/banner/Student_CounselingService.png"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                      style={{height:"auto",width:"100%"}}
                    />
                  </div>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Student Counselling Service
                  </div>
                  <p className="AboutUspage-mission-desc">
                    With the help of the Dean of Students Affairs, Al Jamia
                    provides its students with a variety of counseling and
                    psychological services and over all skill development. These
                    services include individual and group counselling that help
                    students to overcome challenges that affect their success.
                    The aim of this service is to promote personal well‐being
                    and self‐development of the students, and to help them
                    adjust to the demands of Al Jamia life. .
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
    );
  }
}

export default Student_Counseling_Service_main;
