/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Col, Container, Row } from "react-bootstrap";
import Alumni_Awards_gallery from "../Alumni_Awards_gallery/Alumni_Awards_gallery";

function Recognition_Awards_data() {
  return (
    <div>
      <div className="AboutUspage-ourMission">
        <Container>
          <Row>
            <section>
              <h1 className="TitleStyle center_aln">Recognition & Awards</h1>
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
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Recognition_Awards_data;
