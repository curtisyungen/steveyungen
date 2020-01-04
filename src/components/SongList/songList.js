import React, { Component } from "react";

class SongList extends Component {
  render() {
    const { listTitle, list, selectedTitle } = this.props;
    return (
      <div className="col-md-3 songList">
        <h4>{listTitle}</h4>
        {Object.keys(list).map(song => (
          <div
            key={song}
            className={`row song selected-${selectedTitle === list[song]}`}
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
