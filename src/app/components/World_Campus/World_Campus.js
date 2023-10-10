"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function World_Campus() {
  return (
    <div>
      <div className="app_bg">
        <Container>
          <Row>
            <Col xl={12} lg={12} xs={12}>
              {/* <h1 className="app_head">Click</h1> */}
              <div className="app_icon">
                <Link
                  href="https://aljamiaworldcampus.net"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Image
                    src="/aljamia_worldcampus_logo.png"
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

export default World_Campus;
