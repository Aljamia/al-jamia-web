import React, { useState, useEffect } from "react";
import "../../globals.css";

const Grades = () => {
  const [count1, setCount1] = useState(700);
  const [count2, setCount2] = useState(10);
  const [count3, setCount3] = useState(50);
  const [count4, setCount4] = useState(10);

  const handleMouseEnter = () => {
    startAnimations();
  };

  const startAnimations = () => {
    const duration1 = 1000;
    const duration2 = 1500;
    const duration3 = 2000;
    const duration4 = 2500;
    let startTimestamp1 = null;
    let startTimestamp2 = null;
    let startTimestamp3 = null;
    let startTimestamp4 = null;

    const step1 = (timestamp) => {
      if (!startTimestamp1) startTimestamp1 = timestamp;
      const progress = Math.min((timestamp - startTimestamp1) / duration1, 1);
      setCount1(Math.floor(progress * (1600 - 500) + 500));
      if (progress < 1) {
        window.requestAnimationFrame(step1);
      }
    };

    const step2 = (timestamp) => {
      if (!startTimestamp2) startTimestamp2 = timestamp;
      const progress = Math.min((timestamp - startTimestamp2) / duration2, 1);
      setCount2(Math.floor(progress * (20 - 50) + 50));
      if (progress < 1) {
        window.requestAnimationFrame(step2);
      }
    };

    const step3 = (timestamp) => {
      if (!startTimestamp3) startTimestamp3 = timestamp;
      const progress = Math.min((timestamp - startTimestamp3) / duration3, 1);
      setCount3(Math.floor(progress * (90 - -10) + -10));
      if (progress < 1) {
        window.requestAnimationFrame(step3);
      }
    };

    const step4 = (timestamp) => {
      if (!startTimestamp4) startTimestamp4 = timestamp;
      const progress = Math.min((timestamp - startTimestamp4) / duration4, 1);
      setCount4(Math.floor(progress * (12 - 50) + 50));
      if (progress < 1) {
        window.requestAnimationFrame(step4);
      }
    };

    window.requestAnimationFrame(step1);
    window.requestAnimationFrame(step2);
    window.requestAnimationFrame(step3);
    window.requestAnimationFrame(step4);
  };

  return (
    <div className="grades" data-aos="fade-up">
      <div className="about-Title">
        <h1>Our Success</h1>
        <hr />
      </div>

      <div className="course-desc aos-init">
        <p>
          It will exceed more than ten thousand the number of students who
          studied in Al Jamia during different periods which includes eminent
          personalities such as prominent Islamic scholars, leaders of Islamic
          Movement, writers, academicians and media persons who are rendering
          commendable services in various fields throughout India and abroad.
        </p>
      </div>
      {/* <p className="center_div pr-4 pl-4">
     
      </p> */}
      <div className="grades-items" data-aos="fade-up">
        <div className="grid-items">
          {/* <Image
            src="/Group 2062.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          /> */}
          <h2
            className="grades-digits"
            id="count1"
            onMouseEnter={handleMouseEnter}
          >
            {count1}+
          </h2>
          <h3 className="grades-title">Students</h3>
        </div>

        <div className="grid-items">
          {/* <Image
            src="/Group 2062.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          /> */}
          <h2
            className="grades-digits"
            id="count2"
            onMouseEnter={handleMouseEnter}
          >
            {count2}+
          </h2>
          <h3 className="grades-title">Programs</h3>
        </div>
        <div className="grid-items">
          {/* <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          /> */}
          <h2
            className="grades-digits"
            id="count3"
            onMouseEnter={handleMouseEnter}
          >
            {count3}+
          </h2>
          <h3 className="grades-title">Faculties</h3>
        </div>
        <div className="grid-items">
          {/* <Image
            src="/Group 2060.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          /> */}
          <h2
            className="grades-digits"
            id="count4"
            onMouseEnter={handleMouseEnter}
          >
            {count4}K+
          </h2>
          <h3 className="grades-title">Alumni</h3>
        </div>
      </div>
    </div>
  );
};

export default Grades;
