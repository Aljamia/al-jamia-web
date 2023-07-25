import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Director.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClockflip } from '@fortawesome/free-solid-svg-icons';

const Director = () => {
  const [director, setDirector] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://website-builder-api.azurewebsites.net/api/v1//boardof-director")
      .then((response) => {
        setDirector(response.data.response);
        console.log("director data",response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="director">
        <div className="director-heading">
          <h1> Message From The Director</h1>
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
                 {director[0]?.enDescription}
                </p>
              </div>
              <div className="person-detail">
                <h4>{director[0]?.enName}</h4>
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
