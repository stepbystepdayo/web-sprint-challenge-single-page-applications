import React from "react";
import "./App.css";
import Pizza from "./Pizza.jpg";
import { Route, Link, Switch } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <img className="home-image" src={Pizza} alt="yum-pizza" />
      <Link to="/pizza">
        <button className="md-button shop-button">Pizza!</button>
      </Link>
    </div>
  );
}
