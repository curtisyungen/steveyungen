import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import DonateBtns from "../components/DonateBtns/donateBtns";
import tipJarImg from "../images/tip-jar.jpg";

const photoStyle = {
  maxHeight: "300px",
  maxWidth: "100%"
};

class TipJar extends Component {
  render() {
    return (
      <div className="tipJar text-center">
        <Photo
          image={tipJarImg}
          title="Tip Jar"
          description="Tips are very much appreciated!"
          style={photoStyle}
        />
        <DonateBtns source="tipJar" />
      </div>
    );
  }
}

export default TipJar;
