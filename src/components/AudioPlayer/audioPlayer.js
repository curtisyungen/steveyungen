import React, { Component } from "react";

class AudioPlayer extends Component {
  render() {
    const { title } = this.props;
    return (
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/steve-yungen/${title}`}
      ></iframe>
    );
  }
}

export default AudioPlayer;
