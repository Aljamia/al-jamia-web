import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import Link from "next/link";
import Annoucement from "../annoucement/Annoucement";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://website-builder-api.azurewebsites.net/api/v1//about-us"
        );
        setData(response.data.response[0]); // Set the response data to state
        console.log("Fetched data:", response.data.response[0]); // Log the fetched data to the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <div className="about-Title">
        <h1>Welcome to Al Jamia al Islamia</h1>
      </div>
      <div className="about-description">
        <p>
          {data && data.shortDescription ? data.shortDescription : "Loading..."}
        </p>
      </div>
      <div className="school-img">
        <div className="btn">
          <Link href="/about">
            <button>Take a Tour</button>
          </Link>
        </div>
        <div className="image">
          <img src="image 7.png" alt="photo" width="100%" />
        </div>
      </div>
      <Annoucement />
    </div>
  );
};

export default About;
