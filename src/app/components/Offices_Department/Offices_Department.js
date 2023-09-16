"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "./Offices_Department";
import { getManagementCommitee } from "@/app/hooks/UseApi";
import Image from "next/image";

const Offices_Department = () => {
  const [commitee, Setcommitee] = useState([]);
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  useEffect(() => {
    const fetchCommitee = async () => {
      const data = await getManagementCommitee();
      console.log(data);
      Setcommitee(data?.response);
    };
    fetchCommitee();
  }, []);

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
                <h1 class="TitleStyle center_aln p-5">Offices & Department</h1>

                <div class="row">
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-hammer"></i>
                      </div>
                      <h3>Rector’s Office </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-brush"></i>
                      </div>
                      <h3>Vice President’s Office </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-wrench"></i>
                      </div>
                      <h3>Administrative Chairman’s Office</h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-truck-pickup"></i>
                      </div>
                      <h3>Deputy Rector’s Office</h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-broom"></i>
                      </div>
                      <h3>Dean’s Offices </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Students Affair’s Office </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Administrative Officer </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Admission and Enrollment </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Department of Examination</h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Library</h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Human Resource </h3>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <div class="icon-wrapper">
                        <i class="fas fa-plug"></i>
                      </div>
                      <h3>Accounts </h3>
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
