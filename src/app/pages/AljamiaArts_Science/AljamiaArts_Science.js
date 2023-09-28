"use client";
import React, { useState, useEffect } from "react";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Alumni_Chapters from "@/app/components/Alumni_Chapters/Alumni_Chapters";

function AljamiaArts_Science() {
  const [about, setAbout] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };
    const fetchGallery = async () => {
      const data = await getAboutUsGallery();
      setGallery(data?.response);
    };
    fetchAbout();
    fetchGallery();
  }, []);
  // if (!gallery || gallery.length === 0) {
  //   return (
  //     <div className="text-left">
  //       <h6>Loading...</h6>
  //     </div>
  //   );
  // }

  return (
    <div>
      <PageHeader />

      <div className="AboutUspage-img">
        <Image
          src="/banner/AljamiaArts_Science1.png"
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
              <Col xl={12} lg={12} xs={12} data-aos="fade-up">
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header pb-2"
                >
                  Aljamia Arts & Science College
                </div>
                <p className="AboutUspage-mission-desc">
                  Al Jamia Arts and Science College (AJAS), a resourceful
                  destination for higher studies in the region, was established
                  in 2010 with the main objective of uplifting the educationally
                  developing Muslims and other communities and moulding them
                  into professionally competent, socially responsible, and
                  morally sound citizens. The college with minority status is
                  affiliated with the University of Calicut and recognised by
                  the Government of Kerala. <br /> <br />
                  The campus is situated at Poopalam, 2.5 km from Perinthalmanna
                  Town on the Perinthalmanna-Ootty road and 2 km from Pattikkad
                  railway station. It is the sister institution of Al Jamia Al
                  Islamiya, run by the Islamic Mission Trust (IMT) in
                  Santhapuram, Pattikkad Perinthalmanna. Al Jamia Arts and
                  Science College (AJAS) is a self-financing institution
                  affiliated with the University of Calicut. The college is
                  ISO-certified. The college aims to credit with the provision
                  of the best education to the learners through instilling human
                  values and inducing leadership qualities and developing
                  resolute patriotism. The institution offers ten undergraduate
                  programmes in arts, commerce, and science and two PG programs.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={4} lg={4} xs={12}>
                <div>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h2 className="Chapters_center_div"> UG programs</h2>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li data-aos="fade-left">
                      <b>B.SC </b>
                      <br />
                      Food Technology Microbiology <br />
                      Psychology Geography <br />
                      Computer Science{" "}
                    </li>
                    <li data-aos="fade-left">
                      <b>BCA</b>
                      <br />
                      B. A. English Language and Literature <br />
                      B. A. Islamic Studies <br />
                      B. Com Computer Application{" "}
                    </li>
                    <li data-aos="fade-left">
                      <b>BBA</b> <br />
                      Finance{" "}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={4} xs={12}>
                <div>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h2 className="Chapters_center_div"> PG programs</h2>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li data-aos="fade-left">M.A. Islamic Finance </li>
                    <li data-aos="fade-left">M. A. Arabic</li>
                  </ul>
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

export default AljamiaArts_Science;
