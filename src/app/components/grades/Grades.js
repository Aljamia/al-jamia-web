import React, { useState, useEffect } from "react";
import "./Grades.css";
import Image from "next/image";

const Grades = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [programsCount, setProgramsCount] = useState(0);
  const [facultiesCount, setFacultiesCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);

  const targetStudents = 200;
  const targetPrograms = 350;
  const targetFaculties = 400;
  const targetAlumni = 350;
  const speed = 150; // Change the speed as desired (milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (studentsCount < targetStudents) {
        setStudentsCount(studentsCount + 1);
      }
      if (programsCount < targetPrograms) {
        setProgramsCount(programsCount + 1);
      }
      if (facultiesCount < targetFaculties) {
        setFacultiesCount(facultiesCount + 1);
      }
      if (alumniCount < targetAlumni) {
        setAlumniCount(alumniCount + 1);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [studentsCount, programsCount, facultiesCount, alumniCount]);

  return (
    <div className="grades" data-aos="fade-up">
      <div className="about-Title">
        <h1>Our Success</h1>
        <hr />
      </div>
      <p className="center_div pr-4 pl-4">
        It will exceed more than ten thousand the number of students who studied
        in Al Jamia during different periods which includes eminent
        personalities such as prominent Islamic scholars, leaders of Islamic
        Movement, writers, academicians and media persons who are rendering
        commendable services in various fields throughout India and abroad.
      </p>
      <div className="grades-items" data-aos="fade-up">
        <div className="grid-items">
          {/* <Image
            src="/Group 2059.svg"
            width={280}
            height={80}
            alt="Picture of the author"
            className="grade-logo"
          /> */}
          <h2 className="grades-digits">{studentsCount}K+</h2>
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
          <h2 className="grades-digits">{programsCount}K+</h2>
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
          <h2 className="grades-digits">{facultiesCount}K+</h2>
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
          <h2 className="grades-digits">{alumniCount}K+</h2>
          <h3 className="grades-title">Alumni</h3>
        </div>
      </div>
    </div>
  );
};

export default Grades;
