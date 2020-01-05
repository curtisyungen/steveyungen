import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import DonateBtns from "../components/DonateBtns/donateBtns";
import tipJarImg from "../images/tip-jar.jpg";

const photoStyle = {
  border: "1px solid black",
  maxHeight: "400px",
  maxWidth: "100%"
};

const listStyle = {
  listStyleType: "circle"
};

class TipJar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Photo image={tipJarImg} style={photoStyle} />
          </div>
          <div className="col-xs-8 col-md-4 text-center">
            <p className="title">Take a Tip</p>
            <ul className="tips description text-left" style={listStyle}>
              <li>
                If you're having a hard time playing a piece, just play it
                correctly.
              </li>
              <li>
                If you're having a hard time playing a piece, just play it
                correctly.
              </li>
              <li>
                If you're having a hard time playing a piece, just play it
                correctly.
              </li>
              <li>
                If you're having a hard time playing a piece, just play it
                correctly.
              </li>
              <li>
                If you're having a hard time playing a piece, just play it
                correctly.
              </li>
            </ul>
          </div>
          <div className="col-xs-8 col-md-4 text-center">
            <p className="title">Leave a Tip</p>
            <DonateBtns source="tipJar" />
          </div>
        </div>
      </div>
    );
  }
}

export default TipJar;
