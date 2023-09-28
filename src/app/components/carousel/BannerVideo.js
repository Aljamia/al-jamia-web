import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react';



function BannerVideo() {
    const [videoLoaded, setVideoLoaded] = useState(false);
  
    // Use useEffect to track when the video has loaded
    useEffect(() => {
      const videoElement = document.getElementById('banner-video');
      videoElement.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
  
      return () => {
        videoElement.removeEventListener('loadeddata', () => {
          setVideoLoaded(true);
        });
      };
    }, []);
  
    return (
      <div className="banner-video-container">
        {!videoLoaded && (
          <div className="full-screen-image-container">
          <Image
            src="/banner/banner_Placeholder2.png"
            alt="Placeholder Image"
            width={1000}
            style={{ width: "100%" }}
            height={800}
            //   layout="fill"
            objectFit="cover"
          />
          <div className="overlay"></div>
        </div>
        )}
  
        <video
          id="banner-video"
          className={`banner-video ${videoLoaded ? 'show' : 'hide'}`}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',   // Set the width to 100% of its container
            height: 'auto'   // Maintain the aspect ratio
          }}
        >
            <source src="/Video_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  



export default BannerVideo;
