import React, { useEffect, useState } from "react";
import "./Videoslider.css";
import Navebar from "./Navebar";

function Videoslider() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navebar /> */}
      {/* <header className={isSticky ? "sticky" : ""}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3">loogo</div>
            <nav className="col-xs-9">
              <ul id="access_top">
                <li>
                  <a href="#" className="search-overlay-menu-btn">
                    <i className="icon-search-6"></i>
                  </a>
                </li>
              </ul>
              <a
                className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href="javascript:void(0);"
              >
                <span>Menu mobile</span>
              </a>
              <div className="main-menu">
                <div id="header_menu">logo </div>
                <a href="#" className="open_close" id="close_in">
                  <i className="icon_close"></i>
                </a>
                <ul>
                  <li>
                    <a href="#0" className="show-submenu">
                      Other elements<i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="shortcodes.html">Shortcodes</a>
                      </li>
                      <li>
                        <a href="shortcodes.html">Shortcodes</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Purchase this template</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header> */}

      <section
        className="header-video-2 jarallax"
        // data-jarallax-video="/Video_banner.mp4"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fullscreen-video"
          style={{ width: "100%" }}
        >
          <source src="/video/Video_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default Videoslider;
