"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import Student_Counseling_Service_main from "./Student_Counseling_Service_main";

function Student_Counseling_Service() {
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
        <Student_Counseling_Service_main />
        <Footer />
      </div>
    );
  }
}

export default Student_Counseling_Service;
