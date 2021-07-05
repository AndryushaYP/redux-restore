import React from "react";
import { Switch, Route } from "react-router";
import "./app.css";

import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};

export default App;
