import React, { Component } from "react";
import Jumbotron from "../Jumbotron/jumbotron";
import steve from "../../images/steve-cropped.png";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Jumbotron background={"gray"} image={null}>
        <nav className="navbar navbar-expand-lg text-right">
          <a className="navbar-brand" href="/home">
            <span>Steve Yungen</span>
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
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/music">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/videos">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
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
