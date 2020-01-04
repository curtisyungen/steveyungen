import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container home-container">
        <div className="row">
          {/* Music */}
          <div className="col-sm-12 col-md-4">Row 1 Col 1</div>
          {/* Events */}
          <div className="col-sm-12 col-md-4">Row 1 Col 2</div>
          {/* About */}
          <div className="col-sm-12 col-md-4">Row 1 Col 3</div>
        </div>

        <div className="row">
          <div className="col-md-12">Row 2 Col 1</div>
        </div>

        <div className="row">
          <div className="col-md-12">Row 3 Col 1</div>
        </div>
      </div>
    );
  }
}

export default Home;
