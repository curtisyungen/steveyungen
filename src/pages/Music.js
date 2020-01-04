import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";

class Music extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <AudioPlayer
            title="Aloha Week Hula"
            link="https://soundcloud.com/steve-yungen/aloha-week-hula"
          />
        </div>
        <div className="row">
          <AudioPlayer
            title="Aloha Week Hula"
            link="https://soundcloud.com/steve-yungen/aloha-week-hula"
          />
        </div>
      </div>
    );
  }
}

export default Music;
