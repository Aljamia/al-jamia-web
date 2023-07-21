import React, { useEffect, useState } from 'react';
import "./About.css";

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://website-builder-api.azurewebsites.net/api/v1//about-us');
        const data = await response.json();
        setAboutData(data.response);
        console.log("about api", data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setAboutData([]);
      }
    }

    fetchData();
  }, []);

  // Extract the shortDescription from the first element of the aboutData array
  const shortDescription = aboutData.length > 0 ? aboutData[0].shortDescription : '';

  return (
    <div>
      <div className="about-Title">
        <h1>Welcome to Al Jamia al Islamia</h1>
      </div>
      <div className="about-description">
        {/* Use the shortDescription here */}
        <p>{shortDescription}</p>
      </div>
      <div className="school-img">
        <div className="btn">
          <button>Take a Tour</button>
        </div>
        <div className="image">
          <img src="image 7.png" alt="photo" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default About;
