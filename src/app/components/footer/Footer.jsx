"use client";
import React, { useState, useEffect } from "react";
import "./Footer.css";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronUp,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // AOS.init();

  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  <div
    className={`back-to-top ${isVisible ? "visible" : ""}`}
    onClick={scrollToTop}
  >
    <i className="fa fa-chevron-up"></i>
  </div>;
  return (
    <div className="footer">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <Image
                src="/aljamiya_logo.png"
                width={350}
                height={80}
                alt="Picture of the author"
                className="footer-logo"
                loading="lazy"
              />
              <div className="footer-about">
                <p>
                  AL Jamia Al Islamiya is an esteemed university, located in
                  Santhapuram, Kerala, India, offers a wide range of academic
                  programs that blend traditional Islamic knowledge with modern
                  education.
                </p>{" "}
              </div>
            </div>
            <div className="col-6 col-xs-12 col-sm-3 col-lg-3">
              <div className="useful-link">
                <h2>Useful Links</h2>
                <div className="use-links">
                  <li>
                    <Link href="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/about">
                      <FontAwesomeIcon icon={faAngleRight} /> Al Jamia Al
                      Islamiya
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/Career">
                      <FontAwesomeIcon icon={faAngleRight} /> Career
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/colleges">
                      <FontAwesomeIcon icon={faAngleRight} /> Colleges
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/Alumni">
                      <FontAwesomeIcon icon={faAngleRight} /> Alumni Chapters
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/contact">
                      <FontAwesomeIcon icon={faAngleRight} /> Contact Us
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-6 col-xs-12 col-sm-3 col-lg-2">
              <div className="social-links">
                <h2>Follow Us</h2>
                <div className="social-icons">
                  <li>
                    <Link
                      href="https://www.facebook.com/aljamiasantapuram"
                      target="_blank"
                    >
                      <Image
                        src="/facebook.png"
                        width={350}
                        height={80}
                        alt="Picture of the author"
                        className="footer-logo"
                        loading="lazy"
                      />
                      {/* <i className="fa-brands fa-facebook-f fb_clr"></i>{" "} */}
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/aljamiaalislamiya/"
                      target="_blank"
                    >
                      <Image
                        src="/instagram.png"
                        width={350}
                        height={80}
                        alt="Picture of the author"
                        className="footer-logo"
                        loading="lazy"
                      />{" "}
                      {/* <i className="fa-brands fa-instagram insta_clr"></i>{" "} */}
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/aljamiachannel"
                      target="_blank"
                    >
                      <Image
                        src="/youtube.png"
                        width={350}
                        height={80}
                        alt="Picture of the author"
                        className="footer-logo"
                        loading="lazy"
                      />{" "}
                      {/* <i className="fa-brands fa-youtube youtube_clr"></i>{" "} */}
                      youtube
                    </Link>
                  </li>
                  {/*
                  <li>
                    <Link
                      href="https://play.google.com/store/apps/details?id=in.ixian.campus7.aljamia.student&pcampaignid=web_share"
                      target="blank"
                    >
                      <i className="fa-solid fa-angles-right play_clr"></i>{" "}
                      Playstore
                    </Link>
                  </li> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="address">
                <h2>Address</h2>
                <div className="address-links">
                  <li className="address1">
                    <FontAwesomeIcon icon={faLocation} className="pt-2 pr-2" />
                    Al Jamia Al Islamiya Santhapuram (PO). Pattikkad 673 325,
                    Malappuram, Kerala
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faPhone} className="pt-2 pr-2" />
                      +91 4933270439 , +91 4933270565
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="pt-2 pr-2"
                      />
                      mail@aljamia.net
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copy-right">
        <div className="copy-right-sec">
          <p className="footer-copyright pt-3">
            © 2023 Al Jamia Al Islamiya{" "}
            <Link
              href="/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Privacy{" "}
            </Link>{" "}
            | Powered by
            <Link
              href="https://datahex.in/"
              className="datahex-link"
              target="blank"
            >
              DataHex
            </Link>
          </p>
        </div>
      </section>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      <div
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  );
};
export default Footer;
