"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Recognition_MOU() {
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
            src="/banner/WorldCampus.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <div>
          <div className="AboutUspage-items center_div">
            <div className="AboutUspage-ourMission Recognition_img Recognitionhead">
              <Container>
                <Row>
                  <Col xl={12} lg={12} xs={12}>
                    <div
                      className="AboutUspage-mission-title"
                      id="our-mission-header"
                    >
                      Recognition & MOU
                    </div>
                    <p className="AboutUspage-mission-desc">
                      Al Jamia Al Islamiya holds prestigious recognition for its
                      commitment to excellence in Islamic education. Our
                      institution has established Memorandums of Understanding
                      (MOUs) with esteemed Int’l universities and research
                      organizations globally. These collaborations serve as a
                      testament to our dedication to fostering academic
                      partnerships and expanding our horizons in the pursuit of
                      knowledge and enlightenment. Through these MOUs, we aim to
                      advance our academic programs, research endeavors, and
                      global outreach, enhancing the educational experience for
                      our students and strengthening our position as a leader in
                      Islamic education.
                    </p>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Al-Imam Mohammad bin Saud Islamic University,Riyadh.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="p-3">
                          Al-Imam Mohammad bin Saud Islamic <br />
                          University Riyadh
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/International Islamic University, Malaysia.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          International Islamic University <br /> Malaysia
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Hamad Bin Khalifa University, Qatar.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Hamad Bin Khalifa University <br /> Qatar
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Fatih Sultan Mehmet Foundation University,Turkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Fatih Sultan Mehmet Foundation
                          <br /> University Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Ataturk University,Erzurum, turkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Ataturk University,Erzurum <br /> Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Kuwait University.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Kuwait <br /> University <br />{" "}
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Istanbul Sabahattin Zaim UniversityTurkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Istanbul Sabahattin Zaim University <br /> Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Qatar University.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Qatar <br /> University
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div className="card">
                      <Image
                        src="/banner/Selcuk University,Turkey.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div className="card-content">
                        <h1 className="app_head p-3">
                          Selcuk University <br /> Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Recognition_MOU;
