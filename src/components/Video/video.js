import React, { Component } from "react";

class Video extends Component {
  render() {
    const { video, height, width } = this.props;
    return (
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
        height={height}
        src={video}
        width={width}
      />
    );
  }
}

export default Video;
