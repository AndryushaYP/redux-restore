import React from "react";
import { Switch, Route } from "react-router";
import "./app.css";

import Header from "../Header/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const App = () => {
  return (
    <main className="main">
      <Header sum={210} quantity={5} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
