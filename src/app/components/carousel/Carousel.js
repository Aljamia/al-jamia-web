"use client";
import React from "react";
import Header from "../header/Header";
import Videoslider from "./Videoslider";

const CarouselComponent = () => {
   
  return (
    <div className="header" style={{ position: "relative" }}>
      <Header />
      <div className="header-contents">
        <div className="header-video">
          <div>
            <Videoslider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
