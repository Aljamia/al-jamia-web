import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Director.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClockflip } from '@fortawesome/free-solid-svg-icons';

const Director = () => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://website-builder-api.azurewebsites.net/api/v1//boardof-director');
        const data = await response.json();
        setBoardData(data.response);
        console.log("board data", data.response); // Console the data here
      } catch (error) {
        console.error('Error fetching data:', error);
        setBoardData([]);
      }
    }

    fetchData();
  }, []);
  const directorData = boardData.find(item => item.enName === 'DR.ABDUSSALAM AHMED');
  const enDescription = directorData ? directorData.enDescription : '';
  const imageSrc = directorData ? directorData.image : 'person.png';

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
              <img src="person.png" width="100%"  />
              </div>
            </Col>
            <Col xl={6}>
              <div className="director-des">
                <p> 
                  {enDescription} 
                </p>
              </div>
              <div className="person-detail">
                <h4>DR. ABDUSSALAM AHMED</h4>
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
