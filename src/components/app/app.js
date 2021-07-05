import React from "react";
import "./app.css";
import WithBookstoreService from "../hoc/WithBookstoreService";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div>App</div>;
};

export default WithBookstoreService()(App);
