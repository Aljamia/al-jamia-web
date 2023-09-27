"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Our_Facilities() {
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
            src="/banner/Facilities.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <div className="AboutUspage-items">
          <h1 className="TitleStyle center_aln  pt-2 pb-2">
            Our Facilities and General Service
          </h1>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/class_rooms.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Smart class rooms</h4>
                      <p className="caro-paragraph">
                        Experience the future of education through our 40+ Smart
                        Classrooms. Discover a dynamic learning environment
                        equipped with advanced technology, interactive displays,
                        and collaborative tools
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/Digital_labs.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Digital labs</h4>
                      <p className="caro-paragraph">
                        Explore our cutting-edge digital labs, a network of five
                        advanced facilities housing a total of 70+ computers.
                        Dive into a realm where technology and education
                        converge to create immersive learning experiences.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/Wifi Campus.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Wifi Campus</h4>
                      <p className="caro-paragraph">
                        Step into a seamlessly connected world within our
                        WiFi-enabled campus. Enjoy uninterrupted access to
                        online resources, collaboration tools, and communication
                        platforms.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/Conference.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Conference Halls</h4>
                      <p className="caro-paragraph">
                        Discover our impressive conference halls, offering a
                        comprehensive range of facilities including advanced
                        sound systems and projectors. Elevate events with
                        seamless technology
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/SeminarHalls.png" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Seminar Halls</h4>
                      <p className="caro-paragraph">
                        Discover our six versatile seminar halls, each designed
                        to facilitate engaging and informative sessions. From
                        interactive presentations to collaborative discussions,
                        our seminar halls provide the perfect environment for
                        sharing knowledge and insights.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/Video_conference.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Video conference Hall</h4>
                      <p className="caro-paragraph">
                        Enter our dedicated Video Conference Room, where
                        distance is no barrier to effective communication.
                        Engage in seamless virtual meetings and collaborations,
                        ensuring your interactions are productive and engaging.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/Students_Centres2.png" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Students Corners</h4>
                      <p className="caro-paragraph">
                        Experience relaxation and a sense of unity in our
                        indoor/outdoor Students Corners. These inviting spaces
                        are ideal for unwinding, connecting, and savoring the
                        beauty of the campus.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/DigitalStudio.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Digital Studio</h4>
                      <p className="caro-paragraph">
                        Welcome to our advanced Digital Video Recording Studio,
                        where your visual creations take center stage. Capture,
                        edit, and bring your videos to life in a dynamic and
                        technologically equipped environment
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/MentorsHub.JPG" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Mentors Hub</h4>
                      <p className="caro-paragraph">
                        Discover the power of mentorship in our two specialized
                        Hubs, designed to empower both girls and boys. Each Hub
                        is guided by a team of 10 dedicated mentors, creating a
                        supportive space for growth
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/Hostels.png" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Hostels</h4>
                      <p className="caro-paragraph">
                        Embark on a journey of exploration within our six
                        welcoming hostels, thoughtfully designed to accommodate
                        700+ students. Uncover a vibrant community where comfort
                        and learning intertwine. Stay connected for updates as
                        we elevate these spaces to provide you with an ex
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="/banner/Mess.png" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Mess hall</h4>
                      <p className="caro-paragraph">
                        Experience our spacious mess hall, accommodating 1000+
                        students, where you can desire the authentic flavors of
                        both northern and southern cuisines. Indulge in a
                        culinary journey that celebrates the diversity of tastes
                        and traditions.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={6} xs={12} data-aos="flip-left">
                  <div className="box">
                    <div className="caro-img">
                      <img src="banner/Medical_Rooms.png" alt="" />
                    </div>
                    <div className="caro-items">
                      <h4 className="caro-des"> Medical Rooms</h4>
                      <p className="caro-paragraph">
                        Prioritizing student’s well-being, we offer two medical
                        rooms fully equipped with essential first aid supplies
                        and accommodating six beds each. Student’s health and
                        safety are our commitment
                      </p>
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

export default Our_Facilities;
