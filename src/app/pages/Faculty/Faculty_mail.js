"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
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
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12} data-aos="fade-right">
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

                <Col xl={6} lg={6} xs={12} data-aos="fade-left">
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Faculty
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Al Jamia ensures that its teaching environment is the
                    highest standard and selects qualified and experienced
                    academics to its faculty which include PhD holders from
                    various National and International universities. Visiting
                    professors from the reputed universities outside India also
                    bring added expertise to students’ academic experience.
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

export default Faculty_mail;
