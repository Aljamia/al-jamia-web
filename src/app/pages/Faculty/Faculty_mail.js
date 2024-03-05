"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Faculty_mail() {
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
        <Container>
          <Row>
            <Col xl={12} lg={12} xs={12}>
              <div className="AboutUspage-mission-img">
                <Image unoptimized={true}
          unselectable={true}
                  src="/faculty image.jpg"
                  width={600}
                  height={330}
                  alt="Image"
                  className="AboutUspage-vision-img2 faculty-img"
                />
              </div>
            </Col>

            <Col xl={12} lg={12} xs={12}>
              <div
                className="AboutUspage-mission-title"
                id="our-mission-header"
              >
                Faculty
              </div>
              <p className="AboutUspage-mission-desc">
                Al Jamia ensures that its teaching environment is the highest
                standard and selects qualified and experienced academics to its
                faculty which include PhD holders from various National and
                International universities. Visiting professors from the reputed
                universities outside India also bring added expertise to
                students’ academic experience.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Faculty_mail;
