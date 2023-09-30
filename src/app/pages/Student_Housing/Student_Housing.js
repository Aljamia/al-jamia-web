"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Student_Housing() {
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
            src="/banner/Hostels1.png"
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
                    Student Housing
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Most of the Students attending Al Jamia stay at Student
                    Housing. The University provides a safe and secure
                    environment for students to enjoy their academic experience
                    away from home. Rooms are furnished and offer comfortable
                    and practical living space for all students. At present,
                    there are 7 Students Housing, 5 for male and 2 for female.
                  </p>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                      <div className="timeline__event__icon "></div>
                      <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                          University Textbooks
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            Al Jamia provides the text books for the faculty and
                            students to support course curriculum. As part of a
                            university, wide initiative to boost learning skill,
                            all students get the required text books from the
                            Book Store.{" "}
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
                          Copying & Printing
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            Al Jamia provides copying, printing and scanning
                            services at affordable prices at the Administrative
                            Build ing, which is available for students and
                            staff.{" "}
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
                          Student ID Card
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            The Student ID Card is used mainly in the campus as
                            an identification and for other important purposes,
                            such as: accessing the University facilities,
                            borrowing books from the library and attending
                            examinatio ns.{" "}
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
                          Auxiliary Services
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            Al Jamia providesThe student Auxiliary services
                            section provides Internet Lounges in the Student
                            Activities Buildings.
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
                          Stationary Store
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            The stationary store offers a diverse selection of
                            stationery, classroom supplies, study materials, as
                            well as books in both Arabic and English.
                            Additionally, it provides internet services for
                            essential document printing and scanning.
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
                        <div className="timeline__event__title">Masjids</div>
                        <div className="timeline__event__description">
                          <p>
                            There are two Masjids in Al Jamia campus. The
                            students are directed to attend the mandatory
                            prayers on time in mosques.
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
                          Security & Safety
                        </div>
                        <div className="timeline__event__description">
                          <p>
                            Al Jamia aims to provide a safe and secure work and
                            study environment. Al Jamia Security is in operation
                            24‐hours‐a‐day, 7‐days‐a‐week to ensure that all
                            students, staff, and faculty are safe.
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
                        <div className="timeline__event__title">First Aid</div>
                        <div className="timeline__event__description">
                          <p>
                            Al Jamia provides first aid facilities to students
                            to promote healthy and wellness. It assures a well‐
                            equipped sick room with trained volunteers.
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

export default Student_Housing;
