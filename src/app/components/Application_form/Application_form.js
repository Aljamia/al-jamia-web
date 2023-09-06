import React from 'react'
import "./Application_form.css"
function Application_form() {
  return (
    <div>
        <h2 className='center_div p-5'>Application Form</h2>
        <hr/>
        <form>
  <div class="row mb-4 pt-5">
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

<div className='center_div'>
   
<button type="submit" class="send_button  mb-4">Submit</button>

</div>
</form>


    </div>
  )
}

export default Application_form