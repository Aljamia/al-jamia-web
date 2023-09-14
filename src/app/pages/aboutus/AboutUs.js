"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";

import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Link from "next/link";
import Director from "@/app/components/director/Director";
import Main_navebar from "../Main_navebar/Main_navebar";

const AboutUs = () => {
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
  if (!gallery || gallery.length === 0) {
    return (
      <div className="text-left">
        <h6>Loading...</h6>
      </div>
    );
  }

  return (
    <div className="AboutUspage">

<Main_navebar/>
      {/* <PageHeader /> */}

      <div className="AboutUspage-img">
        <Image
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <div className="AboutUspage-desc">  
          <div className="AboutUspage-title center_aln pb-4">About Us</div>
        {" "}
      
        {about.map((item, index) => (
          <>
            <Container className="AboutUspage-short-desc" key={index}>
              {item.shortDescription}
            </Container>
            <Container className="AboutUspage-long-desc" key={index}>
              {item.longDescription}
            </Container>
          </>
        ))}
      </div>



      <Director />
{/* 
      <div className="AboutUspage-items">
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
                  Our Vision
                </div>
                <p className="AboutUspage-mission-desc">{about[0]?.vision}</p>
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
                  Our Mission
                </div>
                <p className="AboutUspage-mission-desc">{about[0]?.mission}</p>
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

      <div className="AboutUspage-ourMission">
        <Container>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-mission-img">
                <Image
                  src="/Organisation.png"
                  layout="responsive" // Use layout="responsive" for responsiveness
                  width={500} // Provide the width of the image
                  height={400} // Adjust the height as needed to make it taller
                  alt="Image"
                  objectFit="cover"
                  className="AboutUspage-vision-img2"
                />
              </div>
            </Col>

            <Col xl={6} lg={6} xs={12}>
              <div
                className="AboutUspage-mission-title pb-3"
                id="our-mission-header"
              >
                Organisation Structure
              </div>
              <p className="AboutUspage-mission-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                elit, sed do eiusmod
                <br />
                <br />
                temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                adipiscing elit, sed do eiusmod tempor
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
                className="AboutUspage-mission-title pb-3"
                id="our-mission-header"
              >
                Offices and Departments
              </div>
              <p className="AboutUspage-mission-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                elit, sed do eiusmod temporLorem ipsum dolor sit amet, sed do
                eiusmod tempor <br />
                <br />
                temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                adipiscing elit, sed do eiusmod tempor
              </p>
            </Col>

            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-mission-img">
                <Image
                  src="/Organisation.png"
                  layout="responsive" // Use layout="responsive" for responsiveness
                  width={500} // Provide the width of the image
                  height={400} // Adjust the height as needed to make it taller
                  alt="Image"
                  objectFit="cover"
                  className="AboutUspage-vision-img2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="AboutUspage-ourCampus shadow-lg">
        <Container>
          <div className="AboutUspage-campus-title center_aln">Campus Life</div>
        </Container>
        <div class="grid-wrapper">
          <div className="wide">
            <Image
              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[6]?.image}`}
              width={350}
              height={10}
              alt="Picture of the author"
            />
          </div>

          <div className="big">
            <Image
              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[7]?.image}`}
              width={350}
              height={180}
              alt="Picture of the author"
            />
          </div>

          <div className="tall">
            <Image
              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[0]?.image}`}
              width={350}
              height={180}
              alt="Picture of the author"
              className="gallery-data-link"
            />
            <div className="gallery-link">
              <Link href="/gallery" style={{ textDecoration: "none" }}>
                <h3 className="gallery-navigate">25+</h3>
              </Link>
            </div>
          </div>
          <div className="wide">
            <Image
              src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[9]?.image}`}
              width={350}
              height={180}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className="AboutUspage-ourMission p-5">
        <Container>
          <Row>
            <Col xl={12} lg={12} xs={12}>
              <div className="work_box">
                <div className="AboutUspage-campus-title center_aln white">
                  {" "}
                  Work with us
                </div>

                <p className="p_style">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate possimus tempore distinctio rem itaque ad totam
                  sapiente. Saepe sunt necessitatibus vero, culpa at nobis
                  voluptas earum, quia, illum ullam error.
                </p>

                <div className="btn">
                  <Link href="/Career">
                    <button>
                      {" "}
                      <div className="icon_arrow_abt bg-image">
                        <span className="p-2">Careers</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                          <path
                            d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                            fill="#619A46"
                          />
                        </svg>
                      </div>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <Footer />
    </div>
  );
};

export default AboutUs;
