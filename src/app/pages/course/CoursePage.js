"use client";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import "./CoursePage.css";

const CoursePage = () => {
  return (
    <div className="coursePage">
      <Header />
      <div
        className="coursePage-header"
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <Container>
          <div className="coursePage-img">
            <Image
              src="/image 15.jpg"
              layout="responsive"
              width={1000}
              height={500}
              alt="Image"
            />
            <div className="coursePage-text">
              <h2>Maqasid Al Sharia (Intermediate)</h2>
            </div>
          </div>
        </Container>
        <Container>
          <div className="CoursePage-about">
            <div className="CoursePage-subtitle">
              <h2>About course</h2>
            </div>
            <div className="CoursePage-subtitle">
              <h2>Syllabus</h2>
            </div>
            <div className="CoursePage-subtitle">
              <h2>Instructor</h2>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
