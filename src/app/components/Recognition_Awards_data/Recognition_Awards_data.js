/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Alumni_Awards_gallery from "../Alumni_Awards_gallery/Alumni_Awards_gallery";

function Recognition_Awards_data() {
  return (
    <div className="">
      <div className="AboutUspage-ourMission">
        <Container>
          <Row>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
              rel="stylesheet"
            />

            <section>
              <h1 class="TitleStyle center_aln pt-2 pb-2">
                Recognition Awards
              </h1>
              <p>
                We take immense pride in celebrating the achievements of our
                remarkable alumni. Our Alumni Recognition & Awards program
                acknowledges outstanding accomplishments in various fields. It's
                a way of honoring the excellence, leadership, and positive
                impact that our graduates have on society. Join us in applauding
                their remarkable journeys and contributions.
              </p>

              <Container>
                <Row>
                  <Col xl={12} lg={12} xs={12}>
                    <Alumni_Awards_gallery />
                  </Col>
                </Row>
              </Container>
            </section>

            <h1 class="TitleStyle">
              <hr />
              Our Publications
            </h1>
            <p>
              Our alumni continue to inspire through their stories, research,
              and expertise. Alumni Publications is our way of sharing their
              valuable insights, accomplishments, and knowledge with the world.
              Explore these publications to stay connected with our alumni
              community and stay informed about their diverse contributions
              across different domains
            </p>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Recognition_Awards_data;
