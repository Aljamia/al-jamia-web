"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Footer from "@/app/components/footer/Footer";
import { getManagementCommitee } from "@/app/hooks/UseApi";
import Image from "next/image";
import "../../globals.css";
import AdministrativeCouncil from "../../components/AdministrativeCouncil/AdministrativeCouncil";
import Succession_List from "@/app/components/Succession_List/Succession_List";
import Offices_Department from "@/app/components/Offices_Department/Offices_Department";
import SupremeCouncil from "@/app/components/SupremeCouncil/SupremeCouncil";
import Academic_Leadership from "@/app/components/Academic_Leadership/Academic_Leadership";
import World_Campus from "@/app/components/World_Campus/World_Campus";
const Organizational_structure = () => {
  const [commitee, Setcommitee] = useState([]);
  const [show, setShow] = useState(false);
  const [modalVal, setModalVal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalVal(data);
  };
  useEffect(() => {
    const fetchCommitee = async () => {
      const data = await getManagementCommitee();
      console.log(data);
      Setcommitee(data?.response);
    };
    fetchCommitee();
  }, []);

  return (
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image
          src="/banner/Facilities.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
          loading="lazy"
        />
      </div>

      <div>
        <SupremeCouncil />

        <AdministrativeCouncil />

        <Academic_Leadership />

        <Succession_List />

        <Offices_Department />
      </div>

      <Footer />
    </div>
  );
};

export default Organizational_structure;
