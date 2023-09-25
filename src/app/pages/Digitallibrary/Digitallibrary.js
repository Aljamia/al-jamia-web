"use client";
import React from "react";
import "./Digitallibrary.css";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

const Digitallibrary = () => {
  return (
    <div id="Digitallibrary">
      <div className="AboutUspage">
        <div className="AboutUspage-desc">
          <>
            <Container className="AboutUspage-short-desc">
              <div className="AboutUspage-header m-0 p-3" data-aos="fade-up">
                <div className="AboutUspage-title pt-5">Digital Library</div>
              </div>
              <p data-aos="fade-up">
                The Library also has subscriptions to a core selection of online
                resources and databases including over 25000 E‐books and
                periodicals. All of these resources support research references.
                Most of the collections are available online and can search by
                using the library browsing system.
              </p>{" "}
              <div className="Faculties-img" data-aos="fade-up">
                <Image
                  src="/banner/Digital_Library.JPG"
                  layout="responsive"
                  width={1000}
                  height={200}
                  alt="Image"
                />
              </div>
            </Container>
          </>{" "}
        </div>
      </div>
    </div>
  );
};

export default Digitallibrary;
