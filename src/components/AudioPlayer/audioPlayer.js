import React, { Component } from "react";
import "./audioPlayer.css";

class AudioPlayer extends Component {
  render() {
    const { title, autoPlay } = this.props;
    return (
      <div className="iframe-container">
        <iframe
          title="soundcloudPlayer"
          allow="autoplay"
          height="300"
          width="100%"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/steve-yungen/${title}&auto_play=${autoPlay}&show_artwork=false&hide_related=true`}
        ></iframe>
      </div>
    );
  }
}

export default AudioPlayer;
