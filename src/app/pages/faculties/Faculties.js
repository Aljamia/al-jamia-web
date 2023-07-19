// Import the required modules
"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import "./Facuties.css";

const Faculties = () => {
  // Create an array of state variables for each card's modal visibility
  const [showModals, setShowModals] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Function to handle the click event for each card's "Learn More" button
  const handleShowModal = (index) => {
    const updatedShowModals = showModals.map((_, i) => i === index);
    setShowModals(updatedShowModals);
  };

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
          <Card className="faculties-card shadow-sm">
            <Card.Img variant="top" src="/image 14.jpg" />
            <Card.Body>
              <Card.Title className="faculties-card-title">
                Card Title 1
              </Card.Title>
              <Card.Text className="faculties-card-text">
                Some quick example text
              </Card.Text>
              <Button
                variant="primary btn-primary-faculties"
                onClick={() => handleShowModal(0)}
              >
                Learn More
              </Button>
            </Card.Body>
            <Modal
              show={showModals[0]}
              onHide={() =>
                setShowModals((prev) =>
                  prev.map((_, i) => (i === 0 ? false : _))
                )
              }
              size="lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Row className="faculties-modalitems">
                  <Col xl={6} xs={12} sm={12}>
                    <Card className="faculties-cardmodal shadow-sm">
                      <Card.Img variant="top" src="/image 14.jpg" />
                    </Card>
                  </Col>
                  <Col xl={6} xs={12} sm={12}>
                    <Card.Title className="faculties-cardmodal-title">
                      Card Title 1
                    </Card.Title>
                    <Card.Text className="faculties-cardmodal-text">
                      Some quick example text
                    </Card.Text>
                    <Card.Text className="faculties-cardmodal-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsa hic ipsam quibusdam nesciunt impedit dolorem eos
                      accusantium, asperiores magnam molestias et sapiente non
                      similique nihil necessitatibus modi quisquam iusto ullam.
                      hello
                    </Card.Text>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </Card>

          <Card className="faculties-card shadow-sm">
            <Card.Img variant="top" src="/image 14.jpg" />
            <Card.Body>
              <Card.Title className="faculties-card-title">
                Card Title 1
              </Card.Title>
              <Card.Text className="faculties-card-text">
                Some quick example text
              </Card.Text>
              <Button
                variant="primary btn-primary-faculties"
                onClick={() => handleShowModal(1)}
              >
                Learn More
              </Button>
            </Card.Body>
            <Modal
              show={showModals[1]}
              onHide={() =>
                setShowModals((prev) =>
                  prev.map((_, i) => (i === 1 ? false : _))
                )
              }
              size="lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Row className="faculties-modalitems">
                  <Col xl={6} xs={12} sm={12}>
                    <Card className="faculties-cardmodal shadow-sm">
                      <Card.Img variant="top" src="/image 14.jpg" />
                    </Card>
                  </Col>
                  <Col xl={6} xs={12} sm={12}>
                    <Card.Title className="faculties-cardmodal-title">
                      Card Title 1
                    </Card.Title>
                    <Card.Text className="faculties-cardmodal-text">
                      Some quick example text
                    </Card.Text>
                    <Card.Text className="faculties-cardmodal-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsa hic ipsam quibusdam nesciunt impedit dolorem eos
                      accusantium, asperiores magnam molestias et sapiente non
                      similique nihil necessitatibus modi quisquam iusto ullam.
                      hello
                    </Card.Text>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </Card>

          <Card className="faculties-card shadow-sm">
            <Card.Img variant="top" src="/image 14.jpg" />
            <Card.Body>
              <Card.Title className="faculties-card-title">
                Card Title 1
              </Card.Title>
              <Card.Text className="faculties-card-text">
                Some quick example text
              </Card.Text>
              <Button
                variant="primary btn-primary-faculties"
                onClick={() => handleShowModal(2)}
              >
                Learn More
              </Button>
            </Card.Body>
            <Modal
              show={showModals[2]}
              onHide={() =>
                setShowModals((prev) =>
                  prev.map((_, i) => (i === 2 ? false : _))
                )
              }
              size="lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Row className="faculties-modalitems">
                  <Col xl={6} xs={12} sm={12}>
                    <Card className="faculties-cardmodal shadow-sm">
                      <Card.Img variant="top" src="/image 14.jpg" />
                    </Card>
                  </Col>
                  <Col xl={6} xs={12} sm={12}>
                    <Card.Title className="faculties-cardmodal-title">
                      Card Title 1
                    </Card.Title>
                    <Card.Text className="faculties-cardmodal-text">
                      Some quick example text
                    </Card.Text>
                    <Card.Text className="faculties-cardmodal-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsa hic ipsam quibusdam nesciunt impedit dolorem eos
                      accusantium, asperiores magnam molestias et sapiente non
                      similique nihil necessitatibus modi quisquam iusto ullam.
                      hello
                    </Card.Text>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </Card>
        </div>
      </div>
      <div className="Faculties-sharia shadow-lg">
        <div className="Faculties-sharia-leader">
          <h3 className="Faculties-leader-title">Sharia Facalties</h3>
          <div className="Faculties-leader-card">
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(3)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[3]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 3 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-2*/}
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(4)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[4]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 4 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-4 */}
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(5)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[5]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 5 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-5 */}
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(6)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[6]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 6 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-6 */}
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(7)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[7]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 7 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-7 */}
            <Card className="faculties-card shadow-sm">
              <Card.Img variant="top" src="/image 14.jpg" />
              <Card.Body>
                <Card.Title className="faculties-card-title">
                  Card Title 1
                </Card.Title>
                <Card.Text className="faculties-card-text">
                  Some quick example text
                </Card.Text>
                <Button
                  variant="primary btn-primary-faculties"
                  onClick={() => handleShowModal(8)}
                >
                  Learn More
                </Button>
              </Card.Body>
              <Modal
                show={showModals[8]}
                onHide={() =>
                  setShowModals((prev) =>
                    prev.map((_, i) => (i === 8 ? false : _))
                  )
                }
                size="lg"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Row className="faculties-modalitems">
                    <Col xl={6} xs={12} sm={12}>
                      <Card className="faculties-cardmodal shadow-sm">
                        <Card.Img variant="top" src="/image 14.jpg" />
                      </Card>
                    </Col>
                    <Col xl={6} xs={12} sm={12}>
                      <Card.Title className="faculties-cardmodal-title">
                        Card Title 1
                      </Card.Title>
                      <Card.Text className="faculties-cardmodal-text">
                        Some quick example text
                      </Card.Text>
                      <Card.Text className="faculties-cardmodal-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa hic ipsam quibusdam nesciunt impedit dolorem
                        eos accusantium, asperiores magnam molestias et sapiente
                        non similique nihil necessitatibus modi quisquam iusto
                        ullam. hello evrey
                      </Card.Text>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card>
            {/* card-8 end */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculties;
