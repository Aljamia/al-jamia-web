"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import "../../globals.css";
import { Container, Card } from "react-bootstrap";
import { getfaculties } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
const Faculties = () => {
  const [faculties, SetFaculties] = useState([]);
  useEffect(() => {
    const fetchSupreamCouncil = async () => {
      const data = await getfaculties();
      console.log(data);
      SetFaculties(data?.response);
    };
    fetchSupreamCouncil();
  }, []);
  return (
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image
          src="/banner/Facilities.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
          loading="lazy"
        />
      </div>
      <div>
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <div className="row">
                <h1 className="TitleStyle center_aln">Faculties</h1>
                {faculties.map((item) => (
                  <>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                      <Card className="faculties-card" key={item.id}>
                        <Card.Img
                          variant="top"
                          className="facluties_fac_images"
                          src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                        />
                        <Card.Body style={{ minHeight: "60px" }}>
                          <Card.Title className="faculties-card-title">
                            {item.name}
                          </Card.Title>
                          <p className="faculties_card_designation">
                            {item.designation}
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculties;
