/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main_navebar from "../header/Header";
import Image from "next/image";
import Footer from "../footer/Footer";
import { getpublication } from "@/app/hooks/UseApi";
import Publications_books_main from "./Publications_books_main";
const Publications_books = () => {


  return (
    <div>
      <div className="AboutUspage">
        <Main_navebar />
        {/* <PageHeader /> */}

        <div className="AboutUspage-img">
          <Image
            src="/banner/Publications.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <Publications_books_main />
        <div className="mb-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Publications_books;
