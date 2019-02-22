import React from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/NavBar.css";
import {withRouter} from 'react-router-dom'


class NavBar extends React.Component{

  handleLogout = (event) => {
    event.preventDefault()
    this.props.logoutUser()
  }

render(){
  console.log(this.props.email, "navbar");
  return (
    <div className="navBarPage">
      <div className="logoAndSearch">
        <img className="logo" src={logo} alt="" />
        <input className="searchBox" type="text" placeholder="search" />
        <div className="listItems">
          <ul>
            <li className="list">Home</li>
            <li className="list">{this.props.email}</li>
            <li className="list"><button onClick={this.handleLogout}>log out</button></li>

          </ul>
        </div>
      </div>
    </div>
  );
  }
};

export default withRouter(NavBar);
