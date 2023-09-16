import React from "react";
import "./Career_form.css";
function Career_form() {
  return (
    <div className="p-5">
      <div className="CareerBox">
        <h1 className="center_div pb-1">Career Form</h1>
        <form>
          <div className="row mb-4 pt-5">
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="form-outline">
                <label className="form-label" for="form6Example1">
                  Your Name
                </label>

                <input type="text" id="" className="cont_form" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="form-outline">
                <label className="form-label" for="form6Example2">
                  Mobile
                </label>

                <input type="text" id="form6Example2" className="cont_form" />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="form-outline">
                <label className="form-label" for="form6Example1">
                  Email
                </label>

                <input type="text" id="" className="cont_form" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="form-outline">
                <label className="form-label" for="form6Example2">
                  Contact Phone
                </label>

                <input type="text" id="form6Example2" className="cont_form" />
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="form6Example4">
              Address
            </label>

            <input type="text" id="form6Example4" className="cont_form" />
          </div>

          <div className="center_div">
            <button type="submit" className="send_button  mb-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Career_form;
