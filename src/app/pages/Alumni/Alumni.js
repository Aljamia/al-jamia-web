"use client";
import React, { useState, useEffect } from "react";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import "./Alumni.css";
import Event from "@/app/components/Events/Event";

import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Link from "next/link";
import Alumni_Chapters from "@/app/components/Alumni_Chapters/Alumni_Chapters";

function Alumni() {
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
              <Col xl={12} lg={12} xs={12} data-aos="fade-up">
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header pb-2"
                >
                  Alumni
                </div>
                <p className="AboutUspage-mission-desc">
                  Introduction of a new syllabi integrating both the religious
                  and modern education into a common fold rejecting the divide
                  of education as ‘religious’ and ‘modern’ was really a daring
                  experiment in context of the then prevalent socio-religious
                  atmosphere six and half decades ago. The architects of the
                  institution had a sole objective of moulding a generation
                  capable of carrying out Islamic Dawa’h in the modern world.
                  However, the role of Al Jamia pass-outs surpassed the set
                  objective and created a new generation having a distinctive
                  and comprehensive perspective on life and religion empowered
                  to influence the field of education as a whole.
                  <br />
                  <br />
                  The first batch completed their course in 1963 and the
                  institution continued its growth throughout the several years
                  passed in terms of the number of students, faculty and
                  infrastructure development. However, the quality of the
                  students it has produced since its inception was amazing. The
                  children of Al Jamia became a distinctive voice in the
                  socio-religious arena of Kerala who were capable of writing
                  and speaking in pure Malayalam language even though they
                  didn’t have long beard and turbans as their symbol. Wearing
                  dress as a common man, they were proficient in Arabic language
                  and literature. In addition, they mastered English, Urdu
                  languages by profusely writing and speaking in those
                  languages. Along with learning Qur’an, Hadees, Fiqh, Ilmul
                  Kalam and Mantiq, they studied mathematics, science and social
                  sciences as well which enabled them to shine out in religious
                  as well as secular platforms and thereby defending Islam
                  against the all-out attack by atheists and communists. They
                  contributed heavily and spearheaded the advancement in the
                  fields of Islamic Da’wah, media, literary works,
                  organizational set up, social service and education.
                  <br />
                  <br />
                  Thus, the seed sown in the village of Mullyakurshi spread all
                  over Kerala with many plants and seeds which in turn
                  culminated in following other sections of the Muslim community
                  to assimilate the ‘Santhapuram model’ in their own way. Today,
                  the institution has grown into a top Islamic university with
                  excellent faculties and research facilities in Quran, Hadith,
                  Shariah, Dawa etc., attracting students from different part of
                  the country. The growth and development from a small
                  institution of limited amenities to a prime Islamic university
                  embodies the constant reforms it has undertaken in the field
                  of education. Like all of you, I am proud to be a part of it.
                  <br />
                  <br />
                  Al Jamia Alumni Association It will exceed more than ten
                  thousand the number of students who studied in Al Jamia during
                  different periods which includes eminent personalities such as
                  prominent Islamic scholars, leaders of Islamic Movement,
                  writers, academicians and media persons who are rendering
                  commendable services in various fields throughout India and
                  abroad.
                  <br />
                  <br />
                  Although alumni association came into existence in sixties, it
                  got his present strength and vigour with the formation of
                  Santhapuram Al Jamia Al Islamiya Alumni Association in 2011.
                  The Alumni Association is fully committed to utilize the
                  skills and knowledge of alumni more effectively and has
                  implemented several programs after its re-organization to keep
                  the alumnus connected with the organization and encourage them
                  to make as much efforts as possible so as to ensure its
                  growth.
                  <br />
                  <br />
                  Some of the activities:
                  <br />
                  Biennial meetings, Seminars, publication of books,
                  construction of a multi-story building as Waqf project in
                  Perinthalmanna, honoring of previous faculty members,
                  publication of book highlighting the contributions of Al Jamia
                  alumnus in addition to the formation of Alumni Representative
                  Council consisting of representatives from more than seventy
                  batches starting from 1963. Furthermore, many batches have
                  undertaken various projects in coordination with Al Jamia
                  management. In order to enhance the activities of the Alumni
                  Association and make it more efficient, the first day of Hijri
                  calendar Muharram 1 is being celebrated as ‘Alumni Day’ every
                  year.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <Alumni_Chapters />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Alumni;
