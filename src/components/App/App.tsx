// TODO: включить JSX Transform
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import { Game } from "../Game/Game";
import { New } from "../New/New";

export function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <New />
          </Route>
          <Route path="/game/:id">
            <Game />
          </Route>
          <Route path="/pair/:id">Pair with id</Route>
        </Switch>
      </div>
    </Router>
  );
}
