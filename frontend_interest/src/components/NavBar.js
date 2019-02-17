import React from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/NavBar.css";



class NavBar extends React.Component{



render(){

  return (
    <div className="navBarPage">
      <div className="logoAndSearch">
        <img className="logo" src={logo} alt="" />
        <input className="searchBox" type="text" placeholder="search" />
        <div className="listItems">
          <ul>
            <li className="list">Home</li>
            <li className="list">username</li>
            <li className="list">...</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }
};

export default NavBar;
