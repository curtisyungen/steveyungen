import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";
import { hawaiian, composed } from "./songs";
import "./Music.css";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: hawaiian["Aloha Week Hula"]
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
        {/* Hawaiian */}
        <h4>Hawaiian</h4>
        <div>
          {Object.keys(hawaiian).map(song => (
            <div
              key={song}
              className={`row song selected-${title === hawaiian[song]}`}
            >
              <div onClick={this.setTitle.bind(this, hawaiian[song])}>
                {song}
              </div>
            </div>
          ))}
        </div>
        {/* Composed */}
        <h4>Composed</h4>
        <div>
          {Object.keys(composed).map(song => (
            <div
              key={song}
              className={`row song selected-${title === composed[song]}`}
            >
              <div onClick={this.setTitle.bind(this, composed[song])}>
                {song}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Music;
