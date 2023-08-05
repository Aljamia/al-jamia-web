"use client";
import React from "react";
import "./Centralib.css";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

const Centralib = () => {
  return (
    <div>
      <div className="AboutUspage">
        <PageHeader />
        <div className="AboutUspage-header">
          <div className="AboutUspage-title">
            {" "}
            Al Jamia Al Islamiya Central Library
          </div>
        </div>
        <div className="AboutUspage-img">
          <Image
            src="/the library.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>
        <div className="AboutUspage-desc">
          <>
            <Container className="AboutUspage-short-desc">
              A separate collection in the library pertaining to the Islamic
              Economics has been highly noticeable. This wing is manned by 4
              employees in two shifts. This library which is functioning seven
              days in a week has been sole solace and anchorage to thousands of
              researchers and inquisitors. In addition to the book discussion a
              broad LED smart TV with all modern facilities in the Library Hall
              was also equipped in order to watch channel programs in different
              languages ​​including Arabic. likewise, there are also archives in
              the library for keeping periodicals published in different
              languages. It has been adopted the Open Access considering the
              readers’ convenience. To avoid the disorder, the books taken from
              the shelf are placed on the table itself after its reading, and
              the library staff put them in order in the shelf at last. Only the
              students and the employees in Al Jamia are provided with library
              membership where the students are scheduled to get books back
              within 2 weeks and the employees in one month with its renewal
              Anybody may come to the library for reference during official
              hours.
            </Container>
            <Container className="AboutUspage-long-desc">
              Al Jamia Central Library tops among the most leading reference
              libraries in India. This celebrated institution located in a
              two-story building on the campus of Santapuram al-Jamia is
              comprising more than half a million books in different titles. In
              addition to this it has a reference digital library having
              software of millions of books which makes it extraordinary one.
              Mainly the books are in Arabic, English, Malayalam and Urdu.
              Whereas the library has separate shelves in Hindi, Bengali, Tamil
              and Kannada too. The Periodicals’ Reading Room has also been set
              up in the library to facilitate the reading of various journals
              and newspapers in different languages. This library which is open
              from 6.30 am to 10.15 pm is taken benefit of by hundreds of people
              every day . Search, issue & Return etc have been made easy using
              book magic software. One of the striking characteristics of the
              library procedures is that it follows the style of D.D.C
              Classification Shelves with books and gifts donated by individuals
              and organizations are specially designed. Sheikh Khayyal, Shaikh
              DABBUS, K.I.G- Saudi Arabia are some of the remarkable shelves.
              you can also find shelves in the library in the name of the
              celebrities such as Sheikh Maududi, Shaikh Kharadavi etc. There
              are separate shelves for publishers like Markazi Maktaba, New
              Delhi, Islamic Publishing House, Kozhikode in the library.
            </Container>
          </>
        </div>
        <div className="AboutUspage-items">
          <h2 className="central-lib-title">Explore The Our Publications</h2>
          <Container>
            <Row>
              <div className="central-lib-cards">
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>{" "}
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 993.png" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="central-lib__carditems"
                >
                  <Card.Img variant="top" src="/Rectangle 994.jpg" />
                </Card>
              </div>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Centralib;
