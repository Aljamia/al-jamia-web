"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Students_Council_main() {
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
                <Image
                  src="/banner/Students_Council2.png"
                  layout="responsive" // Use layout="responsive" for responsiveness
                  width={500} // Provide the width of the image
                  height={800} // Adjust the height as needed to make it taller
                  alt="Image"
                  objectFit="cover"
                  className="AboutUspage-vision-img2"
                />
              </div>
            </Col>

            <Col xl={12} lg={12} xs={12} id="Students_Council">
              <div
                className="AboutUspage-mission-title"
                id="our-mission-header"
              >
                Students Council
              </div>
              <p className="AboutUspage-mission-desc">
                Students Council is a committee consists of Al Jamia Authority
                and Students representatives whic h discusses the matters
                regarding academics and other activities in Al Jamia.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Students_Council_main;
