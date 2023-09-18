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
        <div className="AboutUspage-title center_aln pb-4">
          Al Jamia Al Islamiya
        </div>{" "}
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

      <Footer />
    </div>
  );
};

export default AboutUs;
