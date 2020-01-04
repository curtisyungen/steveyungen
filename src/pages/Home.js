import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import Steve from "../images/steve-cropped.png";
import "./Home.css";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

class Home extends Component {
  render() {
    return (
      <div className="container home-container">
        <div className="row my-row justify-content-center text-center">
          {/* Music */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/music"}
              image={Steve}
              style={photoStyle}
              title={"Music"}
              description={"Music composed by Steve Yungen."}
            />
          </div>
          {/* Events */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/events"}
              image={Steve}
              style={photoStyle}
              title={"Events"}
              description={"Past and upcoming events featuring Steve."}
            />
          </div>
          {/* Gallery */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/gallery"}
              image={Steve}
              style={photoStyle}
              title={"Gallery"}
              description={"About Steve and his music."}
            />
          </div>
        </div>

        <div className="row my-row justify-content-center text-center">
          <div className="col-md-12">Row 2 Col 1</div>
        </div>

        <div className="row my-row justify-content-center text-center">
          <div className="col-md-12">Row 3 Col 1</div>
        </div>
      </div>
    );
  }
}

export default Home;
