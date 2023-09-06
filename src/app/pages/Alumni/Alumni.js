"use client";
import React, { useState, useEffect } from "react";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import "./Alumni.css";
import Event from "@/app/components/Events/Event";

import { getAboutUs, getAboutUsGallery } from "@/app/hooks/UseApi";
import Link from "next/link";

function Alumni() {
  const [about, setAbout] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };
    const fetchGallery = async () => {
      const data = await getAboutUsGallery();
      setGallery(data?.response);
    };
    fetchAbout();
    fetchGallery();
  }, []);
  if (!gallery || gallery.length === 0) {
    return (
      <div className="text-left">
        <h6>Loading...</h6>
      </div>
    );
  }

  return (
    <div>
      <PageHeader />

      <div className="AboutUspage-img">
        <Image
          src="/image 7.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>
      <div className="AboutUspage-items">
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Association
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis, eveniet. Nisi pariatur tenetur facere dolore. Id,
                  deserunt beatae error aspernatur eos dolor explicabo ad,
                  inventore eum pariatur dolore sapiente ex.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Chapters
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto tempore rerum beatae minima, corrupti error autem
                  unde eligendi tempora ipsa delectus dolorum? Nihil voluptatum
                  dicta neque suscipit delectus commodi impedit! Ipsa soluta
                  odio fugiat. Iste cumque dignissimos distinctio eaque nobis
                  fuga nam voluptas nostrum, numquam, deleniti a illum
                  asperiores doloribus culpa dolore quam totam reprehenderit
                  dicta officiis voluptates odit ex?
                </p>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Recognition and Awards
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus ipsa, deserunt pariatur saepe est exercitationem
                  laboriosam voluptatibus facere perspiciatis molestiae dolorum,
                  ullam excepturi quasi repellat aliquid aliquam repudiandae,
                  maxime rerum! Neque sit expedita, beatae harum voluptatibus
                  dignissimos eos, eligendi odio magnam assumenda excepturi
                  pariatur inventore recusandae. Dolore aut architecto dolores
                  omnis deserunt expedita et repudiandae, beatae quas, animi,
                  quaerat dolor. Consectetur nemo aspernatur atque fugiat veniam
                  delectus qui rerum ex exercitationem? Aspernatur illo quis
                  architecto sed corrupti quasi atque adipisci nesciunt
                  recusandae, expedita minus facere enim, at nobis totam neque.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Publications
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus ipsa, deserunt pariatur saepe est exercitationem
                  laboriosam voluptatibus facere perspiciatis molestiae dolorum,
                  ullam excepturi quasi repellat aliquid aliquam repudiandae,
                  maxime rerum! Neque sit expedita, beatae harum voluptatibus
                  dignissimos eos, eligendi odio magnam assumenda excepturi
                  pariatur inventore recusandae. Dolore aut architecto dolores
                  omnis deserunt expedita et repudiandae, beatae quas, animi,
                  quaerat dolor. Consectetur nemo aspernatur atque fugiat veniam
                  delectus qui rerum ex exercitationem? Aspernatur illo quis
                  architecto sed corrupti quasi atque adipisci nesciunt
                  recusandae, expedita minus facere enim, at nobis totam neque.
                </p>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col xl={12} lg={12} xs={12}>
              <div className="AboutUspage-mission-img">
                <Event />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="AboutUspage-ourCampus shadow-lg">
          <Container>
            <div className="AboutUspage-campus-title center_aln">
              Campus Life
            </div>
          </Container>
          <div class="grid-wrapper">
            <div className="wide">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[6]?.image}`}
                width={350}
                height={10}
                alt="Picture of the author"
              />
            </div>

            <div className="big">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[7]?.image}`}
                width={350}
                height={180}
                alt="Picture of the author"
              />
            </div>

            <div className="tall">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[0]?.image}`}
                width={350}
                height={180}
                alt="Picture of the author"
                className="gallery-data-link"
              />
              <div className="gallery-link">
                <Link href="/gallery" style={{ textDecoration: "none" }}>
                  <h3 className="gallery-navigate">25+</h3>
                </Link>
              </div>
            </div>
            <div className="wide">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${gallery[9]?.image}`}
                width={350}
                height={180}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={6} lg={6} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header"
                >
                  Projects
                </div>
                <p className="AboutUspage-mission-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  aliquam eos odio esse quisquam perspiciatis, repudiandae quasi
                  vel eligendi distinctio aspernatur natus magni neque dolor ad
                  blanditiis fuga! Numquam, maiores! Aliquid, sint amet. Non
                  deserunt repellendus dolorem quasi aperiam expedita ipsum
                  voluptates veritatis perferendis minima tenetur corporis nulla
                  numquam, sapiente, quidem vero, aliquam cupiditate quia
                  mollitia excepturi at distinctio possimus.
                </p>
              </Col>

              <Col xl={6} lg={6} xs={12}>
                <div className="AboutUspage-mission-img">
                  <Image
                    src="/vision.png"
                    layout="responsive" // Use layout="responsive" for responsiveness
                    width={500} // Provide the width of the image
                    height={800} // Adjust the height as needed to make it taller
                    alt="Image"
                    objectFit="cover"
                    className="AboutUspage-vision-img2"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Alumni;
