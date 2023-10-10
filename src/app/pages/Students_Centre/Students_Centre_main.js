"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

function Students_Centre_main() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);
  {
    return (
      <div>
        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image
                      src="/banner/Media_Point.jpg"
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
                    Students Centre
                  </div>
                  <p className="AboutUspage-mission-desc">
                    Al Jamia provides students center facility nearby their
                    class rooms which helps them for accessing Internet and
                    browsing learning materials.
                    <h1 className="Courses_Head pt-4"> Media Point </h1>
                    Media point is one of the best platforms that trains and
                    enhances the talent of students in the field of Information
                    Technology as well as Instructional & Media Technologies.
                    Media point is the sole media partner of Al Jamia wherein it
                    leads the media related works and covers all of the
                    important events conducted by Al Jamia. ‘Media Point’ also
                    manages Al Jamia website and engages content management in
                    various social media platforms timely and effectively. udent
                    Services
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default Students_Centre_main;
