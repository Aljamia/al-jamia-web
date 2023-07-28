import React from "react";
import "./Grades.css";
import Image from "next/image";

const Grades = () => {
  return (
    <div className="grades">
      <div className="grades-items">
        <div className="grid-items">
          {" "}
          <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          />
          <h2 className="grades-digits">22K+</h2>
          <h3 className="grades-title">Students</h3>
        </div>
        <div className="grid-items">
          {" "}
          <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          />
          <h2 className="grades-digits">22K+</h2>
          <h3 className="grades-title">Programs</h3>
        </div>
        <div className="grid-items">
          {" "}
          <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          />
          <h2 className="grades-digits">22K+</h2>
          <h3 className="grades-title">Faculties</h3>
        </div>
        <div className="grid-items">
          {" "}
          <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          />
          <h2 className="grades-digits">22K+</h2>
          <h3 className="grades-title">Alumini</h3>
        </div>
      </div>
    </div>
  );
};

export default Grades;
