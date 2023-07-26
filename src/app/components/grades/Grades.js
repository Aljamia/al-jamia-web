import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Grades.css";
import Image from "next/image";

const Grades = () => {
  return (
    <div className="grades">
      <Container>
        <Row>
          <Col xl={3} xs={6} sm={6}>
            <div className="grades-header ">
              {" "}
              <Image
                src="/Group 2059.svg"
                width={300}
                height={80}
                alt="Picture of the author"
                className="grades-logo"
              />
              <div className="grades-digits">
                <h2>22K+</h2>
              </div>
              <div className="grades-title">
                <h3>Students</h3>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} sm={6}>
            {" "}
            <div className="grades-header ">
              {" "}
              <Image
                src="/Group 2062.svg"
                width={300}
                height={80}
                alt="Picture of the author"
                className="grades-logo"
              />
              <div className="grades-digits">
                <h2>22K+</h2>
              </div>
              <div className="grades-title">
                <h3>Programs</h3>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} sm={6}>
            {" "}
            <div className="grades-header ">
              {" "}
              <Image
                src="/Group 2059.svg"
                width={300}
                height={80}
                alt="Picture of the author"
                className="grades-logo"
              />
              <div className="grades-digits">
                <h2>22K+</h2>
              </div>
              <div className="grades-title">
                <h3>Faculties</h3>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} sm={6}>
            {" "}
            <div className="grades-header ">
              {" "}
              <Image
                src="/Group 2060.svg"
                width={300}
                height={80}
                alt="Picture of the author"
                className="grades-logo"
              />
              <div className="grades-digits">
                <h2>22K+</h2>
              </div>
              <div className="grades-title">
                <h3>Alumini</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Grades;
