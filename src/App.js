import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/footer";

const craterLakePano = (new Image().src =
  "https://res.cloudinary.com/curtiscdn/image/upload/v1578358423/crater-lake-pano_hjrnf8.jpg");
const ocean = (new Image().src =
  "https://res.cloudinary.com/curtiscdn/image/upload/v1578358425/ocean-1_tpwauj.jpg");
const hawaii = (new Image().src =
  "https://res.cloudinary.com/curtiscdn/image/upload/v1578358441/hawaii-green_hp4dmo.png");
const oldStage = (new Image().src =
  "https://res.cloudinary.com/curtiscdn/image/upload/v1578358441/hawaii-green_hp4dmo.png");
const jville = (new Image().src = "./images/covers/jacksonville-pano.jpg");

const covers = [craterLakePano, ocean, hawaii, oldStage, jville];

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/support" component={Support} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
