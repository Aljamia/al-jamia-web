import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courses.css";
import { getCourse } from "@/app/hooks/UseApi";
import Link from "next/link";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [activeField, setActiveField] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourse();
      setCourse(data?.response);
    };
    fetchCourse();
  }, []);

  return (
    <div className="course">
      <Container>
        <div className="course-header">
          <h1>Our Courses</h1>
        </div>
        <div className="course-desc">
          {course.map((item) => (
            <p key={item}>{item.eligibility}</p>
          ))}
        </div>
        <div className="portfolio">
          <ul id="portfolio-flters">
            <li data-filter=".first">Certificate</li>
            <li data-filter=".second">Diploma</li>
            <li data-filter=".third">Short Term</li>
          </ul>
          <div className="portfolio-container">
            {course.map((item) => (
              <Card className="portfolio-card shadow-sm" key={item}>
                <Card.Img
                  variant="top"
                  src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                />
                <Card.Body>
                  <Card.Title className="portfolio-title">
                    Maqasid Al Sharia
                  </Card.Title>
                  <Card.Text className="portfolio-text">
                    <> {item.description.substring(0, 75)}...</>
                  </Card.Text>
                  <Link href={"/coursepage"} style={{ textDecoration: "none" }}>
                    <Button
                      variant="primary btn-primary"
                      className="portfolio-btn"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
