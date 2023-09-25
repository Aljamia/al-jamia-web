"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Centre_for_research_main() {
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
      <div id="Centre_for_research">
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12} data-aos="fade-right">
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Centre for Research & Academic Excellence
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The objective of the centre is to initiate and encourage
                    research in the field of religion, reform movements in
                    religion, ecology, philosophy, political science,
                    minorities, backward classes, etc. The Centre also supervise
                    the research certifications of the students, and conducts
                    academic conferences and seminars on relevant topics.
                    Excellent facilities for reference are available at the
                    Centre. A quarterly journal in Arabic, which is very popular
                    in the Arab world, and a bimonthly journal in Malayalam are
                    published under the auspices of the centre.
                  </p>
                </Col>

                <Col xl={6} lg={6} xs={12} data-aos="fade-left">
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/banner/Excellence.jpg"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default Centre_for_research_main;
