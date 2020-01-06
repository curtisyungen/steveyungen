import React, { Component } from "react";
import "./video.css";

class Video extends Component {
  render() {
    const { video } = this.props;
    return (
      <iframe
        title="youtubePlayer"
        allowFullScreen
        className="video fadeIn-3"
        frameBorder="0"
        src={video}
      />
    );
  }
}

export default Video;
