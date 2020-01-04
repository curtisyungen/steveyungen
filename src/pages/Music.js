import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";
import "./Music.css";

const songs = {
  "Aloha Week Hula": "aloha-week-hula",
  Ulupalakua: "ulupalakua",
  Kainoa: "kainoa",
  "At The Beach": "at-the-beach-1",
  "Hanalei Moon": "hanalei-moon",
  "He Punahele": "he-punahele"
};

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: songs["Aloha Week Hula"]
    };
  }

  setTitle = title => {
    this.setState({
      title
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <div className="row">
          <AudioPlayer title={title} />
        </div>
        {Object.keys(songs).map(song => (
          <div className={`row song selected-${title === songs[song]}`}>
            <div onClick={this.setTitle.bind(this, songs[song])}>{song}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Music;
