/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

function Online_Program() {
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Al Jamia World Campus (Online Program)
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Al Jamia Al Islamiya is all set to embark on a new journey
                    under the umbrella of ‘Al Jamia World Campus’ by developing
                    a modern learning platform combining the state‐of‐the‐art
                    technology and innovative e‐learning methodology. As an
                    embodiment of Al Jamia’s prime objective of empowering the
                    society at large, JWC is committed to equipping the society
                    with necessary educational competencies through multiple
                    online courses in a variety of subjects, accessible from
                    anywhere, anytime, from the comfort of their home and
                    thereby enabling them to earn an accredited certification
                    from one of the foremost educational hubs in India.
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
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                  rel="stylesheet"
                />
                <section>
                  <h1 className="TitleStyle center_aln  p-4">
                    Highlights of Programs
                  </h1>

                  <div className="row pb-5">
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-video"></i>
                        </div>
                        <h3>Pre-recorded video lessons </h3>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-pen"></i>
                        </div>
                        <h3>Content summary notes </h3>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-book"></i>
                        </div>
                        <h3>Reference materials</h3>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-eye"></i>
                        </div>
                        <h3>Interactive live sessions</h3>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-file"></i>
                        </div>
                        <h3>Assignments and assessment modules </h3>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="icon-wrapper">
                          <i className="fas fa-award"></i>
                        </div>
                        <h3>Final evaluation and certification </h3>
                      </div>
                    </div>
                  </div>
                </section>
              </Row>
            </Container>
          </div>
        </div>

        <div className="AboutUspage-items">
          <h1 className="TitleStyle center_aln  pt-2 pb-4">
            Our online Courses
          </h1>

          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/banner/Teachings of Jesus Christ.jpg"
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
                      {" "}
                      1. Teachings of Jesus Christ
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    In a world polarized largely on the basis of religion, race,
                    caste, and creed, fostering a culture of give-and take
                    approach in exchanging beliefs, and ideas will help a lot in
                    reducing the effects of large-scale schism prevailing in the
                    society at large. <br /> <br />
                    In this context, Al Jamia World Campus offers the
                    Certificate course in Comparative Religion under the title
                    of ‘Teachings of Jesus Christ’ Module 1 which will shed
                    light on the true concepts of Christianity as propagated by
                    God’s Messenger Jesus Christ. <br /> <br />
                    The course is conceived, designed, and presented by Dr.
                    Sakkeer Hussain; a renowned scholar as well as an academic
                    expert in the field of comparative religious studies who is
                    actively involved in the domains of interfaith dialogue.
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
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">
                      {" "}
                      2. Ulum al Qur’an (Intermediate)
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Ulum al Qur’an or the Science of Qur’an is an introduction
                    to the study of the Holy Qur’an. It will help the learners
                    know the Qur’anic principles in a proper way and enable them
                    to approach it in just and fair manner.
                    <br /> <br />
                    As we have already completed two batches of the
                    ‘Introductory level’ of the certificate course in Ulum al
                    Qur’an, arrangements have been made to introduce the
                    ‘Intermediate level’ of the course aimed at a deeper
                    understanding of the subject.
                    <br /> <br />
                    The ‘Intermediate level’ will cover a host of subjects
                    helping the learners to explore the versatile areas of
                    Qur’anic knowledge. The course will embrace a variety of
                    subjects such as the similarities between Qur’anic verses
                    and its chapters, various modes of presentations of the
                    Qur’an and its multifarious styles, Qur’anic commandments
                    and their diversity, the fundamentals of extracting Qur’anic
                    laws, various types of Qur’an recitation, scripts, parables,
                    similes, oaths of the Qur’an, Well-defined verses and
                    Figurative verses, the real meaning of ‘Abrogated’ verses in
                    Qur’an, the methodology of Qur’an and virtues presented to
                    humanity by Qur’an are mainly discussed in the course
                  </p>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/banner/Ulum al Quran (Intermediate).jpg"
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">
                      {" "}
                      3. Ulum al Quran (Beginner)
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Ulum Al-Qur’an or The Sciences of the Qur’an’ deals with the
                    knowledge of those sciences that have a direct bearing on
                    the recitation, history, understanding, and implementation
                    of the Qur’an. <br /> <br />
                    The course deals with the subjects related to the Holy
                    Qur’an which are considered as the basic elements of proper
                    understanding of the Qur’an. The course will cover key
                    subjects such as characteristics of the Qur’an, the reality
                    of Revelation, the compilation of the Qur’an, and the Causes
                    of Revelation, etc.
                  </p>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="objectives_Head"> Learning objectives:</h1>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li>
                      To recognize the necessity of Ulum al -Qur’an in
                      understanding the Qur’an.
                    </li>
                    <li>
                      To introduce Ulum al -Qur’an with its definition, history,
                      and significance
                    </li>
                    <li>
                      To get the basic knowledge of various subjects related to
                      Ulum al -Qur’an
                    </li>

                    <li>
                      To get a tool for the general understanding of the Qur’an
                      with Ulum al-Qur’an
                    </li>
                    <li>
                      To analyse the interpretations of the Qur’an with the
                      basics of Ulum al-Qur’an
                    </li>
                    <li>What do you learn from the course?</li>
                    <li>
                      On completion of this course, a student will be able to:
                    </li>
                    <li>
                      Realize the historical and conceptual significance of the
                      Qur’an.
                    </li>
                    <li>Understand the proper way of learning the Qur’an.</li>
                    <li>
                      Get a proper understanding of the different aspects of
                      Ulum al-Qur’an.
                    </li>
                    <li>
                      Recognize the primary and secondary sources of Ulum
                      al-Qur’an
                    </li>
                  </ul>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div className="AboutUspage-mission-img mt-5">
                    <Image
                      src="/banner/Ulum al Quran (Beginner).jpg"
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head"> 4. Islamic Finance</h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Al Jamia World Campus offers a globally sought-after diploma
                    program in Islamic Finance, an emerging knowledge domain in
                    banking and finance services.
                    <br /> <br />
                    This diploma program, consisting of five modules, has been
                    conceived, designed, and delivered by academic experts, and
                    offers a superb learning experience for prospective career
                    aspirants in Islamic Finance and Banking sector.
                  </p>
                </Col>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img mt-1">
                    <Image
                      src="/banner/Islamic Finance.jpg"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>
                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="objectives_Head">
                      {" "}
                      Highlights of the Diploma Program:
                    </h1>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li>Pre-recorded video lessons</li>
                    <li>Content summary notes</li>
                    <li>Reference materials</li>
                    <li>Interactive live sessions</li>
                    <li>Assignments and assessment modules</li>
                    <li>Final evaluation and certification</li>
                  </ul>
                  <div className="AboutUspage-mission-img mt-5">
                    <h1 className="objectives_Head"> Special offer:</h1>
                    Students who enrolled and COMPLETED five modules of the
                    course which earns them a diploma, will get the fifth module
                    of the course enrolled FREE OF COST.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
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
                    <h1 className="Courses_Head">
                      {" "}
                      5. An Introduction to the Study of Prophetic Tradition
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The Holy Qur’an and Hadith or Sunnah (Prophetic Tradition)
                    are the two fundamental sources of Islamic Knowledge. The
                    study of the Qur’an is generally more prolific in Muslim
                    society. However, the study of Prophetic Tradition which is
                    the most authentic and reliable interpretation of the Qur’an
                    and the practical framework of Qur’anic principles is
                    comparatively far less than it should be. While the spirit
                    of practicing Islam as a religion is unachievable without
                    the proper understanding of Hadith, many of the Muslim
                    community do not have a general understanding of the
                    Prophetic Tradition. On the contrary, the young generation
                    is widely misled to the extreme and dangerous ideological
                    deviations to the extent of disapproving the authenticity of
                    Prophetic Tradition. <br /> <br />
                    Most of the criticisms from different corners against Islam
                    are based on the lack of knowledge or misconceptions about
                    the Prophetic Tradition. Although someone identifies himself
                    as Muslim, he degenerates to the level of an apostate due to
                    the lack of knowledge on the importance of Prophetic
                    Tradition in a Muslim’s life and thereby cannot verify the
                    invalidity of various accusations against Prophetic
                    Tradition. In this context, Al Jamia World Campus has
                    designed a course that constitutes the main aspects of
                    Prophetic Tradition which are envisaged to be essential
                    components for the life of an ideal Muslim.
                  </p>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="objectives_Head"> Learning Objectives :</h1>
                  </div>

                  <div>
                    To educate and enlighten the learner with the basics of
                    Prophetic Tradition and help to follow the Prophetic
                    Tradition in his life through the systematic study of the
                    following topics:
                  </div>
                  <ul className="blog-details-list mt-4">
                    <li>
                      The Prophetic Tradition as the second authentic source of
                      Islamic Sharia.
                    </li>
                    <li>
                      The definition of Prophetic Tradition in various areas of
                      Islamic knowledge
                    </li>
                    <li>Categories of Prophetic Tradition</li>
                    <li>The authenticity of Prophetic Tradition</li>
                    <li>The features of Prophetic Tradition</li>
                    <li>The relation between Qur’an and Prophetic Tradition</li>
                  </ul>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img mt-5">
                    <Image
                      src="/banner/Study of Prophetic Tradition.jpg"
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">
                      6. Maqasid al-Sharia (Beginner)
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    <b>Certificate Course in Maqasid al-Sharia</b>
                    <br />
                    The certificate course in Maqasid al-Sharia (Higher
                    Objectives of Islamic Law) is a combination of live online
                    classes and recorded video classes along with additional
                    reference materials and students’ assignments/assessment
                    modules.
                  </p>

                  <p className="AboutUspage-mission-desc">
                    <b>Course Overview</b>
                    <br />
                    This course mainly deals with an important area of Islamic
                    jurisprudence known as Maqasid al-Sharia. It aims at
                    teaching the objectives of Sharia, its importance, and its
                    applications in social engagements in easy and simple ways
                    so as to attain success both Here and in the Hereafter.
                  </p>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="objectives_Head">Course Objectives :</h1>
                  </div>

                  <div>
                    To educate and enlighten the learner with the basics of
                    Prophetic Tradition and help to follow the Prophetic
                    Tradition in his life through the systematic study of the
                    following topics:
                  </div>
                  <ul className="blog-details-list mt-4">
                    <li>
                      Explain the basic principles related to Islamic Sharia and
                      Fiqh.
                    </li>
                    <li>
                      Introduce the definition, history, and authenticity of
                      Maqasid al-Sharia.
                    </li>
                    <li>
                      Understand contemporary studies and researches on Maqasid
                      al-Sharia.
                    </li>
                    <li>
                      Familiarize the methods and ways of determining the
                      Maqasid al-Sharia.
                    </li>
                    <li>
                      Understand the execution of Maqasid al-Sharia in
                      contemporary issues.
                    </li>
                    <li>
                      Explore a broad knowledge about five Dharuriyyat in the
                      light of Maqasid
                    </li>
                  </ul>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img mt-5">
                    <Image
                      src="/banner/Maqasid al-Sharia.jpg"
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

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="Courses_Head">
                      7. Maqasid al-Sharia (Intermediate)
                    </h1>
                  </div>
                  <p className="AboutUspage-mission-desc">
                    <b>Certificate Course in Maqasid al-Sharia</b>
                    <br />
                    The certificate course in Maqasid al-Sharia (Higher
                    Objectives of Islamic Law) is a combination of live online
                    classes and recorded video classes along with additional
                    reference materials and students’ assignments/assessment
                    modules.
                  </p>

                  <p className="AboutUspage-mission-desc">
                    <b>Course Overview</b>
                    <br />
                    This course mainly deals with an important area of Islamic
                    jurisprudence known as Maqasid al-Sharia. This course aims
                    at teaching the objectives of Sharia, its importance, and
                    applications in social engagements in easy and simple ways
                    so as to attain success both Here and in the Hereafter.
                  </p>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h1 className="objectives_Head">Course Objectives :</h1>
                  </div>

                  <ul className="blog-details-list mt-4">
                    <li>
                      Explain the basic principles related to Islamic Sharia and
                      Fiqh.
                    </li>
                    <li>
                      Introduce the definition, history, and authenticity of
                      Maqasid al-Sharia.
                    </li>
                    <li>
                      Understand contemporary studies and researches on Maqasid
                      al-Sharia.
                    </li>
                    <li>
                      Familiarize the methods and ways of determining the
                      Maqasid al-Sharia.
                    </li>
                    <li>
                      Understand the execution of Maqasid al-Sharia in
                      contemporary issues.
                    </li>
                    <li>
                      Explore a broad knowledge about the five Dharuriyyat in
                      the light of Maqasid
                    </li>
                  </ul>
                </Col>

                <Col xl={6} lg={12} xs={12}>
                  <div className="AboutUspage-mission-img mt-5">
                    <Image
                      src="/banner/Maqasid al-Sharia_Intermediate.jpg"
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
        <div className="app_bg">
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                {/* <h1 className="app_head">Click</h1> */}
                <div className="app_icon">
                  <Link
                    href="https://aljamiaworldcampus.net"
                    target="blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Image
                      src="/aljamia_worldcampus_logo_blue.png"
                      layout="intrinsic"
                      width={1000}
                      height={500}
                      alt="Image"
                    />
                  </Link>{" "}
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

export default Online_Program;
