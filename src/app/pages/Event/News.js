"use client"
import "./News.css"
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "@/app/components/header/Header";
import Link from "next/link";

const News = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true, // Set the vertical option to true
        verticalSwiping: true, // Enable vertical swiping
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
      const MAX_DESCRIPTION_LENGTH = 100; // Set the maximum length for the description
    
    function trimDescription(description) {
      if (description.length <= MAX_DESCRIPTION_LENGTH) {
        return description;
      }
      return description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
    }
    
    
       // Set initial value to an empty array
  const [newsData, setNewsData] = useState([]);

  // Initialize state variables for h1, img, and p tags
  const [h1Content, setH1Content] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [pContent, setPContent] = useState('');
    
   
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://website-builder-api.azurewebsites.net/api/v1/news');
        const data = await response.json();
        setNewsData(data.response.slice(0, 4)); // Slice the array to extract the first 4 elements

        // Check if there is data available before setting the state
        if (data.response.length > 0) {
          setH1Content(data.response[0]?.title);
          setImgSrc(`https://event-manager.syd1.cdn.digitaloceanspaces.com/${data.response[0]?.image}`);
          setPContent(data.response[0]?.description);
        } else {
          // Set the state variables to empty if the array is empty
          setH1Content('');
          setImgSrc('');
          setPContent('');
        }

        console.log("news data", data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setNewsData([]);
        setH1Content('');
        setImgSrc('');
        setPContent('');
      }
    }

    fetchData();
  }, []);

  const handleReadMoreClick = (containerId) => {
    // Get the container element based on the provided ID
    var container = document.getElementById(containerId);

    // Scroll to the container
    container.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <div>
       <Header/>
      <div className='news-section'>
     
       <Container id="news-container">
          <div className="header-news" >
            <div className="news-title">
              <h1>{h1Content}</h1>
            </div>
            <div className="new-img">
              <img src={imgSrc} alt="" width="100%" />
            </div>
            <div className="news-para">
              <p>{pContent}</p>
            </div>
          </div>
        </Container>
     

        <div className="event-first-section">
          <Container>
            <Row>
              <Col xl={4}>
                <div className="event-img">
                  <img src="image 13.png" alt="" width="100%" />
                </div>
                <div className="event-btn">
                  <button>Up Coming Events</button>
                  <span>{new Date(newsData[0]?.date).toDateString()}</span>
                </div>
                <div className="event-des">
                  <h4>
                  {newsData[0]?.title}
                  </h4>
                  <p>
                  <p>{newsData[0]?.description.substring(0,170)}...</p>
                  </p>
                </div>
                <div className="learn-btn">
                <button onClick={() => handleReadMoreClick('news-container')}>
                    Read More
                  </button>
                </div>
              </Col>
              <Col xl={8}>
                <div className="carouselevent">
                <Slider {...settings} className="event-slick">
                {newsData.map((newsItem) => (
    <>
      <div className="right-event-caro">
      <div className="righttevent-caro-des">
        <h4>{newsItem.title}</h4>
        <h5>{new Date(newsItem.date).toDateString()}</h5>
        <p>{trimDescription(newsItem.description)}</p>
        <div className="learn-btn">
        <Link href={`/Event/${newsItem.id}`}>
              <b>Read More</b>
            </Link>
        </div>
      </div>
      <div className="right-evnt-img">
      <img src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${newsItem.image}`} alt={newsItem.title} width="100%"  />
      </div>
    </div>
    
    </>
    ))}
  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default News
