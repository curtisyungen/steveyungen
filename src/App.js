import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/events" component={Events} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
