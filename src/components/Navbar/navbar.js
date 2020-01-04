import React, { Component } from "react";
import Jumbotron from "../Jumbotron/jumbotron";
import JumbotronImage from "../../images/steve-grand-canyon-cropped.png";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Jumbotron background={"gray"} image={JumbotronImage}>
        <nav className="navbar navbar-expand-lg text-right">
          <a className="navbar-brand" href="/home">
            <span>STEVE YUNGEN</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/music">
                  MUSIC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  PHOTOS/VIDEOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Jumbotron>
    );
  }
}

export default Navbar;
