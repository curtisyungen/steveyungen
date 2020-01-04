import React, { Component } from "react";
import AudioPlayer from "../components/AudioPlayer/audioPlayer";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
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
          <div onClick={this.setTitle.bind(this, "aloha-week-hula")}>
            Aloha Week Hula
          </div>
        </div>
        <div className="row">
          <div onClick={this.setTitle.bind(this, "ulupalakua")}>Ulupalakua</div>
        </div>
      </div>
    );
  }
}

export default Music;
