import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Icon.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="logo-area">
        <img src={logo} className="App-logo" alt="logo" />
        Rensource
      </div>

      <div className="list-group list-group-flush">
      <Link to="/">
        <span
          className="list-group-item nav-list"
        >
        Application Registration
        </span>
        </Link>
        <Link to="/action/type/config">
        <span
          className="list-group-item nav-list "
        >
          Audit Action Types Configuration
        </span>
        </Link>
         <Link to="/audit/trails">
        <span
          className="list-group-item nav-list "
        >
        Audit Trails
        </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
