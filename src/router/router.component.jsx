import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/home.component";
import Portfolio from "../components/portfolio/portfolio.component";
import HTMLComponent from "../components/portfolio/html.component";

export default class Routing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="router prop">
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/portfolio/:name" component={HTMLComponent} />
        </div>
      </React.Fragment>
    );
  }
}