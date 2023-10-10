"use client";
import React from "react";
import "./Digitallibrary.css";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

const Digitallibrary = () => {
  return (
    <div id="Digitallibrary">
      <div className="AboutUspage">
        <div className="">
          <>
            <Container>
              <div className="AboutUspage-title center_div pt-2">
                Digital Library
              </div>
              <Row>
                <Col xl={4} lg={4} xs={12}>
                  <div className="Faculties-img">
                    <Image
                      src="/banner/Wifi Campus.JPG"
                      layout="responsive"
                      width={1000}
                      height={200}
                      alt="Image"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col xl={4} lg={4} xs={12}>
                  <div className="Faculties-img">
                    <Image
                      src="/banner/Digital_labs.JPG"
                      layout="responsive"
                      width={1000}
                      height={200}
                      alt="Image"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col xl={4} lg={4} xs={12}>
                  <div className="Faculties-img">
                    <Image
                      src="/banner/Digital_labs3.png"
                      layout="responsive"
                      width={1000}
                      height={200}
                      alt="Image"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="pt-4">
              <p>
                The Library also has subscriptions to a core selection of online
                resources and databases including over 25000 E‐books and
                periodicals. All of these resources support research references.
                Most of the collections are available online and can search by
                using the library browsing system.
              </p>{" "}
            </Container>
          </>{" "}
        </div>
      </div>
    </div>
  );
};

export default Digitallibrary;
