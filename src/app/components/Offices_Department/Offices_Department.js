/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { Container, Row, Col } from "react-bootstrap";
import "./Offices_Department";

const Offices_Department = () => {
  return (
    <div>
      <div className="AboutUspage-items">
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
                <h1 className="TitleStyle center_aln p-1">
                  Offices & Department
                </h1>

                <div className="row">
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-building"></i>
                      </div>
                      <h3>Rector’s Office </h3>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-face-smile"></i>
                      </div>
                      <h3>Deputy Rector’s Office</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-building"></i>
                      </div>
                      <h3>Vice President’s Office </h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-building"></i>
                      </div>
                      <h3>Administrative Chairman’s Office</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-business-time"></i>
                      </div>
                      <h3>Administrative Officer </h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-building"></i>
                      </div>
                      <h3>Dean’s Offices</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-building"></i>
                      </div>
                      <h3>Students Affair’s Office </h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-ticket"></i>
                      </div>
                      <h3>Research Department</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-ticket"></i>
                      </div>
                      <h3>Admission and Enrollment </h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-pen"></i>
                      </div>
                      <h3>Department of Examination</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-book "></i>
                      </div>
                      <h3>Library</h3>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <div className="icon-wrapper">
                        <i className="fas fa-person"></i>
                      </div>
                      <h3>Human Resource Development </h3>
                    </div>
                  </div>
                </div>
              </section>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Offices_Department;
