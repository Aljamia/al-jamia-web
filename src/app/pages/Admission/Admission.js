"use client";
import React from "react";
import "./Admission.css";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Admission_lists from "@/app/components/Admission_lists/Admission_lists";
import Faqbox from "@/app/components/Faqbox/Faqbox";
import Application_form from "@/app/components/Application_form/Application_form";

function Admission() {
  return (
    <div>
      <PageHeader />

      <div className="AboutUspage-img">
        <Image
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>

      <Container>
        <Row>
          <Col xl={12} lg={12} xs={12}>
            <div className="p-4">
              <Admission_lists />
              <Faqbox />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="form_bg_gray">
        <Application_form />
      </div>
      <Footer />
    </div>
  );
}

export default Admission;
