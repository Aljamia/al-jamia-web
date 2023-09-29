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
                  <Col xl={12} lg={12} xs={12} data-aos="fade-left">
                    <div
                      className="AboutUspage-mission-title"
                      id="our-mission-header"
                    >
                      Recognition & MOU
                    </div>
                    <p className="AboutUspage-mission-desc">
                      Al Jamia Malda Campus is committed to serving as a
                      valuable resource in the region by conducting relevant
                      research and investing in the development of human
                      capital. The institution aims to provide value-based
                      education to all members of society, with a special
                      emphasis on bright minds from socio-economically
                      disadvantaged background.
                    </p>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Al-Imam Mohammad bin Saud Islamic University,Riyadh.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="p-3">
                          Al-Imam Mohammad bin Saud Islamic <br />
                          University Riyadh
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/International Islamic University, Malaysia.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          International Islamic University <br /> Malaysia
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Hamad Bin Khalifa University, Qatar.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          Hamad Bin Khalifa University <br /> Qatar
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Fatih Sultan Mehmet Foundation University,Turkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          Fatih Sultan Mehmet Foundation
                          <br /> University Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Ataturk University,Erzurum, turkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          Ataturk University,Erzurum <br /> Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Kuwait University.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          Kuwait <br/>  University <br />{" "}
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Istanbul Sabahattin Zaim UniversityTurkey.jpeg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
                          Istanbul Sabahattin Zaim University <br /> Turkey
                        </h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Qatar University.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">Qatar <br/>  University</h1>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} xs={12}>
                    <div class="card">
                      <Image
                        src="/banner/Selcuk University,Turkey.jpg"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="Image"
                      />
                      <div class="card-content">
                        <h1 class="app_head p-3">
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
