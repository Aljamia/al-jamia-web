import axios from "axios";
import Link from "next/link";
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
      .get("https://aljamia-hgtgv.ondigitalocean.app/api/v1/boardof-director")
      .then((response) => {
        setDirector(response.data.response);
        console.log("director data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="director">
       
        <Container>
          <Row>
            <Col xl={6}>
              <div className="director-img">
                <img src="person.png" alt="" width="100%" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="director-des">
              <div className="director-heading">
          <h1> Message From The Director</h1>
        </div>
                <p>{director[0]?.enDescription}</p>
              </div>
              <div className="person-detail">
                <h4>{director[0]?.enName}</h4>
                <p>Rector Al Jamia Al Islamiya</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




      <div className="facualies">
        <Container>






        <div class="row">


        <div class="col-sm-6">
    <div className="image">
          <img src="Faculties.png" alt="photo" width="100%" />
        </div>
    </div>


    <div class="col-sm-6">
    <div className="library">
          <div className="">
            <h1>Faculties</h1>
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus molestiae tempore facere libero culpa sapiente. Ipsam esse natus mollitia nobis at doloremque quisquam numquam tenetur obcaecati? Illum, veritatis ut!


            </p>
          </div> 

         
          </div>
          <div className="learn-btn-lib">

          <div className="btn2">
          <Link
                href="/faculties"
                target="blank"
                style={{ textDecoration: "none", color: "white" }}
              >            <button>
              {" "}
             <div className="icon_arrow_abt">
             <span className="pl-3">More about</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="39.5" stroke="#619A46"/>
  <path d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z" fill="#619A46"/>
</svg>
              </div>{" "}
            </button>
          </Link>
        </div>

          </div>
    </div>
  
  </div>


        </Container>
      </div>
    </div>
  );
};

export default Director;
