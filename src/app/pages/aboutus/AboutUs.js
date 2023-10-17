"use client";
import Footer from "@/app/components/footer/Footer";
import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { getAboutUs } from "@/app/hooks/UseApi";
import Main_navebar from "../Main_navebar/Main_navebar";
import Vision from "../Visionpage/Vision";
import Director from "@/app/components/director/Director";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);

  return (
    <div className="AboutUspage">
      <Main_navebar />
      <div className="AboutUspage-img overlay">
        <Image
          src="/banner/about_banner2.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <div className="AboutUspage-desc">
        <div className="AboutUspage-title center_aln pb-4">
          Al Jamia Al Islamiya
        </div>{" "}
        {about.map((item, index) => (
          <>
            <Container className="AboutUspage-short-desc" key={index}>
              <p className="about-description"> {item.shortDescription}</p>
            </Container>
            <Container className="AboutUspage-long-desc" key={index}>
              <p className="about-description">{item.longDescription}</p>
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
