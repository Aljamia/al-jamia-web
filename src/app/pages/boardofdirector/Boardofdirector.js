"use client";
import { useState, useEffect } from "react";
import "./Boardofdirector.css";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { getBoardOfDirector } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
import { Container, Card } from "react-bootstrap";

const Boardofdirector = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
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
          <h2 className="Faculties-title">Administrative Council</h2>
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

      <div className="Supreme-council-members">
        <h3 className="Faculties-leader-title">Members</h3>
        <>
          <div className="members-leader-cards">
            {board.map((item) => (
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

export default Boardofdirector;
