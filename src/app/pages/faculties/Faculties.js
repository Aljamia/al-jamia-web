// Import the required modules
"use client";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import "./Facuties.css";
import { getBoardOfDirector } from "@/app/hooks/UseApi";

const Faculties = () => {
  const tableData = [
    { firstName: "Peter", lastName: "Griffin" },
    { firstName: "Lois", lastName: "Griffin" },
    { firstName: "Joe", lastName: "Swanson" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
    { firstName: "Cleveland", lastName: "Brown" },
  ];

  const [board, setBoard] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchBoard = async () => {
      const data = await getBoardOfDirector();
      console.log(data);
      setBoard(data?.response);
    };
    fetchBoard();
  }, []);

  return (
    <div className="Faculties">
      <PageHeader />
      <div className="Faculties-header">
        <Container>
          <h2 className="Faculties-title">
            Succession List of Heads of the Institution
          </h2>
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
        <h3 className="Faculties-leader-title">Members</h3>
        <div className="Faculties-data">
          {/* Conditional rendering to avoid server-side rendering */}
          {isClient && (
            <table>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="council-name">{row.firstName}</td>
                  <td className="council-position">{row.lastName}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculties;
