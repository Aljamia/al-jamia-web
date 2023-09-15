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
  <b> Enter Details: <hr/> </b>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Admission Year *</label>
 
     <select name="admission_year_id" class="form-control" id="admission_year" data-rule-required="true" aria-required="true">
                                          <option value="">-- Select Admission Year--</option>
                                          <option value="2">2023-24</option>                                        </select>     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Course *</label>
 
     <select name="course_id" class="form-control" id="course" data-rule-required="true" aria-required="true">
                                          <option value="">-- Select Course --</option>
                                          <option value="20">MASTER’S DEGREE IN COMPARATIVE RELIGION</option><option value="19">MASTER’S DEGREE IN CONTEMPORARY FIQH</option><option value="18">MASTER’S DEGREE IN CONTEMPORARY ISLAMIC THOUGHT</option><option value="21">PG DIPLOMA IN ARABIC &amp; ENGLISH TRANSLATION</option><option value="16">SENIOR SECONDARY</option><option value="17">UNDER GRADUATION PROGRAM</option>                                        </select>     </div>
   </div>
   
 </div>

 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Student's Name *</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Parent's Name *</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
   
 </div>

 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Mobile Number*</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Email address</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
   
 </div>

 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">WhatsApp Number</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Blood Group</label>
 
     <select name="blood_group" class="form-control">
                                                <option value="">Select one</option>
                                                <option>O +</option>
                                                <option>O -</option>
                                                <option>A +</option>
                                                <option>A -</option>
                                                <option>B +</option>
                                                <option>B -</option>
                                                <option>AB +</option>
                                                <option>AB -</option>
                                            </select>     </div>
   </div>
   
 </div>

 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Date of Birth *</label>
 
     <input type="text" name="date" id="date" data-select="datepicker" placeholder="DD-MM-YYYY" data-rule-required="true" aria-required="true"></input>     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Gender *</label>
 
     <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="male" value="male" data-rule-required="true" aria-required="true"></input>
                                            <label class="form-check-label" for="male">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="female" value="female" data-rule-required="true" aria-required="true"></input>
                                            <label class="form-check-label" for="female">Female</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="female" value="female" data-rule-required="true" aria-required="true"></input>
                                            <label class="form-check-label" for="female">Unsex</label>
                                        </div>
                                        <span class="text-danger font-weight-bold"></span>
                                    </div>     </div>
   </div>
   
 </div>
 
 
 
 </div>              </Col>



 <Col xl={6} lg={6} xs={12}>
               
 <div className='formbox'>
  <b>Details of Address: <hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">House Name</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Street Address</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">City</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">PO</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>

 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Pincode</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">District</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>

 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">State</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Nationality</label>
 
       <input type="text" id="form6Example2" class="cont_form" />
     </div>
   </div>
 </div>

 
 </div>             
  </Col>



  <Col xl={12} lg={12} xs={12}>
               
  <div className='formbox unheight'>
  <b>Education Qualification<hr/> </b>
 <div class="row"> 
   
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Institution Last Attended</label>
 
       <input type="text" id="" class="cont_form" />
     </div>
   </div>
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example2">Education Qualification</label>
 
     <select name="education_qualification" class="form-control">
                                            <option value="">Select One</option>
                                            <option>SSLC</option>
                                            <option>10th CBSE</option>
                                            <option>Plus Two</option>
                                            <option>Degree</option>
                                        </select>
                                             </div>
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
     <div class="form-outline">
     <label class="form-label" for="form6Example1">Examination Center</label>
 
     <select name="examination_center" class="form-control">
                                            <option value="">Select One</option>
                                            <option>Al Jamia Campus</option>
                                            <option>Kannur</option>
                                            <option>Calicut</option>
                                            <option>Trivandrum</option>
                                            <option>Ernakulam</option>
                                            <option>GCC</option>
                                            <option>Out of Kerala</option>
{/*                                         <option>Trivandrum-TCC</option>
                                            <option>Ernakulam- Grand Square</option>
                                            <option>Kozhikode- Vidyarthi Bhavan</option>
                                            <option>Kannur- Unity Center</option>
                                            <option>UAE - Abu Dhabi</option>
                                            <option>UAE - Sharjah</option>
                                            <option>UAE - Dubai</option>
                                            <option>KSA - Jeddah</option>
                                            <option>KSA - Dammam</option>
                                            <option>KSA - Riyadh</option>
                                            <option>Bahrain</option>
                                            <option>Kuwait</option>
                                            <option>Qatar</option>
                                            <option>Oman</option> */}
                                        </select>
     </div>
   </div>
   <div class="col">
   <div class="form-outline">
     <label class="form-label" for="form6Example1"> Request OTP *</label>
 
     <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-success btn-request request_for_otp mt-0" type="button">Get OTP</button>
                                            </div>
                                            <input type="text" class="form-control mobile_otp" name="otp" id="otp" placeholder="OTP Number*" data-rule-required="true" aria-required="true"></input>
                                        </div>     </div>

    
   </div>
 </div>
 
 <div class="row mb-4">
   <div class="col">
   <div class="form-outline">
     <label class="form-label" for="form6Example2">Upload Documents</label>
 
     <input type="file" class="form-control-file" name="photo" id="photo"></input>     </div>
   </div>
 </div>



 </div>             
  </Col>




  <div className='center_div'>
   
   <button type="submit" class="send_button  m-4">Apply Now</button>
   
   </div>
            </Row>
          </Container>


</form>


    </div>
  )
}

export default Application_form