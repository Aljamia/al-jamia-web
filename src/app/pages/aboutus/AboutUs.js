"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";

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
          <Container key={index}>{item.longDescription}</Container>
        ))}
      </div>
      <div className="AboutUspage-vision">
        <Container>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-vision-title">Our Vision</div>
              <p className="AboutUspage-vision-desc">{about[0]?.vision}</p>
            </Col>

            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-vision-img">
                <Image
                  src="/image 12.png"
                  layout="responsive" // Use layout="responsive" for responsiveness
                  width={500} // Provide the width of the image
                  height={800} // Adjust the height as needed to make it taller
                  alt="Image"
                />
              </div>
            </Col>
          </Row>
          <div className="AboutUspage-ourMission">
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-vision-img">
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
                  className="AboutUspage-vision-title"
                  id="our-mission-header"
                >
                  Our Mission
                </div>
                <ul className="AboutUspage-mission-desc">
                  <li>{about[0]?.mission}</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="AboutUspage-ourCampus shadow-lg">
        <Container>
          <div className="AboutUspage-vision-title">Campus Life</div>
          <div className="AboutUspage-gallery">
            {gallery?.map((value, key) => (
              <div className="AboutUspage-gallery-img" key={key}>
                <div className="AboutUsPage-gallery-items">
                  <div className="box">
                    <div className="imgBox">
                      <Image
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${value.image}`}
                        alt=""
                        width={300}
                        height={230}
                        className="Aboutpage-images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
