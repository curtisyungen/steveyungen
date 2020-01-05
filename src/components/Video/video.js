import React, { Component } from "react";
import "./video.css";

class Video extends Component {
  render() {
    const { video } = this.props;
    return (
      <iframe allowfullscreen className="video" frameborder="0" src={video} />
    );
  }
}

export default Video;
