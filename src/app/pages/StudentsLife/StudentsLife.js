"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import "./StudentsLife.css";
import Facilities from "../ourfacilities/Facilities";

function StudentsLife() {
  return (
    <div>
      <PageHeader />

      <div className="AboutUspage-img">
        <Image unoptimized={true}
          unselectable={true}
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          style={{height:"50%",width:"100%"}}
          alt="Image"
        />
      </div>
      <div className="AboutUspage-items">
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image unoptimized={true}
          unselectable={true}
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Student Success & Development
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  ratione ex, quo molestiae, vel sit veritatis distinctio enim
                  nulla sunt eligendi natus nihil iste explicabo quam assumenda
                  at ut! Sit! A quas eveniet saepe ad quo perferendis
                  voluptatum. Porro enim rem alias corrupti qui dolores libero
                  dignissimos fugit harum sed doloremque illum officia ea et
                  magni laborum, ex obcaecati! Dicta.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Student Services
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  ratione ex, quo molestiae, vel sit veritatis distinctio enim
                  nulla sunt eligendi natus nihil iste explicabo quam assumenda
                  at ut! Sit! A quas eveniet saepe ad quo perferendis
                  voluptatum. Porro enim rem alias corrupti qui dolores libero
                  dignissimos fugit harum sed doloremque illum officia ea et
                  magni laborum, ex obcaecati! Dicta.
                </p>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image unoptimized={true}
          unselectable={true}
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image unoptimized={true}
          unselectable={true}
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Students Life Services
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  ratione ex, quo molestiae, vel sit veritatis distinctio enim
                  nulla sunt eligendi natus nihil iste explicabo quam assumenda
                  at ut! Sit! A quas eveniet saepe ad quo perferendis
                  voluptatum. Porro enim rem alias corrupti qui dolores libero
                  dignissimos fugit harum sed doloremque illum officia ea et
                  magni laborum, ex obcaecati! Dicta.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Facilities />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StudentsLife;
