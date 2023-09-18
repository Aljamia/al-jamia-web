"use client";
import React from "react";
import "./Centralib.css";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const Centralib = () => {
  return (
    <div>
      <div className="AboutUspage">
        <PageHeader />
        <div className="p-4"></div>
        <div className="AboutUspage-img padimg">
          <Image
            src="/the library.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>
        <div className="AboutUspage-desc">
          <div className="AboutUspage-header m-0 p-3">
            <div className="AboutUspage-title">
              Al Jamia Al Islamiya Central Library
            </div>
          </div>
          <>
            <Container className="AboutUspage-short-desc">
              Al Jamia Central Library is among the leading reference libraries
              in India. This celebrated institution, located in a three-story
              building on the campus of Santapuram al-Jamia, houses over 50,500
              books in different titles. Additionally, it boasts a unique
              digital reference library with access to millions of books. The
              collection mainly comprises books in Arabic, English, Malayalam,
              and Urdu, but it also includes separate shelves for books in
              Hindi, Bengali, Tamil, and Kannada.
              <br />
              <br />
              The Periodicals Reading Room in the library provides a space for
              reading various journals and newspapers in different languages.
              The library operates from 6.30 am to 10.15 pm and serves hundreds
              of people daily. Searching, issuing, and returning books have been
              made easy using the book magic software. One of the notable
              features of the librarys procedures is its adherence to the D.D.C
              Classification system. In addition to book discussions, the
              Library Hall is equipped with a large LED smart TV, providing
              access to channel programs in different languages, including
              Arabic. The library also maintains archives for periodicals
              published in various languages and has adopted the Open Access
              system for readers convenience. To maintain order, books taken
              from the shelf are placed on the table after reading, and the
              library staff organizes them on the shelf at the end.
              <br />
              <br />
              Library membership is available only to students and employees of
              Al Jamia. Students can borrow books for up to two weeks, while
              employees can keep them for a month with the option of renewal.
              Anyone may visit the library for reference during official hours.
            </Container>
          </>
        </div>

        <div className="AboutUspage-desc">
          <>
            <Container className="AboutUspage-short-desc">
              <div className="AboutUspage-header m-0 p-3">
                <div className="AboutUspage-title">Digital Library</div>
              </div>
              The Library also has subscriptions to a core selection of online
              resources and databases including over 25000 E‐books and
              periodicals. All of these resources support research references.
              Most of the collections are available online and can search by
              using the library browsing system.
            </Container>
          </>
        </div>
        {/* <div className="AboutUspage-items">
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
          <div className="explore-btn">
            <Link
              href="https://library.aljamia.in/"
              style={{ textDecoration: "none" }}
            >
              <h5>Explore More</h5>
            </Link>
          </div>
        </div> */}

        <Footer />
      </div>
    </div>
  );
};

export default Centralib;
