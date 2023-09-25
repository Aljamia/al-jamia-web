"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Academic_main from "./Academic_main";
import Student_Counseling_Service_main from "../Student_Counseling_Service/Student_Counseling_Service_main";
import Students_Centre_main from "../Students_Centre/Students_Centre_main";
import Student_Representative_main from "../Student_Representative_Board/Student_Representative_main";

function Student_Development() {
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
          <Image
            src="/banner/Student_Development.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>
        <Academic_main />

        <Student_Counseling_Service_main />

        <Students_Centre_main />

        <Student_Representative_main />

        <Footer />
      </div>
    );
  }
}

export default Student_Development;
