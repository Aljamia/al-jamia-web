import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Department.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Department = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [department, setDepartment] = useState([]); // Set initial value to an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://website-builder-api.azurewebsites.net/api/v1/department');
        const data = await response.json();
        setDepartment(data.response.slice(0, 4)); // Slice the array to extract the first 3 elements
        console.log('department datat:', data.response); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setDepartment([]);
      }
    }
  
    fetchData();
  }, []);

  return (
    <div>
      <div className='deparment-section'>
        <Container>
            <div className='department-title'>
                <h1>Departments</h1>
            </div>
            <div className='department-des'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum corporis maxime possimus a esse temporibus at dolore nam culpa minima accusamus beatae, alias ipsum harum, reprehenderit laudantium distinctio quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore itaque odio distinctio officia, adipisci aliquam voluptatibus ipsa quia maxime modi corrupti repudiandae a cupiditate quam voluptates iure iste, quod excepturi.</p>
            </div>
            <div className="carousel-section">
            <Slider {...settings} className="department-slick">
            {department.map((item) => (
          <Card key={item._id} className="portfolio-card shadow-sm">
            <Card.Img variant="top" src="book.png" />
            <Card.Body>
              <Card.Text className="portfolio-text">
              <h3>{item.description.substring(0,40)}...</h3>
              </Card.Text>
              <Button variant="primary btn-primary" className="portfolio-btn">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        ))}
              </Slider>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Department
