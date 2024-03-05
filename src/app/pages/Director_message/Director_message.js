"use client";
import React, { useEffect, useState } from "react";

import Director from "@/app/components/director/Director";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";

function Director_message() {
  return (
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image unoptimized={true}
          unselectable={true}
          src="/banner/DirectorBG.png"
          layout="responsive"
          width={1000}
          height={500}
          style={{height:"50%",width:"100%"}}
          alt="Image"
        />
      </div>
      <Director />
      <Footer />
    </div>
  );
}

export default Director_message;
