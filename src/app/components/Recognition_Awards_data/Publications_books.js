"use client";
import React from "react";

import Main_navebar from "../header/Header";
import Image from "next/image";
import Footer from "../footer/Footer";
import Publications_books_main from "./Publications_books_main";
const Publications_books = () => {
  return (
    <div>
      <div className="AboutUspage">
        <Main_navebar />
        {/* <PageHeader /> */}

        <div className="AboutUspage-img">
          <Image
            src="/banner/Publications_books.jpg"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
            loading="lazy"
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
