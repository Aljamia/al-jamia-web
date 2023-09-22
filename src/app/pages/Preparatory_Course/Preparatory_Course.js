"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Application_form from "@/app/components/Application_form/Application_form";

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
                    data-aos="fade-up">
                    Preparatory Course Admission
                  </div>
                  <p className="AboutUspage-mission-desc pt-2" data-aos="fade-up">
                    The Preparatory Course is a three-year program that
                    encompasses the Al Jamia syllabus with a strong focus on
                    Arabic and English language proficiency. It also covers
                    fundamental Islamic knowledge, including the study of the
                    Hadith, Fiqh, Islamic History, and Aqeedah. Additionally, it
                    aligns with the Kerala Government Examination Board (SCHOL)
                    Plus Tow Humanities curriculum.{" "}
                  </p>

                  <div
                    class="AboutUspage-mission-title"
                    id="our-mission-header"
                    data-aos="fade-up">
                    <h1 class="Courses_Head">Admission Requirements</h1>
                  </div>
                  <p data-aos="fade-up">
                    Those who pass the Al Jamia entrance test will be invited
                    for an interview. Selection of candidates will be based on
                    their performance in the interview as well as their SSLC
                    (Secondary School Leaving Certificate) marks. Additionally,
                    selected candidates are required to submit their SSLC
                    certificate and Transfer Certificate (TC) from their
                    previous school.
                  </p>

                  <div
                    class="AboutUspage-mission-title"
                    id="our-mission-header"
                    data-aos="fade-up" >
                    <h1 class="Courses_Head">Fees structure </h1>
                  </div>
                  <p data-aos="fade-up">
                    The annual fee for each student is Rs 50,000, which covers
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

        <Footer />
      </div>
    );
  }
}

export default Preparatory_Course;
