import React, { useRef, useState } from "react";
import Header from "../header/Header";
import YouTube from "react-youtube";
import "./Carousel.css";

const CarouselComponent = () => {
  const playerRef = useRef(null);

  const opts = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      rel: 0,
      disablekb: 1,
      fs: 1, // Allow fullscreen
      showinfo: 0, // Hide video title
      modestbranding: 1, // Reduce the YouTube logo to a small watermark
    },
  };

  const videoId = "Aop2vKroDwo";

  const onEndHandler = (event) => {
    event.target.playVideo();
  };

  return (
    <div className="header">
      <Header />
      <div className="header-contents">
        <div className="header-video">
          <YouTube
            videoId={videoId}
            opts={{
              ...opts,
              playerVars: {
                ...opts.playerVars,
                fs: 1, // Allow fullscreen
              },
            }}
            onEnd={onEndHandler}
            ref={playerRef}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
