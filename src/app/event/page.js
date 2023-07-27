"use client";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../components/Events/Event.css";
import Event from "../components/Events/Event";

const page = () => {
  return (
    <div>
      <Header />
      <div className="link-event">
        <Event />
      </div>
      <Footer />
    </div>
  );
};

export default page;
