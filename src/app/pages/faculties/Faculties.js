// Import the required modules
"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import "./Facuties.css";
import { getFaculties } from "@/app/hooks/UseApi";

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  useEffect(() => {
    const fetchFaculties = async () => {
      const data = await getFaculties();
      console.log(data);
      setFaculties(data?.response);
    };
    fetchFaculties();
  }, []);

  return (
    <div className="Faculties">
      <PageHeader />
      <div className="Faculties-header">
        <Container>
          <h2 className="Faculties-title">Faculties</h2>
          <p className="Faculties-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            delectus nam repudiandae quaerat sequi id consequuntur obcaecati
            corrupti consequatur aperiam culpa mollitia fugit, fugiat eaque
            praesentium sint assumenda dolores omnis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam temporibus quas enim? Iste,
            distinctio nobis. Quibusdam hic quod tempora recusandae rem eius
            veritatis nisi perferendis eveniet maiores, sunt autem accusantium!
            Dolor atque non doloribus, voluptatibus animi nulla sed soluta
            accusamus quisquam ipsam praesentium architecto corporis culpa quis
            facere iusto. Blanditiis inventore, commodi a sint consectetur
            incidunt possimus nostrum consequuntur natus!
          </p>
        </Container>
      </div>
      <div className="Faculties-ourleader">
        <h3 className="Faculties-leader-title">Our Leadership</h3>
        <div className="Faculties-leader-card">
          {faculties.map((item) => (
            <Card className="faculties-card shadow-sm" key={item.id}>
              <Card.Img
                variant="top"
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
              />

              <Card.Body>
                <Card.Title className="faculties-card-title">
                  <span className="name">{item.enName}</span>
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  {item.enDesignation}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShow(item)}
                  className="btn-primary-faculties"
                >
                  Learn More
                </Button>
                <Modal
                  key={modalVal?.id}
                  show={show}
                  onHide={handleClose}
                  size="lg"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Row className="faculties-modalitems">
                      <Col xl={6} xs={12} sm={12}>
                        <Card className="faculties-cardmodal shadow-sm">
                          <Card.Img
                            variant="top"
                            src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${modalVal?.image}`}
                          />
                        </Card>
                      </Col>
                      <Col xl={6} xs={12} sm={12}>
                        <Card.Title className="faculties-cardmodal-title">
                          {modalVal?.enName}
                        </Card.Title>
                        <Card.Text className="faculties-cardmodal-text">
                          {modalVal?.enDesignation}
                        </Card.Text>
                        <Card.Text className="faculties-cardmodal-desc">
                          {modalVal?.enDescription}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculties;
