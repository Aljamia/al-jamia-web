"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AlJamiaApp() {
  return (
    <div>
      <div className="app_bg">
        <Container>
          <Row>
            <Col xl={4} lg={4} xs={12} data-aos="fade-up">
              <h1 className="app_head">Click</h1>
              <div className="app_icon">
                <Link
                  href="https://aljamiaworldcampus.net"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image unoptimized={true}
          unselectable={true}
                    src="/aljamia_worldcampus_logo_blue.png"
                    layout="intrinsic"
                    width={1000}
                    height={500}
                    alt="Image"
                  />
                </Link>{" "}
              </div>
            </Col>

            <Col xl={4} lg={4} xs={12} data-aos="fade-up">
              <h1 className="app_head">Login</h1>
              <div className="app_icon">
                <Link
                  href="https://aljamia.campus7.in/login"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image unoptimized={true}
          unselectable={true}
                    src="/Campus7ERP.png"
                    layout="intrinsic"
                    width={1000}
                    height={500}
                    alt="Image"
                  />
                </Link>
              </div>
            </Col>

            <Col xl={4} lg={4} xs={12} data-aos="fade-up">
              <h1 className="app_head">Download App</h1>
              <div className="app_icon">
                <Link
                  href="https://play.google.com/store/apps/details?id=in.ixian.campus7.aljamia.student&pcampaignid=web_share"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image unoptimized={true}
          unselectable={true}
                    src="/playstor.png"
                    layout="intrinsic"
                    width={1000}
                    height={500}
                    alt="Image"
                  />
                </Link>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AlJamiaApp;
