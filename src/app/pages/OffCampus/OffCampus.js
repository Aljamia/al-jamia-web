/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import World_Campus from "@/app/components/World_Campus/World_Campus";

function OffCampus() {
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
            src="/banner/OffCampus2.jpeg"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <div>
          <div className="AboutUspage-items">
            <div className="AboutUspage-ourMission">
              <Container>
                <Row>
                  <Col xl={6} lg={6} xs={12}>
                    <div className="AboutUspage-mission-img">
                      <Image
                        src="/banner/mewatnew.jpg"
                        layout="responsive" // Use layout="responsive" for responsiveness
                        width={500} // Provide the width of the image
                        height={800} // Adjust the height as needed to make it taller
                        alt="Image"
                        objectFit="cover"
                        className="AboutUspage-vision-img2"
                      />
                    </div>
                  </Col>

                  <Col xl={6} lg={6} xs={12}>
                    <div
                      className="AboutUspage-mission-title"
                      id="our-mission-header"
                    >
                      Al Jamia Mewat
                    </div>
                    <p className="AboutUspage-mission-desc">
                      Al Jamia Mewat Campus, affiliated with Al Jamia Al Islamia
                      in South India, combines Kerala 's creative educational
                      model with North India's fertile land. The institution's
                      mission is to prepare scholars, educational experts, and
                      leaders who can guide their communities and humanity using
                      true Islamic sources. They focus on holistic student
                      development, offering a two-year program for 11th and 12th
                      graders, hostel facilities for both genders, and a
                      curriculum that combines modern and traditional Islamic
                      education. Punctuality, character building, and 24-hour
                      schedules are priorities. The campus emphasizes training
                      alongside education, emphasizing intellect, character, and
                      personal development. Al Jamia Mewat Campus provides a
                      peaceful, non-urban location, offers approved courses in
                      subjects like Political Science, History, and Arabic,
                      promotes extracurricular studies with teacher-supervised
                      library hours, encourages reading newspapers and
                      magazines, and systematically develops speaking and
                      creative abilities. Proximity to New Delhi allows students
                      to benefit from scholars and experts. The campus hosts
                      literary and cultural activities, sports, and personality
                      development workshops, emphasizing positive changes in
                      moral and spiritual terms. It provides separate facilities
                      for male and female students and emphasizes intellectual
                      awareness to tackle modern challenges within an
                      Islamic context.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="AboutUspage-items">
            <div className="AboutUspage-ourMission">
              <Container>
                <Row>
                  <Col xl={6} lg={6} xs={12}>
                    <div className="AboutUspage-mission-img">
                      <Image
                        src="/banner/AlamiaMewat.jpg"
                        layout="responsive" // Use layout="responsive" for responsiveness
                        width={500} // Provide the width of the image
                        height={800} // Adjust the height as needed to make it taller
                        alt="Image"
                        objectFit="cover"
                        className="AboutUspage-vision-img2"
                      />
                    </div>
                  </Col>

                  <Col xl={6} lg={6} xs={12}>
                    <div
                      className="AboutUspage-mission-title"
                      id="our-mission-header"
                    >
                      Al Jamia Malda
                    </div>
                    <p className="AboutUspage-mission-desc">
                      Al Jamia Malda Campus is committed to serving as a
                      valuable resource in the region by conducting relevant
                      research and investing in the development of human
                      capital. The institution aims to provide value-based
                      education to all members of society, with a special
                      emphasis on bright minds from socio-economically
                      disadvantaged background. <br />
                      <br />
                      The Foundation envisions an innovative and empowering
                      educational approach that equips the younger generation
                      with the skills and knowledge to build a better future for
                      humanity, guided by principles of justice and ethical
                      values.
                    </p>
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

export default OffCampus;
