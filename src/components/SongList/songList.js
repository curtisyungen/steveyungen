import React, { Component } from "react";
import Photo from "../Photo/photo";
import GuitarSVG from "../../images/logos/guitar-silhouette.svg";
import FlowerSVG from "../../images/logos/flower.svg";
import InstrumentsSVG from "../../images/logos/instruments.svg";
import MusicSVG from "../../images/logos/music.svg";
import "./songList.css";

const svgStyle = {
  height: "50px"
};

class SongList extends Component {
  getSVG = () => {
    let { listTitle } = this.props;
    if (!listTitle) {
      return;
    }

    let svgImage;
    switch (listTitle) {
      case "Hawaiian":
        svgImage = FlowerSVG;
        break;
      case "Covers":
        svgImage = GuitarSVG;
        break;
      case "Compositions":
        svgImage = MusicSVG;
        break;
      case "Collaborations":
        svgImage = InstrumentsSVG;
        break;
      default:
        svgImage = GuitarSVG;
        break;
    }

    return <Photo image={svgImage} style={svgStyle} />;
  };
  render() {
    const { listTitle, list, selectedTitle } = this.props;
    return (
      <div className="col-md-3 songList text-center">
        {this.getSVG()}
        <h4 className="title">{listTitle.toUpperCase()}</h4>
        {Object.keys(list).map(song => (
          <div
            key={song}
            className={`row song description selected-${selectedTitle ===
              list[song]}`}
          >
            <div onClick={this.props.setTitle.bind(this, list[song])}>
              {song}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SongList;
