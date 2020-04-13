import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Faq from "../Pages/Faq";
import PageNotFound from "./PageNotFound";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  </main>
);

export default Main;
