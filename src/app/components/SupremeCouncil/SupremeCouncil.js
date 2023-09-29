"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { getSupreamCouncil } from "@/app/hooks/UseApi";

const SupremeCouncil = () => {
  const [commitee, Setcommitee] = useState([]);
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  useEffect(() => {
    const fetchSupreamCouncil = async () => {
      const data = await getSupreamCouncil();
      console.log(data);
      Setcommitee(data?.response);
    };
    fetchSupreamCouncil();
  }, []);

  return (
    <div>
      <div className="AboutUspage-items">
        <div className="AboutUspage-ourMission">
          <Container>
            <div className="row">
              <h1 className="TitleStyle center_aln">Supreme Council</h1>
              {commitee.map((item) => (
                <>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <Card className="faculties-card" key={item.id}>
                      <Card.Img
                        variant="top"
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                      />
                      <Card.Body>
                        <Card.Title className="faculties-card-title">
                          {item.name}
                        </Card.Title>

                        <Card.Text className="faculties-card-text">
                          {item.designation}
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
                                {modalVal?.name}
                              </Card.Title>
                              <Card.Text className="faculties-cardmodal-text">
                                {modalVal?.designation}
                              </Card.Text>
                              <Card.Text className="faculties-cardmodal-desc">
                                {modalVal?.description}
                              </Card.Text>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>
                    </Card>
                  </div>
                </>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SupremeCouncil;
