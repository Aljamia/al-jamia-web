"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
function Vision() {
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
      <div id="Visionpage">
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12} data-aos="fade-right">
                  <div
                    className="AboutUspage-mission-img"
                    data-aos="fade-right"
                  >
                    <Image
                      src="/banner/Vision.png"
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
                    Our Vision
                  </div>
                  <p className="AboutUspage-mission-desc">{about[0]?.vision}</p>

                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Our Mission
                  </div>
                  <p className="AboutUspage-mission-desc">
                    {/* {about[0]?.mission} */}

                    <ul className="blog-details-list mt-30">
                      <li data-aos="fade-left">
                        To produce the sufficient number of scholars competent
                        in Islamic as well as temporal branches of knowledge.
                      </li>
                      <li data-aos="fade-left">
                        To produce empowered men and women with firm faith in
                        God, capable of discharging their responsibilities in
                        the present dynamic world.
                      </li>
                      <li data-aos="fade-left">
                        To design and develop a cohesive, contextually relevant,
                        and comprehensive curriculum combining the best of the
                        old and new aspects of knowledge as practiced in
                        universities around the world.
                      </li>

                      <li data-aos="fade-left">
                        To conceive, design and conduct tailor-made courses and
                        programs for men and women to help them hone their
                        skills in the field of Islamic thought and social
                        sciences with true Islamic candour and character.
                      </li>
                    </ul>
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

export default Vision;
