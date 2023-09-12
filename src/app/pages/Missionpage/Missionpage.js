"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from '@/app/components/footer/Footer'
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";





function Missionpage() {
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
   
        
        
<PageHeader/>
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
                  Our Mission
                </div>
                <p className="AboutUspage-mission-desc">{about[0]?.mission}</p>
              </Col>
            </Row>
          </Container>
        </div>

        
      </div>

      <Footer />
    </div>
  )
}
}


export default Missionpage