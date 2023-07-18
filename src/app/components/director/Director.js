import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Director.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClockflip } from '@fortawesome/free-solid-svg-icons';

const Director = () => {
  return (
    <div>
      <div className="director">
        <div className="director-heading">
          <h2> Message From The Director</h2>
        </div>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="director-img">
                <img src="person.png" alt="" width="100%" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="director-des">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, laborum perspiciatis. Veritatis, accusamus?
                  Praesentium, excepturi iste porro quo deserunt ducimus
                  consectetur iure, dignissimos animi Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Corporis autem excepturi fuga
                  dolor obcaecati neque, aspernatur tenetur, eum molestiae
                  alias, est nam? Placeat magnam necessitatibus hic sequi esse,
                  perferendis itaque! quas perspiciatis obcaecati. Nobis, facere
                  animi?
                </p>
              </div>
              <div className="person-detail">
                <h4>Dr Abdulslam Ahmen</h4>
                <p>Rector Al Jamia Al Islamia</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="facualies">
        <Container>
          <div className="fac-title">
            <h1>Faculties</h1>
          </div>
          <div className="fac-des">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              doloribus molestiae tempore facere libero culpa sapiente. Ipsam
              esse natus mollitia nobis at doloremque quisquam numquam tenetur
              obcaecati? Illum, veritatis ut!
            </p>
          </div>
          <div className="fac-btn">
            <button> Take a Tour</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Director;
