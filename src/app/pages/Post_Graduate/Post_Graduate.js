"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Application_form from "@/app/components/Application_form/Application_form";

function Post_Graduate() {
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
            src="/banner/Recognition_Awards.png"
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
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title center_div pb-3"
                    id="our-mission-header"
                  >
                    Post Graduate Admission
                  </div>

                  <Row>
                    <Col xl={6} lg={6} xs={12} data-aos="zoom-in-up">
                      <div className="what-box mt-3">
                        <h3>PG in Contemporary Islamic Fiq’h </h3>
                      </div>
                    </Col>

                    <Col xl={6} lg={6} xs={12} data-aos="zoom-in-up">
                      <div className="what-box mt-3">
                        <h3>PG in Contemporary Islamic Thought </h3>
                      </div>
                    </Col>

                    <Col xl={6} lg={6} xs={12} data-aos="zoom-in-up">
                      <div className="what-box mt-3">
                        <h3>PG in Contemporary Islamic Thought </h3>
                      </div>
                    </Col>

                    <Col xl={6} lg={6} xs={12} data-aos="zoom-in-up">
                      <div className="what-box mt-3">
                        <h3>Faculty of Languages and Translation (FOLT)</h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <Application_form />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12} data-aos="flip-down">
                  <hr />
                  <div class="center_div">
                    <p class="center_div">
                      <Nav.Link href="/Under_Graduate">
                        <h5> World Campus (Online Programs) </h5>
                      </Nav.Link>
                    </p>
                  </div>{" "}
                  <hr />
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

export default Post_Graduate;
