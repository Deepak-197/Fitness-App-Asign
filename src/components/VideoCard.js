import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export const VideoCard = ({heading, text, videoUrl, tags, handlePause, handlePlay, isPlaying}) => {



  

  return (
    <div className='video-Card'>
      {/* <iframe
        title={heading}
        src={videoUrl}
        frameBorder={0}
        borderRadius={10}
        allowFullScreen
        height={"200"}
        width={"300"}

      ></iframe> */}
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="200px"
        controls 
        playing={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}

      />
      <p>{heading}</p>
      <h3>{text}</h3>
      <p>{tags.join(", ")}</p>

    </div>
  )
}
