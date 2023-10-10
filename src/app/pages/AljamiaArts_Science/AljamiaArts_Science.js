"use client";
import { useRef } from "react";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import YouTube from "react-youtube";

function AljamiaArts_Science() {
  const playerRef = useRef(null);

  const opts = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      rel: 0,
      fs: 1, // Allow fullscreen
      modestbranding: 1, // Reduce the YouTube logo to a small watermark
      disablekb: 1, // Disable keyboard controls
      iv_load_policy: 3, // Hide annotations
      loading: "eager", // or "lazy" for lazy loading
    },
  };

  const videoId = "LYotI5Bu8Fw";
  const onEndHandler = (event) => {
    event.target.playVideo();
  };
  return (
    <div>
      <PageHeader />
      <div className="header">
        <div className="header-contents">
          <div className="header-video">
            <YouTube
              videoId={videoId}
              opts={opts}
              onEnd={onEndHandler}
              ref={playerRef}
              className="youtube-video" // Apply your CSS class here
            />
          </div>
        </div>
      </div>
      <div className="AboutUspage-items">
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <div
                  className="AboutUspage-mission-title"
                  id="our-mission-header pb-2"
                >
                  Aljamia Arts & Science College
                </div>
                <p className="AboutUspage-mission-desc">
                  Al Jamia Arts and Science College (AJAS), a resourceful
                  destination for higher studies in the region, was established
                  in 2010 with the main objective of uplifting the educationally
                  developing Muslims and other communities and moulding them
                  into professionally competent, socially responsible, and
                  morally sound citizens. The college with minority status is
                  affiliated with the University of Calicut and recognised by
                  the Government of Kerala. <br /> <br />
                  The campus is situated at Poopalam, 2.5 km from Perinthalmanna
                  Town on the Perinthalmanna-Ootty road and 2 km from Pattikkad
                  railway station. It is the sister institution of Al Jamia Al
                  Islamiya, run by the Islamic Mission Trust (IMT) in
                  Santhapuram, Pattikkad Perinthalmanna. Al Jamia Arts and
                  Science College (AJAS) is a self-financing institution
                  affiliated with the University of Calicut. The college is
                  ISO-certified. The college aims to credit with the provision
                  of the best education to the learners through instilling human
                  values and inducing leadership qualities and developing
                  resolute patriotism. The institution offers ten undergraduate
                  programmes in arts, commerce, and science and two PG programs.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={4} lg={4} xs={12}>
                <div>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h2 className="Chapters_center_div"> UG programs</h2>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li>
                      BSC Food Technology <br />
                    </li>
                    <li>
                      BSC Microbiology <br />
                    </li>
                    <li>
                      BSC Psychology <br />
                    </li>
                    <li>
                      BSC Geography <br />
                    </li>
                    <li>BSC Computer Science </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={4} xs={12}>
                <div>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h2 className="Chapters_center_div"> UG programs</h2>
                  </div>
                </div>
                <ul className="blog-details-list mt-30">
                  <li>BCA</li>
                  <li>B. A. English Language and Literature</li>
                  <li>B. A. Islamic Studies</li>
                  <li>B. Com Computer Application </li>
                  <li>BBA Finance </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} xs={12}>
                <div>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    <h2 className="Chapters_center_div"> PG programs</h2>
                  </div>
                  <ul className="blog-details-list mt-30">
                    <li>M.A. Islamic Finance </li>
                    <li>M. A. Arabic</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <div className="learn-btn-lib">
                  <hr />
                  <div className="btn center_div">
                    <Link
                      href="https://ajascollege.ac.in/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      <button>
                        {" "}
                        <div className="icon_arrow_abt">
                          <span className="p-3">More About</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 80 80"
                            fill="none"
                          >
                            <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                            <path
                              d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                              fill="#619A46"
                            />
                          </svg>
                        </div>{" "}
                      </button>
                    </Link>
                  </div>
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

export default AljamiaArts_Science;
