"use client";
import React from "react";
import "./Centralib.css";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Library_books from "../Library_books/Library_books";
import Library_books_main from "../Library_books/Library_books_main";
import Digitallibrary from "../Digitallibrary/Digitallibrary";

const Centralib = () => {
  return (
    <div id="centralibrary">
      <div className="AboutUspage">
        <PageHeader />
        <div className="p-4"></div>

        <div className="Faculties-header">
          <Container>
              <div className="AboutUspage-title">
                Al Jamia Al Islamiya Central Library
              </div>

            <div className="Faculties-img">
              <Image
                src="/banner/Central_Library.JPG"
                layout="responsive"
                width={1000}
                height={200}
                alt="Image"
              />
            </div>
          </Container>
        </div>

        <div className="AboutUspage-desc pt-0">
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

        <div className="" id="Digitallibrary">
          <Digitallibrary />
          <>
            {/* <Container className="AboutUspage-short-desc">
              <div className="AboutUspage-header m-0 p-3" >
                <div className="AboutUspage-title">Digital Library</div>
              </div>
              <p >
                The Library also has subscriptions to a core selection of online
                resources and databases including over 25000 E‐books and
                periodicals. All of these resources support research references.
                Most of the collections are available online and can search by
                using the library browsing system.
              </p>
            </Container> */}

            {/* <Container className="AboutUspage-short-desc">
              <div className="AboutUspage-header m-0 p-3" >
                <div className="AboutUspage-title">Catalogue</div>
              </div>
              <p >
               Our library catalogue simplifies access to a world of knowledge. It's your key to books, journals, 
and digital resources - all at your fingertips. Explore, learn, and grow with ease
              </p>
            </Container> */}
          </>
        </div>

        <div className="">
          <Library_books_main />
          {/* <Container>
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
          </Container> */}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Centralib;
