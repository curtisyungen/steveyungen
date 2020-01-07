import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import DonateBtns from "../components/DonateBtns/donateBtns";
import tipJarImg from "../images/steve/tip-jar.jpg";

const photoStyle = {
  border: "1px solid black",
  maxHeight: "auto",
  maxWidth: "100%"
};

class TipJar extends Component {
  render() {
    return (
      <div className="container tipJar-container fadeIn-fast">
        <div className="row row-style justify-content-center text-center">
          <p className="title large-title">SUPPORT</p>
          <p className="description">Donations are always appreciated!</p>
          <div className="spacer"></div>
        </div>
        <div className="col-xs-12 text-center">
          <DonateBtns source="tipJar" />
        </div>
        <div className="spacer"></div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-xs-12 col-md-4">
            <Photo image={tipJarImg} style={photoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default TipJar;
