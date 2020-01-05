import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";
import SongList from "../components/SongList/songList";
import { aboutMusic } from "../content/text";
import {
  DEFAULT_SONG,
  hawaiian,
  composed,
  covers,
  collabs
} from "../content/songs";
import "./Music.css";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: DEFAULT_SONG
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
      <div className="container music-container">
        <div className="row row-style justify-content-center text-center aboutMusic">
          <p className="title large-title">MUSIC</p>
          <p className="description">{aboutMusic}</p>
          <div className="spacer"></div>
        </div>
        <div className="row">
          <AudioPlayer title={title} />
        </div>
        <div className="row">
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
