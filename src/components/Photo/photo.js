import React, { Component } from "react";
import "./photo.css";

class Photo extends Component {
  render() {
    const { image, title, description } = this.props;
    return (
      <div className="photo">
        <img src={image} style={this.props} />
        <p className="photoTitle">{title}</p>
        <p className="photoDescription">{description}</p>
      </div>
    );
  }
}

export default Photo;
