import React, { Component } from "react";
import logo from "../frontendResources/InterestHeartlogo.png";

class Login extends Component {
  render() {
    return (
      <div className="LoginPage">

      <img src={logo} alt=""/>
      <h3>Log in to see more</h3>
      <h3>Access Interest photos and ideas</h3>
        <form>

          <input type="text" placeholder="email" />
          <br />
          <input type="text" placeholder="password" />
          <br />
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  }
}

  // <button className="signUp">Sign up</button>

export default Login;
