import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";
import SongList from "../components/SongList/songList";
import DonateBtns from "../components/DonateBtns/donateBtns";
import Logo from "../components/Logo/logo";
import Thumb from "../images/logos/thumb.svg";

import {
  DEFAULT_SONG,
  hawaiian,
  composed,
  covers,
  collabs
} from "../content/songs";
import "./Music.css";

const thumbStyle = {
  cursor: "pointer",
  marginBottom: "-8px",
  marginLeft: "5px",
  maxHeight: "30px",
  maxWidth: "100%"
};

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: DEFAULT_SONG,
      autoPlay: false,
      askForTip: false
    };
  }

  setTitle = title => {
    this.setState({
      title
    });
  };

  toggleAutoPlay = () => {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  };

  toggleTip = () => {
    this.setState({
      askForTip: true
    });
  };

  render() {
    const { title, autoPlay, askForTip } = this.state;
    return (
      <div className="container music-container">
        <div className="row row-style justify-content-center text-center">
          <p className="title large-title">MUSIC</p>
          <p className="description text-left">
            Music has been in my life thanks to my mother and father. There was
            always music in my home, either with singing or just music on
            records or the radio. Dad liked big band music and quirky, novelty
            music, from performers such as Spike Jones and Stan Freberg. Mom
            loved old time hymns and church choral music with vocal harmonies.
          </p>
          <div className="spacer"></div>
        </div>

        <div className="row row-style justify-content-center text-center audio-section">
          <div className="autoPlaySwitch">
            <p className="autoPlayLabel">AUTOPLAY</p>
            <label class="switch">
              <input type="checkbox" onChange={this.toggleAutoPlay} />
              <span class="slider round" />
            </label>
          </div>
          <AudioPlayer title={title} autoPlay={autoPlay} />
        </div>

        <div className="donatePrompt text-center">
          {!askForTip ? (
            <div className="likeThisSong" onClick={this.toggleTip}>
              <Logo image={Thumb} style={thumbStyle} />
              Like this song?
            </div>
          ) : (
            <div className="leaveATip fadeIn-fast">
              <p>Leave a tip!</p>
              <DonateBtns />
            </div>
          )}
        </div>

        <div className="row row-style justify-content-center text-center ">
          <SongList
            listTitle={"Hawaiian"}
            list={hawaiian}
            selectedTitle={title}
            setTitle={this.setTitle}
          />
          <SongList
            listTitle={"Covers"}
            list={covers}
            selectedTitle={title}
            setTitle={this.setTitle}
          />
          <SongList
            listTitle={"Compositions"}
            list={composed}
            selectedTitle={title}
            setTitle={this.setTitle}
          />
          <SongList
            listTitle={"Collaborations"}
            list={collabs}
            selectedTitle={title}
            setTitle={this.setTitle}
          />
        </div>
      </div>
    );
  }
}

export default Music;
