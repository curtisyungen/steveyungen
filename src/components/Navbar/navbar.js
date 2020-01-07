import React, { Component } from "react";
import Jumbotron from "../Jumbotron/jumbotron";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

library.add(faBars);

class Navbar extends Component {
  render() {
    return (
      <Jumbotron background={"gray"}>
        <nav className="navbar navbar-expand-lg text-right">
          <a className="navbar-brand" href="/home">
            <p className="steveyungen">STEVE YUNGEN</p>
            <p className="welcomeNote">
              Welcome to my website. My purpose is to share music and life in
              Southern Oregon.
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
          >
            <span className="black-text">
              <FontAwesomeIcon icon={faBars} className="fa-2x faBars" />
            </span>
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
                <a className="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support">
                  SUPPORT
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
