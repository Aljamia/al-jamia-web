"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function CareerLink() {
  return (
    <div>
      <div className="AboutUspage-ourMission pt-5 pb-5">
        <Container>
          <Row>
            <Col xl={12} lg={12} xs={12}>
              <div className="work_box">
                <div className="AboutUspage-campus-title center_aln white">
                  {" "}
                  Work with us
                </div>

                <p className="p_style">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate possimus tempore distinctio rem itaque ad totam
                  sapiente. Saepe sunt necessitatibus vero, culpa at nobis
                  voluptas earum, quia, illum ullam error.
                </p>

                <div className="btn">
                  <Link href="/Career">
                    <button>
                      {" "}
                      <div className="icon_arrow_abt bg-image">
                        <span className="p-2">Careers</span>

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
  );
}

export default CareerLink;
