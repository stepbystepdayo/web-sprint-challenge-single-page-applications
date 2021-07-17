import React from "react";
import { Router, Link, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </>
  );
};
export default App;
