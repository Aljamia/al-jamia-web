"use client";
import React from "react";
import "./Admission_lists.css";
import { Card } from "react-bootstrap";

function Admission_lists() {
  return (
    <div>
      <div className="portfolio center_div">
        <p className="p-0">OUR</p>
        <h2>Admission</h2>
        <div className="portfolio-container">
          <Card className="portfolio-card ">
            <Card.Img
              variant="top"
              className="portfolio-modal-images"
              src="/Registration.png"
            />
            <h5>PC</h5>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
              eiusmod tempor
            </p>
            <button
              variant="primary btn-primary"
              className="portfolio-btn btn   mb-4"
            >
              <span className="">More Details</span>
            </button>
          </Card>

          <Card className="portfolio-card ">
            <Card.Img
              variant="top"
              className="portfolio-modal-images"
              src="/Registration.png"
            />
            <h5>PC</h5>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
              eiusmod tempor
            </p>
            <button
              variant="primary btn-primary"
              className="portfolio-btn btn   mb-4"
            >
              <span className="">More Details</span>
            </button>
          </Card>

          <Card className="portfolio-card ">
            <Card.Img
              variant="top"
              className="portfolio-modal-images"
              src="/Registration.png"
            />
            <h5>PC</h5>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
              eiusmod tempor
            </p>
            <button
              variant="primary btn-primary"
              className="portfolio-btn btn   mb-4"
            >
              <span className="">More Details</span>
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Admission_lists;
