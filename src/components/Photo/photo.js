import React, { Component } from "react";
import "./photo.css";

class Photo extends Component {
  render() {
    const { image, title, description, link } = this.props;
    return (
      <a href={link} className="photo">
        <img src={image} style={this.props.style} />
        <p className="photoTitle">{title}</p>
        <p className="photoDescription">{description}</p>
      </a>
    );
  }
}

export default Photo;
