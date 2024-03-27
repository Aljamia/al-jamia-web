"use client";
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Videoslider from "./Videoslider";
import { getNotification } from "@/app/hooks/UseApi";

const CarouselComponent = () => {
  const [notificationData, setNotificationData] = useState({});

  useEffect(() => {
    const fetchNotification = async () => {
      const data = await getNotification();
      setNotificationData(data?.response);
    };
    fetchNotification();
  }, []);

  const handleReadMoreClick = () => {
    const rowiseElement = document.querySelector(".rowise");
    if (rowiseElement) {
      rowiseElement.scroll({
        top: rowiseElement.scrollHeight,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div className="header" style={{ position: "relative" }}>
      <Header />
      <div className="header-contents">
        <div className="header-video">
          <div>
            <Videoslider />
          </div>
          <div className="notification">
            <img
              src="/notification-icon.png"
              alt="Notification Icon"
              className="notification-icon"
            />
            <div className="rowise">
              {notificationData &&
                Array.isArray(notificationData) &&
                notificationData.map((notification) => (
                  <div key={notification._id} className="notifi-box">
                    <a
                      href={notification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {notification.title}
                    </a>
                    <div className="detail-box">
                      {new Date(notification?.createdAt).toLocaleString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <button className="read-more" onClick={handleReadMoreClick}>
            More
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
