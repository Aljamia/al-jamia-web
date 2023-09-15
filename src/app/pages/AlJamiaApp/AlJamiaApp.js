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
          <Col xl={12} lg={12} xs={12}>
           
           <h1 className='app_head'>
           Our App Available ! Download now
           </h1>
          
         

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
           {/* <Col xl={6} lg={6} xs={12}>
           <img src="app.png" alt="" width="100%" />

           </Col> */}
           </Row>
           </Container>
    </div>
       </div>
  )
}

export default AlJamiaApp