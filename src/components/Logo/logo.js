import React, { Component } from "react";

class Photo extends Component {
  render() {
    const { image, title, description, link, target } = this.props;
    return (
      <a href={link} className="logo" target={target}>
        <img src={image} style={this.props.style} alt="alt title" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </a>
    );
  }
}

export default Photo;
