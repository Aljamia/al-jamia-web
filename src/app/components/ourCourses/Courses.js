import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Courses.css";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    // Function to fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://website-builder-api.azurewebsites.net/api/v1/course");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setCoursesData(data.response); // Assuming the "response" key holds the array of courses
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
      
  const trimDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  return (
    <div className="course">
      <Container>
        <div className="course-header">
          <h1>Our Courses</h1>
        </div>
        <div className="course-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            neque dolorem consectetur at molestiae quidem, eligendi maxime
            architecto similique deserunt quas, nemo, voluptates voluptatibus ab
            ipsum sequi! Expedita, possimus iure.
          </p>
        </div>
        <div className="portfolio">
          <ul id="portfolio-flters">
            <li data-filter=".first">Certificate</li>
            <li data-filter=".second">Diploma</li>
            <li data-filter=".third">Short Term</li>
          </ul>
          <div className="portfolio-container">
            {/* Map over the coursesData and create a Card for each course */}
            {coursesData.map((course) => (
              <Card key={course._id} className="portfolio-card shadow-sm">
                <Card.Img variant="top" src="/Rectangle 970.jpg" />
                <Card.Body>
                  <Card.Title className="portfolio-title">{course.courseName}</Card.Title>
                  <Card.Text className="portfolio-text">{trimDescription(course.description, 65)}</Card.Text>
                  <Button variant="primary btn-primary" className="portfolio-btn">
                    Learn More
                  </Button>
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
