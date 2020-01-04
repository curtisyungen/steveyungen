import React, { Component } from "react";
import "./audioPlayer.css";

class AudioPlayer extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="iframe-container">
        <iframe
          auto_play
          height="175"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/steve-yungen/${title}`}
          width="100%"
        ></iframe>
      </div>
    );
  }
}

export default AudioPlayer;
