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
      console.log(data);
      setAbout(data?.response);
    };
    const fetchGallery = async () => {
      const data = await getAboutUsGallery();
      setGallery(data?.response);
    };
    fetchAbout();
    fetchGallery();
  }, []);

  console.log({ gallery });

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
        {about.map((item) => (
          <Container key={item.id}>{item.longDescription}</Container>
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
                  src="/image 7.png"
                  layout="fixed" // Use layout="responsive" for responsiveness
                  width={600} // Provide the width of the image
                  height={300} // Provide the height of the image (optional)
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
                    src="/image 7.png"
                    layout="fixed" // Use layout="responsive" for responsiveness
                    width={600} // Provide the width of the image
                    height={300} // Provide the height of the image (optional)
                    alt="Image"
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
                <p className="AboutUspage-vision-desc">{about[0]?.mission}</p>
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
                <img
                  src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${value.image}`}
                  alt=""
                  width="50%"
                  className="Aboutpage-images"
                />
              </div>
            ))}
            {/* <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 993.png" alt="" width={"100%"} />
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
            </div>
            <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
              <img src="/Rectangle 994.jpg" alt="" width={"100%"} />
            </div>
            <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 993.png" alt="" width={"100%"} />
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
            </div> */}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
