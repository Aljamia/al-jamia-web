import React, { useRef } from "react";
import YouTube from "react-youtube";
import "./Videoslider.css";

const Videoslider = () => {
  const playerRef = useRef(null);

  const opts = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      rel: 0,
      fs: 1, // Allow fullscreen
      modestbranding: 1, // Reduce the YouTube logo to a small watermark
      disablekb: 1, // Disable keyboard controls
      iv_load_policy: 3, // Hide annotations
    },
  };

  const videoId = "Aop2vKroDwo";
  const onEndHandler = (event) => {
    event.target.playVideo();
  };

  return (
    <div className="header">
      <div className="header-contents">
        <div className="header-video">
          <YouTube
            videoId={videoId}
            opts={opts}
            onEnd={onEndHandler}
            ref={playerRef}
            className="youtube-video" // Apply your CSS class here
          />
        </div>
      </div>
    </div>
  );
};

export default Videoslider;
