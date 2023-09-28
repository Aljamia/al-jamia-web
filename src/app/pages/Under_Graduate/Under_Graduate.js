"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Application_form from "@/app/components/Application_form/Application_form";

function Under_Graduate() {
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
            src="/banner/Alumni_head.jpg"
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
                    data-aos="fade-up"
                  >
                    Under Graduate Admission
                  </div>
                  <p
                    className="AboutUspage-mission-desc pt-2"
                    data-aos="fade-up"
                  >
                    After completing the preparatory course, students can pursue
                    one of two three-year degree programs:
                    <br />
                    <br />
                    Usuluddin Course: This program includes a comprehensive
                    syllabus covering subjects such as Quran, Hadith, Fiqh,
                    Aqeedah, History, Comparative Religion, Modern Ideologies,
                    Islamic Thought, and more.
                    <br />
                    <br />
                    Shariah Course: This program offers a comprehensive syllabus
                    that includes subjects such as Fiqh, Shariah, Makhasid al
                    Shariah, low, Islamic Finance, and more.
                    <br />
                    <br />
                    In these two degree-level courses, the study of Arabic,
                    English, and Urdu languages plays a prominent role.
                    Additionally, students receive special training and classes
                    to pursue courses such as BA in Arabic, English, Islamic
                    Studies, Sociology, Political Science, History, Economics,
                    etc., offered by Calicut University.
                  </p>

                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                    data-aos="fade-up"
                  >
                    <h1 className="Courses_Head">Admission Requirements</h1>
                  </div>
                  <p data-aos="fade-up">
                    Those who pass Plus Two with Arabic language can apply for
                    entrance test will be invited for an interview. Selection of
                    candidates will be based on their performance in the
                    interview. Selected candidates are required to submit their
                    SSLC certificate, Plus two mark list and Transfer
                    Certificate (TC) from their previous school.
                  </p>

                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                    data-aos="fade-up"
                  >
                    <h1 className="Courses_Head">Fees structure </h1>
                  </div>
                  <p data-aos="fade-up">
                    The annual fee for each student is Rs 50,000, which covers
                    food, lodging, and tuition fees. Newly admitted students are
                    also required to pay a separate admission fee of Rs 5,000.
                    For the convenience of students, those who are unable to
                    make the full payment at once have the option to pay in four
                    installments
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

export default Under_Graduate;
