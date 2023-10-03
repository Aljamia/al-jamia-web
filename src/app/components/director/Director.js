import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Director.css";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClockflip } from '@fortawesome/free-solid-svg-icons';

const Director = () => {
  const [director, setDirector] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get(
        "https://aljamia-api-ztjhx.ondigitalocean.app/api/v1/boardof-director"
      )
      .then((response) => {
        setDirector(response.data.response);
        console.log("director data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div id="Director_message">
      <div className="director">
        <Container>
          <Row>
            <Col xl={5}>
              <div className="director-img">
                <Image
                  src="/person.png"
                  layout="intrinsic"
                  width={1000}
                  height={500}
                  alt="Image"
                />
              </div>
            </Col>
            <Col xl={7}>
              <div className="director-des">
                <div className="director-heading">
                  <h1> Message From The Rector</h1>
                </div>
                <p className="director-des">{director[0]?.enDescription}</p>
              </div>
              <div className="person-detail mb-5">
                <h4>{director[0]?.enName}</h4>
                <p>Rector Al Jamia Al Islamiya</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Director;
