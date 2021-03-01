import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "../views/index/Index";
import Scene from "../views/Scene/Scene";

class Router extends Component {
  render(props) {
    return (
      <Fragment>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/scene/:id" component={Scene} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Router;
