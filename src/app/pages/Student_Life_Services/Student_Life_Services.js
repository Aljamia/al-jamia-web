/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Student_Life_Services() {
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
          <h1 class="TitleStyle center_aln  pt-2 pb-2">Our online Courses</h1>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
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
                    <h1 className="Courses_Head">Sargasamgamam</h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Sargasamgamam is an Art and Literary fest which Al Jamia
                    organizes every year with the aim of equipping the student
                    community with the tools necessary to communicate with time
                    from an Islamic platform and to nurture their creative and
                    intellectual talents. Sargasamgamam helps the students in
                    developing their innate talents and rear a healthy spirit of
                    competition.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">Play Off </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Al Jamia offers the students a wide range of opportunities
                    for competitive and recreational sports. Each year, students
                    are given the opportunity to participate in the competitive
                    sport activities. The event is named as Play Off. In
                    addition to the event, Al Jamia provides training sessions
                    for physical fitness.
                  </p>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <hr />

        <div className="AboutUspage-items">
          <h1 class="TitleStyle center_aln  pt-2 pb-2">Student Clubs & Union</h1>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
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
                    <h1 className="Courses_Head">
                      Students Islamic Organisation
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Students Islamic Organisation works within Al Jamia campus,
                    constituting an area of several units, will be a Good
                    collective for students to collaborate with. Students
                    Islamic Organisation will help students with reliable and
                    moral companionship, and nurture both curricular and
                    extra‐curricular exercises. SIO Al Jamia provides forums and
                    cadre camps to promote ideological consciousness and spirits
                    in them. It makes students capable to be aware of
                    socio‐political conditions. It also creates chances to
                    interact with the felicitous personalities in order to
                    foster the right kind of students. It is mandatory to all
                    students to co‐operate and participate in the programs and
                    activities rendered by SIO Al Jamia.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">
                      Girls Islamic Organisation{" "}
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    works within Al Jamia campus, constituting an area of
                    several units, will be a good collective for students to
                    collaborate with. Girls Islamic Organisation will help
                    students with reliable and moral companionship, and nurture
                    both curricular and extra‐curricular exercises. GIO Al Jamia
                    provides forums and cadre camps to promote ideological
                    consciousness and spirits in them. It makes students capable
                    to be aware of socio‐political conditions. It also creates
                    chances to interact with the felicitous personalities in
                    order to foster the right kind of students. It is mandatory
                    to all students to co‐operate and participate in the
                    programs and activities rendered by GIO Al Jamia
                  </p>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/vision.png"
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
                    <h1 className="Courses_Head">Volunteer Service SRW: </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Volunteer Service SRW: Our Student Volunteer Service SRW
                    (Students Relief Wing) program at Al Jamia is all about
                    students giving back to the community. Through this program,
                    students actively participate in community service, taking
                    on responsibilities, and contributing to the welfare of
                    society. It's about students making a positive impact, both
                    in their own lives and the lives of others.
                  </p>
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

export default Student_Life_Services;
