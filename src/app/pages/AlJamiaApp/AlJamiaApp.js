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
            <Col xl={6} lg={12} xs={12}>
              <h1 className="app_head">Campus7 Login</h1>
              <div className="app_icon">
                <Link
                  href="https://aljamia.campus7.in/login"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image
                    src="/Campus7ERP.png"
                    layout="intrinsic"
                    width={1000}
                    height={500}
                    alt="Image"
                  />
                </Link>
              </div>
            </Col>

            <Col xl={6} lg={12} xs={12}>
              <h1 className="app_head">Download now</h1>
              <div className="app_icon">
                <Link
                  href="https://play.google.com/store/apps/details?id=in.ixian.campus7.aljamia.student&pcampaignid=web_share"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image
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
