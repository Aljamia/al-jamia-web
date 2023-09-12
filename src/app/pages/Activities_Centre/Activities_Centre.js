"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from '@/app/components/footer/Footer'
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";





function Activities_Centre() {
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
                Al Jamia Students’ Activities Centre 
                </div>
                <p className="AboutUspage-mission-desc">The Al Jamia Students’ Activities Centre strives to maximize personal growth and development in students 
by providing a variety of opportunities for involvement, service, and leadership in co-curricular activities. 
The centre supports the academic mission of Al Jamia by working to create experiential learning options 
outside the classroom and encouraging students to actively participate in the greater educational 
community. It is committed to achieving a pluralistic community and to assisting the student in developing 
rational, critical and creative capabilities. More specifically, the Centre seeks to engage students in active 
learning, assist them in establishing a meaningful value system and ethical standards, and set high 
expectations for each student. <br/> <br/>
By offering effective programs and participation in all venues, and by 
encouraging and supporting activities that include athletics, recreation, student clubs and organizations, 
performing arts, and social awareness programs, the Students’ Activities Centre provides opportunities 
for students to achieve a better understanding and appreciation not only for their culture, but also for the 
cultures of others. This fosters educational collaborations throughout the campus and builds supportive 
and inclusive communities.</p>
              </Col>
            </Row>
          </Container>
        </div>

      

      </div>
  <div>
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
 
    <section>
    <h1 class="TitleStyle center_aln p-5">Major Activities</h1>

      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-book"></i>
            </div>
            <h3>Student Parliament </h3>
                     </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-brush"></i>
            </div>
            <h3>Club activities </h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-wrench"></i>
            </div>
            <h3>Club activities</h3>
          
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-truck-pickup"></i>
            </div>
            <h3> Sports and Games</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-broom"></i>
            </div>
            <h3>Tarbiyah</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Khutba Training </h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Public Speaking and Performance</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Social activism</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Blogging</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3> Media</h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Public Relations </h3>
           
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Photography </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Health and fitness </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Writings and Publications </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3> Arts & Crafts </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Social Awareness programs </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3> Social Service Wing </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3> Health Service Centre </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Career Guidance </h3>
           
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3> Soft-Skill development </h3>
           
          </div>
        </div>


      </div>
    </section>


           
            </Row>
          </Container>
        </div>

        
      </div>
      <Footer />
    </div>
  )
}
}



export default Activities_Centre