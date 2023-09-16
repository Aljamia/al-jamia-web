import React from "react";
import "./Career_form.css";
import { Col, Container, Row } from "react-bootstrap";
function Career_form() {
  return (
    <div className="p-5">
      <div>
        <h2 className="TitleStyle center_div pt-5 pb-3">Career Form</h2>

        <form>
          <Container>
            <Row>
              <Col xl={12} lg={12} xs={12}>
                <div className="formbox">
                  <b>
                    {" "}
                    Please fill out the form below to express your interest.{" "}
                    <hr />{" "}
                  </b>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example1">
                          Name *
                        </label>

                        <input type="text" id="" className="cont_form" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example2">
                          Email *
                        </label>

                        <input
                          type="text"
                          id="form6Example2"
                          className="cont_form"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example1">
                          Mobile Number*
                        </label>

                        <input type="text" id="" className="cont_form" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example2">
                          Preferred Teaching Subject/Field
                        </label>

                        <input
                          type="text"
                          id="form6Example2"
                          className="cont_form"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example1">
                          WhatsApp Number
                        </label>

                        <input type="text" id="" className="cont_form" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example2">
                          Highest Education Level
                        </label>
                        <select name="blood_group" className="form-control">
                          <option value="">Select one</option>
                          <option value="bachelor">Bachelors Degree</option>
                          <option value="master">Masters Degree</option>
                          <option value="doctorate">Doctorate (Ph.D.)</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example1">
                          Date of Birth *
                        </label>
                        <input
                          type="text"
                          name="date"
                          id="date"
                          data-select="datepicker"
                          placeholder="DD-MM-YYYY"
                          data-rule-required="true"
                          aria-required="true"
                        ></input>{" "}
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example2">
                          Gender *
                        </label>
                        <div className="form-group">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="male"
                              data-rule-required="true"
                            ></input>
                            <label className="form-check-label" for="male">
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="female"
                              data-rule-required="true"
                            ></input>
                            <label className="form-check-label" for="female">
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="female"
                              data-rule-required="true"
                            ></input>
                            <label className="form-check-label" for="female">
                              Unsex
                            </label>
                          </div>
                          <span className="text-danger font-weight-bold"></span>
                        </div>{" "}
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12">
                      <div className="form-outline">
                        <label className="form-label" for="form6Example2">
                          Message (optional)
                        </label>

                        <input
                          type="text"
                          id="form6Example2"
                          className="cont_form"
                        />
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-xs-12 col-sm-6 col-lg-6">
                        <div className="form-outline">
                          <label className="form-label" for="form6Example2">
                            Upload Documents
                          </label>
                          <input
                            type="file"
                            className="form-control-file"
                            name="photo"
                            id="photo"
                          ></input>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </Col>

              <div className="center_div">
                <button type="submit" className="send_button  m-4">
                  Submit
                </button>
              </div>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
}

export default Career_form;
