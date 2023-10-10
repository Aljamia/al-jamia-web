"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Centre_for_hr_main() {
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
      <div id="Centre_for_hr">
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/banner/hr.jpg"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      loading="lazy"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Centre for Human Resource Development
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The Centre for Human Resource Development (CHRD) aims to
                    cultivate the pursuit of excellence in the personal and
                    professional life of individuals in every segment of
                    society. It is primarily designed to help people from all
                    walks of life discover and develop their implicit talents
                    and help them push the limits of their potential in their
                    journey to make it big in their life.
                    <br />
                    <br />
                    CHRD endeavours to give every kind of soft skill training
                    programs for people in order to empower them to take on the
                    challenges of tomorrow.
                    <br />
                    <br />
                    It strives to be an organization with a difference with
                    tailor-made programs for a cross-section of people like
                    students, teachers, mentors, community leaders, etc. It was
                    conceived as a Centre of Excellence, at Al Jamia Al
                    Islamiya. .
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Centre_for_hr_main;
