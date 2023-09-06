"use client";
import React, { useState, useEffect } from "react";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import "./Alumni.css"
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
                Association
                </div>
                <p className="AboutUspage-mission-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

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
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

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
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

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

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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
          <div className="AboutUspage-campus-title center_aln">Campus Life</div>
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

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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

<Footer/>
    </div>  

  )
}

export default Alumni