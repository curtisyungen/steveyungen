import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";
import SongList from "../components/SongList/songList";
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
      <div className="container">
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
            listTitle={"Composed"}
            list={composed}
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
