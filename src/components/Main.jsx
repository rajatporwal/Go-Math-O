import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Faq from "../Pages/Faq";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/faq" component={Faq} />
    </Switch>
  </main>
);

export default Main;
