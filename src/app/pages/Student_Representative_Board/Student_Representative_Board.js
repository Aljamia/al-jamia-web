"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Student_Representative_main from "./Student_Representative_main";

function Student_Representative_Board() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);
  {
    return (
      <div>
        <PageHeader />
        <div className="AboutUspage-img">
          <Image unoptimized={true}
          unselectable={true}
            src="/image 7.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <Student_Representative_main />

        <Footer />
      </div>
    );
  }
}

export default Student_Representative_Board;
