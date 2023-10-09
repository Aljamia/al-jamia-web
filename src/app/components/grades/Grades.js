import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../globals.css";

const Grades = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("grades");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      startAnimations();
    }
  }, [isInView]);

  const startAnimations = () => {
    const duration1 = 1000;
    const duration2 = 2600;
    const duration3 = 2000;
    const duration4 = 2500;

    const startTimestamp = performance.now();

    const animateCounts = () => {
      const elapsed = performance.now() - startTimestamp;

      setCount1((prevCount) =>
        Math.min(Math.floor((elapsed / duration1) * (1600 - 500) + 500), 1600)
      );

      setCount2((prevCount) =>
        Math.min(Math.floor((elapsed / duration2) * (21 - 50) + 50), 21)
      );

      setCount3((prevCount) =>
        Math.min(Math.floor((elapsed / duration3) * (90 - 10) + 10), 90)
      );

      setCount4((prevCount) =>
        Math.min(Math.floor((elapsed / duration4) * (14 - 50) + 50), 14)
      );

      if (elapsed < Math.max(duration1, duration2, duration3, duration4)) {
        requestAnimationFrame(animateCounts);
      }
    };

    animateCounts();
  };

  return (
    <Container id="grades" className="grades">
      <div className="about-Title">
        <h1>Our Success</h1>
        <hr />
      </div>

      <div className="course-desc aos-init">
        <p>
          It will exceed more than Twelve thousand the number of students who
          studied in Al Jamia during different periods which includes eminent
          personalities such as prominent Islamic scholars, leaders of Islamic
          Movement, writers, academicians and media persons who are rendering
          commendable services in various fields throughout India and abroad.
        </p>
      </div>
      <Row className="grades-items">
        <Col xs={6} md={6} lg={2}>
          <div className="grid-items">
            <h2 className="grades-digits" id="count1">
              {count1}+
            </h2>
            <h3 className="grades-title">Students</h3>
          </div>
        </Col>

        <Col xs={6} md={6} lg={2}>
          <div className="grid-items">
            <h2 className="grades-digits" id="count2">
              {count2}+
            </h2>
            <h3 className="grades-title">Programs</h3>
          </div>
        </Col>

        <Col xs={6} md={6} lg={2}>
          <div className="grid-items">
            <h2 className="grades-digits" id="count3">
              {count3}+
            </h2>
            <h3 className="grades-title">Faculties</h3>
          </div>
        </Col>

        <Col xs={6} md={6} lg={2}>
          <div className="grid-items">
            <h2 className="grades-digits" id="count4">
              {count4}K+
            </h2>
            <h3 className="grades-title">Alumni</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Grades;
