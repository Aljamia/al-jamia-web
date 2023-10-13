/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBuilding,
  FaDiagnoses,
  FaRegAddressCard,
  FaSearch,
} from "react-icons/fa";
import {
  FaBookOpen,
  FaBookOpenReader,
  FaBuildingCircleArrowRight,
  FaBuildingCircleCheck,
  FaBuildingFlag,
  FaBuildingLock,
  FaBuildingUser,
  FaPeopleGroup,
} from "react-icons/fa6";

const Offices_Department = () => {
  const officeData = [
    {
      title: "Rector’s Office",
      icon: <FaBuilding />,
    },
    {
      title: "Deputy Rector’s Office",
      icon: <FaBuildingUser />,
    },
    {
      title: "Vice President’s Office",
      icon: <FaBuildingCircleCheck />,
    },
    {
      title: "Administrative Chairman’s Office",
      icon: <FaBuildingFlag />,
    },
    {
      title: "Administrative Officer",
      icon: <FaBuildingCircleArrowRight />,
    },
    {
      title: "Dean’s Offices",
      icon: <FaBuildingLock />,
    },
    {
      title: "Students Affair’s Office",
      icon: <FaPeopleGroup />,
    },
    {
      title: "Research Department",
      icon: <FaSearch />,
    },
    {
      title: "Admission and Enrollment",
      icon: <FaRegAddressCard />,
    },
    {
      title: "Department of Examination",
      icon: <FaBookOpen />,
    },
    {
      title: "Library",
      icon: <FaBookOpenReader />,
    },
    {
      title: "Human Resource Development",
      icon: <FaDiagnoses />,
    },
  ];
  return (
    <div className="AboutUs-page-items">
      <div className="AboutUs-page-ourMission p-3">
        <Container>
          <h1 className="TitleStyle text-center p-1">Offices & Department</h1>
          <Row className="card-row">
            {officeData.map((office, index) => (
              <Col key={index} md={3} sm={6} xs={12}>
                <div className="card">
                  <div className="icon-wrapper">
                    <i>{office.icon}</i>
                  </div>
                  <h3>{office.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Offices_Department;
