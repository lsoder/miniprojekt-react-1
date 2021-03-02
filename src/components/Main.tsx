import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import Info from "./Info";

import Melbourne from "./Melbourne";
import NewYork from "./NewYork";
import Paris from "./Paris";

//import components
import Weather from "./Weather";

class Main extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <main>
              <Weather />
              <div className="cities">
                <NewYork />
                <Melbourne />
                <Paris />
              </div>
            </main>
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
