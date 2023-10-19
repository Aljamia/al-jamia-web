"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Recognition_Awards_data from "@/app/components/Recognition_Awards_data/Recognition_Awards_data";

function Recognition_Awards() {
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
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image
          src="/banner/Recognition_Awards.png"
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
                <Recognition_Awards_data />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recognition_Awards;
