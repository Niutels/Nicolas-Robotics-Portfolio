import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <p align="center"> <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="560" height="315" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen

    /> </p>
  </div>
)
export default Video