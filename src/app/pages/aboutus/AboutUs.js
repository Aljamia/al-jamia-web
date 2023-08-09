"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Link from "next/link";

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
      <PageHeader />
      <div className="AboutUspage-header">
        <div className="AboutUspage-title">About Us</div>
      </div>
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
      <div className="AboutUspage-items">
        <Container>
          <div className="AboutUspage-vision">
            <div className="AboutUspage-vision-title">Our Vision</div>

            <div className="AboutUspage-vision-details">
              <p className="AboutUspage-vision-desc">{about[1]?.vision}</p>
            </div>
          </div>
        </Container>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/image 12.png"
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
                  Our Mission
                </div>
                <p className="AboutUspage-mission-desc">{about[0]?.mission}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="AboutUspage-ourCampus shadow-lg">
        <Container>
          <div className="AboutUspage-campus-title">Campus Life</div>
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
      <Footer />
    </div>
  );
};

export default AboutUs;
