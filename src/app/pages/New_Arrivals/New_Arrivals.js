/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main_navebar from "../Main_navebar/Main_navebar";
import Image from "next/image";
import Footer from "@/app/components/footer/Footer";
import Library_books_main from "../Library_books/Library_books_main";

const New_Arrivals = () => {
  return (
    <div id="New_Arrivals">
      <div className="AboutUspage">
        <Main_navebar />
        {/* <PageHeader /> */}

        <div className="AboutUspage-img">
          <Image
            src="/image 7.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>
        <Library_books_main />

        <div className="mb-5"></div>
        <Footer />
      </div>
    </div>
  );
};

export default New_Arrivals;
