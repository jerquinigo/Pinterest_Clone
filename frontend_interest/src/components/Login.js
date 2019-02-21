import React, { Component } from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="LoginPage">


        <div className="centerLoginForm">
          <div className="transparentLoginPage">
          <div className="formLoginStyleDiv">
            <div className="FormlogoDiv">
                <img className="formLogo" src={logo} alt="" />
                </div>
                <h3 className="LoginUpText">Log in to see more</h3>
                <h3 className="LoginDescription">Access Interest photos and ideas</h3>
                <div className="formLoginContainer">
                <div className="formLoginDiv">
            <form>
              <input className="textBox" type="text" placeholder="email" />
              <br />
              <input className="textBox" type="text" placeholder="password" />
              <br />
              <button className="continue" type="submit">Continue</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Login;
