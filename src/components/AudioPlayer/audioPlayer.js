import React, { Component } from "react";
import Player from "react-soundcloud-widget-player";

class AudioPlayer extends Component {
  render() {
    const { title, link } = this.props;
    return (
      <Player
        title={title}
        audioUrl={`https://w.soundcloud.com/player/?url=${link}`}
      />
    );
  }
}

export default AudioPlayer;
