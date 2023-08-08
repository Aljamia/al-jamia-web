"use client";
import React from "react";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import "./Facilities.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "@/app/components/footer/Footer";
const Facilities = () => {
  return (
    <div>
      <div className="facilities">
        <div className="facilities-header-page">
          <PageHeader />
        </div>
        <div className="facilities-header-title">
          <h2 className="facilities-title">Our Facilities</h2>
          <p className="facilities-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            inventore in earum sunt velit doloribus, eos illo veritatis
            excepturi consectetur est a totam fuga eaque debitis placeat quidem
            esse ratione!Lorem Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore cumque eum recusandae ipsam, dolores
            voluptatibus reprehenderit sint, mollitia placeat architecto dolorem
            magni provident cupiditate earum officiis iste sapiente temporibus
            adipisci?
          </p>
        </div>
        <div className="facilities-data">
          <div className="facilities-sub-title">Infrastructure</div>
          <Container>
            <Row>
              <Col x={6}>
                {" "}
                <Image
                  src="/Rectangle 991.jpg"
                  alt="Loading"
                  fluid
                  className="img-responsive"
                />
              </Col>
              <Col xl={6}>
                <div className="facilities-data-items">
                  <h3> 40+ Smart class rooms</h3>
                  <h3>5 digital labs with 70 Computers</h3>
                  <h3>6 Hostels</h3>
                  <h3>1000 Seater Mess hall</h3>
                  <h3>2 Mentors hub with 10 Mentors</h3>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <div className="facilities-data-items">
                  <h3>2 medical Rooms</h3>
                  <h3>1500 Seater Conference hall</h3>
                  <h3>Video conference Hall</h3>
                  <h3>3 Students corners (outside)</h3>
                  <h3>Digital recording studio</h3>
                </div>
              </Col>
              <Col x={6}>
                {" "}
                <Image
                  src="/the library.jpg"
                  alt="Loading"
                  fluid
                  className="img-responsive"
                />
              </Col>
            </Row>
          </Container>
          <div className="facilities-sub-title">Physical Fitness</div>
          <Container>
            <Row>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img
                    src="/Kerala United football school selection trials in Kottayam.jpg"
                    alt=""
                    className="first-images"
                  />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img src="/minu_d.webp" alt="" className="first-images" />
                </div>
              </Col>
              <Col>
                {" "}
                <div className="facilities-images facilities-images-list">
                  <img src="/100548207.webp" alt="" className="first-images" />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img
                    src="/parker-stewart.jpg"
                    alt=""
                    className="first-images"
                  />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img
                    src="/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.webp"
                    alt=""
                    className="first-images"
                  />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img
                    src="/Tennis-660x495.jpg"
                    alt=""
                    className="first-images"
                  />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img src="/images.jpeg" alt="" className="first-images" />
                </div>
              </Col>
              <Col>
                <div className="facilities-images facilities-images-list">
                  <img
                    src="/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.webp"
                    alt=""
                    className="first-images"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="facilities-sub-title">Our Atmosphere</div>
          <Container>
            <Row>
              <Col x={6}>
                {" "}
                <Image
                  src="/1457664.jpg"
                  alt="Loading"
                  fluid
                  className="img-responsive"
                />
              </Col>
              <Col xl={6}>
                <div className="facilities-data-items">
                  <h3>
                    50% of the campus energy is utilized from solar sources
                  </h3>
                  <h3>Purified drinking water facility to all buildings</h3>
                  <h3>Eco-friendly waste Management system</h3>
                  <h3>Fruit plant with 100 type fruits</h3>
                  <h3>2 Mentors hub with 10 Mentors</h3>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <div className="facilities-data-items">
                  <h3>Agricultural Nursery</h3>
                  <h3>Salient and natural campus atmosphere</h3>
                  <h3>
                    24 Family quarters (for national and international
                    faculties)
                  </h3>
                  <h3>3 Students corners (outside)</h3>
                </div>
              </Col>
              <Col x={6}>
                {" "}
                <Image
                  src="/1457664.jpg"
                  alt="Loading"
                  fluid
                  className="img-responsive"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilities;
