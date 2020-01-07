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

class App extends Component {
  getAdminKey = () => {
    return prompt("Admin key: ") === "111";
  };

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
