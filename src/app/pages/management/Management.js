"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "./Management.css";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Footer from "@/app/components/footer/Footer";
import { getManagementCommitee } from "@/app/hooks/UseApi";

const Management = () => {
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
    <div className="Faculties">
      <PageHeader />
      <div className="Faculties-header">
        <Container>
          <h2 className="Faculties-title">Supreme Council</h2>
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
        <h3 className="Faculties-leader-title">Board of Director</h3>
        <div className="Faculties-leader-card">
          {commitee.map((item) => (
            <Card className="faculties-card shadow-sm" key={item.id}>
              <Card.Img
                variant="top"
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
              />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  {item.enName}
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  {item.enDescription}
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShow(item)}
                >
                  View
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
      <div className="Supreme-council-members">
        <h3 className="Faculties-leader-title">Members</h3>
        <>
          <div className="members-leader-cards">
            {commitee.map((item) => (
              <Card className="members-cards shadow-sm" key={item.id}>
                <Card.Img
                  variant="top"
                  src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                  className="members-card-img"
                />
                <Card.Body>
                  <Card.Title className="members-card-title">
                    {item.enName}
                  </Card.Title>
                  <Card.Text className="members-card-text">
                    {item.enDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Management;
