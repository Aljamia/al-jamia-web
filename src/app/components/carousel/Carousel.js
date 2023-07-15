import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import React from "react";
import Image from "next/image";
import Header from "../header/Header";

const CarouselComponent = () => {
  return (
    <div>
      <div className="header">
        <Header /> {/*imported navabr from header */}
        <div className="carousel-header">
          <Carousel indicators controls={false} className="carousel">
            <Carousel.Item interval={1000}>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="First slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption ">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="Second slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100">
                <Image
                  src="/image 2.png"
                  alt="Third slide"
                  width={1000}
                  height={500}
                  layout="responsive"
                />
              </div>
              <Carousel.Caption>
                <div className="carousel-caption">
                  <p className="animate__animated animate__bounceIn">
                    group of individuals involved in persistent social
                    interaction, or a large social group sharing the same
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
