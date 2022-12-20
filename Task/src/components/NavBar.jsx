import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"
import Profile from "../img/profile.png";

function NavBar() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="left-part">
          <ul className="nav">
            <li>
              <a className="nav-link" href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a className="nav-link" href="#master_price">Master Price</a>
            </li>
            <li>
              <a className="nav-link" href="#custom_price">Custom Price</a>
            </li>
            <li>
              <a className="nav-link" href="#calendar">Calendar</a>
            </li>
            <li>
              <a className="nav-link" href="#reports">Reports</a>
            </li>
          </ul>
        </div>
        <div className="right-part">
          <ul className="nav">
            <li>
              <a className="nav-link" href="#notification">🔔</a>
            </li>
            <li>
              <img className="profile-img" src={Profile} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;