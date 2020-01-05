import React, { Component } from "react";
import "./photo.css";

class Photo extends Component {
  render() {
    const { image, title, description, link, target } = this.props;
    return (
      <a href={link} className="photo fadeIn-fast" target={target}>
        <img src={image} style={this.props.style} />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </a>
    );
  }
}

export default Photo;
