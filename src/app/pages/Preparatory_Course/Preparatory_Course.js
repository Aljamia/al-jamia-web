"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
function Preparatory_Course() {
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
          <Image unoptimized={true}
          unselectable={true}
            src="/banner/Preparatory_Course13.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
            style={{height:"50%",width:"100%"}}
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
                    Preparatory Course Admission
                  </div>
                  <p className="AboutUspage-mission-desc pt-2">
                    The Preparatory Course is a three-year program that
                    encompasses the Al Jamia syllabus with a strong focus on
                    Arabic and English language proficiency. It also covers
                    fundamental Islamic knowledge, including the study of the
                    Hadith, Fiqh, Islamic History, and Aqeedah. Additionally, it
                    aligns with the Kerala Government Examination Board (SCHOL)
                    Plus Tow Humanities curriculum.
                  </p>

                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">Admission Requirements</h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Those who pass the Al Jamia entrance test will be invited
                    for an interview. Selection of candidates will be based on
                    their performance in the interview as well as their SSLC
                    (Secondary School Leaving Certificate) marks. Additionally,
                    selected candidates are required to submit their SSLC
                    certificate and Transfer Certificate (TC) from their
                    previous school.
                  </p>

                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">Fees structure </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The annual fee for each student is Rs 50,000 which covers
                    food, lodging, and tuition fees. Newly admitted students are
                    also required to pay a separate admission fee of Rs 5,000.
                    For the convenience of students, those who are unable to
                    make the full payment at once have the option to pay in four
                    installments.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="mt-3 p-3">
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <div className="btn btn_center">
                  {" "}
                  <Link
                    href="https://aljamia.campus7.in/application_form/ALJ"
                    target="_blank"
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {" "}
                      <div className="icon_arrow_abt">
                        <span className="p-3">Apply Now</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                          <path
                            d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                            fill="#619A46"
                          />
                        </svg>
                      </div>{" "}
                    </motion.button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Preparatory_Course;
