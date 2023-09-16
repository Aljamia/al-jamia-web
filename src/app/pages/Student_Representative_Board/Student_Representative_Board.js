"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Student_Representative_Board() {
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
            src="/image 7.png"
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
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Student Representative Board
                  </div>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                      <div className="timeline__event__icon "></div>
                      <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                          Grievance Cell
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            Grievance Cell is an appellate body to hear and
                            redress students’ grievances and complaints
                            regarding to academic and non‐academic matters.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                      <div className="timeline__event__icon "></div>
                      <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                          Anti‐Ragging & Anti‐Harassment Cell
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            As per the recommendations of the UGC, Al Jamia has
                            formed a committee to monitor and curb the menace of
                            ragging and harassment in the Institution. Students
                            may contact any of the members in the event of any
                            incident of ragging.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Student_Representative_Board;
