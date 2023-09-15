import { Libre_Franklin } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AlJamiaApp() {
  return (
        
       <div>
         <div className="app_bg">

         <Container>
          <Row>
          <Col xl={6} lg={6} xs={12}>
           
           <h1 className='app_head'>
           Our App Available ! Download now
           </h1>
           <p className='app_head'>
           ONLINE LEARNING MADE EASIER           <br/>

Campus7 facilitates e-learning solutions to deliver online training and collaborative solutions to students. Our secure and reliable learning platform is customised to meet the functional requirements of Educational Institutions.           <br/>
           <br/>
           <p>
           <Link
                href="https://aljamia.campus7.in/login"
                target="blank"
                style={{ textDecoration: "none", color: "white" }}
              > 
<b>www.campus7.com</b>
              </Link>
              </p>
           </p>

         <div className='app_icon'>
        
         <Link
                href="https://play.google.com/store/apps/details?id=in.ixian.campus7.aljamia.student&pcampaignid=web_share"
                target="blank"
                style={{ textDecoration: "none", color: "white" }}
              >  

         <img src="playstor.png" alt="" width="100%" />
         
</Link>

<Link
                href="https://aljamia.campus7.in/login"
                target="blank"
                style={{ textDecoration: "none", color: "white" }}
              >  
         <img src="Campus7ERP.png" alt="" width="100%" />
         </Link>

         </div>
         

           </Col>
           <Col xl={6} lg={6} xs={12}>
           <img src="app.png" alt="" width="100%" />

           </Col>
           </Row>
           </Container>
    </div>
       </div>
  )
}

export default AlJamiaApp