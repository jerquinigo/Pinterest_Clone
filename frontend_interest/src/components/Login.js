import React, { Component } from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/Login.css";

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password_digest:""
    }
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)


  }

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
            <form onSubmit={this.onSubmit}>
              <input onChange={this.handleChange} name="email" value={this.state.email} className="textBox" type="text" placeholder="email" />
              <br />
              <input onChange={this.handleChange} value={this.state.password_digest} name="password_digest"className="textBox" type="password" placeholder="password" />
              <br />
              <button  className="continue" type="submit">Continue</button>
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
