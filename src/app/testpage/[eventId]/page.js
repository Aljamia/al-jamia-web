/* eslint-disable @next/next/no-img-element */
"use client";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../globals.css";
import Event from "@/app/components/Events/Event";
import Footer from "@/app/components/footer/Footer";
import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";

function HomePage(eventId) {
  console.log("connected", { eventId });
  const [events, setEvents] = useState([]);

  // Fetch the API data on component mount using Axios
  useEffect(() => {
    axios
      .get("https://aljamia-api-ztjhx.ondigitalocean.app/api/v1/news", {
        params: {
          id: eventId.params.eventId,
        },
      })
      .then((response) => {
        setEvents(response.data.response);
        console.log("updatenews data", response.data.response); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [eventId.params.eventId]);
  console.log({ events });

  return (
    <div>
      <PageHeader />
      <div className="news-section pt-5">
        <Container id="news-container">
          <div className="header-news">
            <div className="news-title">
              <h1>{events.title}</h1>
            </div>
            <div className="news_img">
              <Image unoptimized={true}
          unselectable={true}
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${events.image}`}
                alt=""
              />
            </div>
            <div className="news-para">
              <p>{events.description}.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            {events?._id === "65321347b5552c3f834edbe5" && (
              <div className="Download_news_button">
                <a href="/pdf/Application Form.pdf" download>
                  <button>
                    <FaFilePdf /> Download PDF
                  </button>
                </a>
              </div>
            )}
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <h5>Click here</h5>
            <a href={events.link}>{events.link}</a>
          </div>
        </Container>
        <div className="news-para">
          <Event event-section-2={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
