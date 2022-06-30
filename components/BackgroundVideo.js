import React from "prop-types";

const BackgroundVideo = () => {
    return (
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
      >
        <source src="./background_video.mp4" type="video/mp4" />
      </video>
    );
}

export default BackgroundVideo;