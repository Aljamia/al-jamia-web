/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container } from "react-bootstrap";
import Link from "next/link";
import "../../globals.css";
import HomeCourses from "@/app/pages/course/HomeCourses";

const Courses = () => {
  return (
    <div className="course">
      <Container>
        <div className="course-headerpage">
          <div className="about-Title">
            <h1>Academics</h1>
          </div>
          <div className="course-desc">
            <p>
              Al Jamia offers excellent academic programs with specializations
              designed to address the needs of both the nation and society.
              These programs encompass the Preparatory Program, Bachelor's
              Programs, Master's Programs, Diplomas, and Certificates.
            </p>
          </div>
          <HomeCourses />
          <div className="btn">
            <Link href="/colleges" style={{ textDecoration: "none" }}>
              <button>
                {" "}
                <div className="icon_arrow_abt">
                  <span className="p-3">Explore More</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                    <path
                      d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                      fill="#619A46"
                    />
                  </svg>
                </div>{" "}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
