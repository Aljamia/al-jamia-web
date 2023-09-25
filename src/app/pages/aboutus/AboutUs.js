"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";

import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Link from "next/link";
import Main_navebar from "../Main_navebar/Main_navebar";
import Director_message from "../Director_message/Director_message";
import Vision from "../Visionpage/Vision";
import Mission from "../Missionpage/Mission";
import Director from "@/app/components/director/Director";

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
      console.log("ghgg", setGallery);
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
    <div className="AboutUspage">
      <Main_navebar />
      {/* <PageHeader /> */}

      <div className="AboutUspage-img overlay">
        <Image
          src="/banner/about_banner.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <div className="AboutUspage-desc">
        <div className="AboutUspage-title center_aln pb-4" data-aos="fade-up">
          Al Jamia Al Islamiya
        </div>{" "}
        {about.map((item, index) => (
          <>
            <Container
              className="AboutUspage-short-desc"
              key={index}
              data-aos="fade-up"
            >
              {item.shortDescription}
            </Container>
            <Container
              className="AboutUspage-long-desc"
              key={index}
              data-aos="fade-up"
            >
              {item.longDescription}
            </Container>
          </>
        ))}
      </div>

      <Vision />

      <Director />

      <Footer />
    </div>
  );
};

export default AboutUs;
