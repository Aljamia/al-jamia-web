/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./Career_form.css";
import { Col, Container, Row } from "react-bootstrap";
import { BASE_URL } from "@/app/hooks/UseApi";
import axios from "axios";
function Career_form() {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    whatsapp: "",
    education: "",
    date: "",
    gender: "",
    message: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const postCareer = async (formData) => {
    console.log(formData);
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(`${BASE_URL}/career`, data);
      console.log(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the photo is present in the files array
      if (e.target.photo.files.length > 0) {
        // Get the first file (assuming only one file is selected)
        const photo = e.target.photo.files[0];
        setFormData({ ...formData, photo });
      }

      // Now you can send the form data with the updated photo
      await postCareer(formData);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Form submission failed");
    }
  };

  return (
    <div className="">
      <div>
        <h2 className="TitleStyle center_div pt-5 pb-3">Apply Now</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                        <label className="form-label" for="name">
                          Name *
                        </label>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="cont_form"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="email">
                          Email *
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="cont_form"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="mobile">
                          Mobile Number*
                        </label>

                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          className="cont_form"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="subject">
                          Preferred Teaching Subject/Field
                        </label>

                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="cont_form"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="whatsapp">
                          WhatsApp Number
                        </label>

                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          className="cont_form"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="education">
                          Highest Education Level
                        </label>
                        <select
                          name="education"
                          id="education"
                          className="form-control"
                          value={formData.education}
                          onChange={handleInputChange}
                        >
                          <option value="">Select one</option>
                          <option value="bachelor">Bachelor's Degree</option>
                          <option value="master">Master's Degree</option>
                          <option value="doctorate">Doctorate (Ph.D.)</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" for="date">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          data-select="datepicker"
                          placeholder="DD-MM-YYYY"
                          data-rule-required="true"
                          value={formData.date}
                          onChange={handleInputChange}
                        ></input>{" "}
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="gender">
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
                              onChange={handleInputChange}
                              checked={formData.gender === "male"}
                              required
                            />
                            <label className="form-check-label" htmlFor="male">
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
                              onChange={handleInputChange}
                              checked={formData.gender === "female"}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="preferNotToSay"
                              value="preferNotToSay"
                              onChange={handleInputChange}
                              checked={formData.gender === "preferNotToSay"}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="preferNotToSay"
                            >
                              Prefer not to say
                            </label>
                          </div>
                          <span className="text-danger font-weight-bold"></span>
                        </div>{" "}
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-12">
                      <div className="form-outline">
                        <label className="form-label" for="message">
                          Message (optional)
                        </label>

                        <input
                          type="text"
                          id="message"
                          name="message"
                          className="cont_form"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-xs-12 col-sm-6 col-lg-6">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="photo">
                            Upload Documents
                          </label>
                          <input
                            type="file"
                            className="form-control-file"
                            name="photo"
                            id="photo"
                            onChange={handleFileChange}
                            required
                          />
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
