import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";

const songs = ["aloha-week-hula", "ulupalakua", "kainoa", "at-the-beach-1"];

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: songs[0]
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
        {songs.map(song => (
          <div className="row">
            <div onClick={this.setTitle.bind(this, song)}>{song}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Music;
