"use client";
import React, { useEffect, useState } from "react";
import "./Application_form.css"

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";


function Application_form() {
  return (
    <div>
      

      
        <h2 className='center_div pt-5 pb-5'>Application Form</h2>
      
      

<form>



<Container>
            <Row>
           
            <Col xl={6} lg={6} xs={12}>
               
               <div className='formbox'>
  <b> Personal Detail: <hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Your  Name</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Mobile</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Email</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Contact Phone</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="form-outline mb-4">
 <label class="form-label" for="form6Example4">Address</label>
 
   <input type="text" id="form6Example4" class="cont_form" />
 </div>
 
 </div>              </Col>



 <Col xl={6} lg={6} xs={12}>
               
 <div className='formbox'>
  <b>Details of Parents/Guardian: <hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Your  Name</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Mobile</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Email</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Contact Phone</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="form-outline mb-4">
 <label class="form-label" for="form6Example4">Address</label>
 
   <input type="text" id="form6Example4" class="cont_form" />
 </div>
 
 </div>             
  </Col>



  <Col xl={6} lg={6} xs={12}>
               
  <div className='formbox'>
  <b>Other Details<hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Your  Name</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Mobile</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Email</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Contact Phone</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>

 
 </div>             
  </Col>



  <Col xl={6} lg={6} xs={12}>
               
  <div className='formbox'>
  <b>Details of Parents/Guardian:: <hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Your  Name</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Mobile</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="row mb-4">
 <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Email</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Contact Phone</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 
 </div>             
  </Col>
  

  <div className='center_div'>
   
   <button type="submit" class="send_button  m-4">Submit</button>
   
   </div>
            </Row>
          </Container>


</form>


    </div>
  )
}

export default Application_form