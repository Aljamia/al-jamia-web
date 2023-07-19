"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React from "react";
import "./AboutUs.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="AboutUspage">
      <PageHeader />
      <div className="AboutUspage-header">
        <div className="AboutUspage-title">About Us</div>
      </div>
      <div className="AboutUspage-img">
        <Image
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>
      <div className="AboutUspage-desc">
        <Container>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
          tempora ipsa rem officiis voluptates, culpa dolor molestias itaque
          dignissimos nam ea animi aut, eos nihil earum obcaecati eum porro
          corporis! Illo sapiente modi libero repudiandae dolores praesentium
          inventore incidunt ullam consectetur impedit natus ab amet molestias
          ea doloremque quas non nesciunt nulla sunt vel labore, corporis odio
          iure. Magni, veritatis! Quod autem, necessitatibus velit modi enim ab
          veritatis sint? Earum ut modi assumenda officiis autem quibusdam a,
          molestiae fuga! Nobis, illo molestias quo magnam voluptates fugiat
          debitis est cupiditate culpa? Quam cumque incidunt itaque obcaecati
          impedit suscipit quidem eveniet vero qui tenetur, veritatis illo
          accusantium error fugiat, facere iusto debitis ea minus iure quo eius.
          Itaque aliquid natus obcaecati tempora.
        </Container>
      </div>
      <div className="AboutUspage-vision">
        <Container>
          <Row>
            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-vision-title">Our Vision</div>
              <p className="AboutUspage-vision-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati officia excepturi aspernatur culpa alias. Voluptatum,
                repellendus. Voluptates quos vel optio voluptate natus similique
                fugit minima illum, ducimus, repudiandae repellat voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit facilis tempore repudiandae quam beatae, ab nam iure
                mollitia voluptates, autem necessitatibus, numquam deserunt
                quibusdam pariatur recusandae sequi sint error? Iusto?
              </p>
            </Col>
            <Col xl={6} lg={6} xs={12}>
              <div className="AboutUspage-vision-img">
                <Image
                  src="/image 7.png"
                  layout="fixed" // Use layout="responsive" for responsiveness
                  width={600} // Provide the width of the image
                  height={300} // Provide the height of the image (optional)
                  alt="Image"
                />
              </div>
            </Col>
          </Row>
          <div className="AboutUspage-ourMission">
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-vision-img">
                  <Image
                    src="/image 7.png"
                    layout="fixed" // Use layout="responsive" for responsiveness
                    width={600} // Provide the width of the image
                    height={300} // Provide the height of the image (optional)
                    alt="Image"
                  />
                </div>
              </Col>
              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-vision-title"
                  id="our-mission-header"
                >
                  Our Mission
                </div>
                <p className="AboutUspage-vision-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati officia excepturi aspernatur culpa alias.
                  Voluptatum, repellendus. Voluptates quos vel optio voluptate
                  natus similique fugit minima illum, ducimus, repudiandae
                  repellat voluptas. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Suscipit facilis tempore repudiandae quam
                  beatae, ab nam iure mollitia voluptates, autem necessitatibus,
                  numquam deserunt quibusdam pariatur recusandae sequi sint
                  error? Iusto?
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="AboutUspage-ourCampus shadow-lg">
        <Container>
          <div className="AboutUspage-vision-title">Campus Life</div>

          <div className="AboutUspage-gallery">
            <div className="AboutUspage-gallery-img">
              <img
                src="/Rectangle 990.jpg"
                alt=""
                width={"100%"}
                className="Aboutpage-images"
              />
            </div>
            <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 993.png" alt="" width={"100%"} />
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
            </div>
            <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
              <img src="/Rectangle 994.jpg" alt="" width={"100%"} />
            </div>
            <div className="AboutUspage-gallery-img">
              <img src="/Rectangle 993.png" alt="" width={"100%"} />
              <img src="/Rectangle 991.jpg" alt="" width={"100%"} />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
