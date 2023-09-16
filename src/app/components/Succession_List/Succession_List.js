"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { getManagementCommitee } from "@/app/hooks/UseApi";
import Image from "next/image";

const Succession_List = () => {
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
            <div class="row">
              <h1 class="TitleStyle center_aln">
                Succession List of Heads of the University
              </h1>
              {commitee.map((item) => (
                <div class="col-xs-12 col-sm-6 col-lg-3">
                  <Card className="faculties-card" key={item.id}>
                    <Card.Img
                      variant="top"
                      src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                    />
                    <Card.Body>
                      <Card.Title className="faculties-card-title">
                        Dr. Kootil Mohammed Ali
                      </Card.Title>

                      <Card.Text className="faculties-card-text">
                        (Chairman)
                      </Card.Text>

                      <Button
                        variant="primary btn-primary-faculties"
                        onClick={() => handleShow(item)}
                      >
                        View
                      </Button>
                    </Card.Body>

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
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Succession_List;
