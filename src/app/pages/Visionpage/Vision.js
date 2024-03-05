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
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image unoptimized={true}
          unselectable={true}
                      src="/banner/Vision.png"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      style={{height:"80%",width:"100%"}}
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
                      <li>
                        Design and develop cohesive, contextually relevant
                        and comprehensive Islamic curriculum combining the best
                        of the old and new aspects of knowledge as practiced in
                        universities around the world.
                      </li>
                      <li>
                        To create empowered and sensitized generation who could
                        peer into the keyhole of tomorrow to build a brave new
                        world for humanity with abiding Islamic ethos, justice
                        and values.
                      </li>
                      <li>
                        To produce empowered men and women with firm faith in God,
                        capable of discharging their responsibilities rhythmically.
                      </li>
                      <li>
                        To contribute to the creation of a truly vibrant ideal society.
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
