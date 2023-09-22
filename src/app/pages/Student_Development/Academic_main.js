"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Academic_main() {
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
                    Academic and Career Services
                  </div>
                  <p className="AboutUspage-mission-desc">
                    In coordination with CHRD, Students Affairs Department
                    provides training and professional develo pment services and
                    helps to prepare students to engage and compete for the best
                    career opportunit ies. Additionally, the department assists
                    students with study abroad opportunities and provides numero
                    us career related resources, programs and activities.
                    <br />
                    <br />
                    The University body is comprised of 40% female and 60 % male
                    from various states of India. The number of Al Jamia alumni
                    stands more than 10,000. Al Jamia is immensely proud of its
                    distinguished graduates all over the world who are working
                    in different walks of life and serving the society in the
                    various fields. .
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

export default Academic_main;
