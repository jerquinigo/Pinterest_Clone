import React, { Component } from "react";
import Login from './Login.js'
import logo from "../frontendResources/InterestHeartlogo.png";

import "../css/CreateAccount.css";

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
      buttonClicked: false
    };
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  displayPins = () => {
    return this.props.loginPins.map(pin => {
      return (
        <div key={pin.id} className="loginImageDiv">
          <img className="loginImages" src={pin.imgurl} alt="" />
        </div>
      );
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.state)
    console.log(this.props, "in the account");
    if(this.state.buttonClicked === false){

    return (
      <div className="createAccountPage">
        <div className="parentLogInImageDiv">{this.displayPins()}</div>
        <div className="transparentPage">

          <button onClick={this.props.toggleForm}className="loginButton">Log In</button>
          <div className="centerForm">
            <div className="formStyleDiv">
              <div className="logoDiv">
                <img className="logoCreateAccount" src={logo} alt="" />
              </div>
              <h3 className="signUpText">Sign up to see more</h3>
              <h3 className="signUpDescription">
                Access Interest photos and ideas
              </h3>
              <div className="formContainer">
                <div className="formDiv">
                  <form>

                    <br />
                    <input
                      onChange={this.handleChange}
                      className="textBox"
                      value={this.state.email}
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="textBox"
                      value={this.state.name}
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="textBox"
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="Create password"
                    />
                    <br />
                    <button
                      onClick={this.onSubmit}
                      type="submit"
                      className="continue"
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } // if statement
  else if(this.state.buttonClicked === true){
    return (
      <div>
        hello world
        <Login/>
      </div>
    )
  }
  }
}



export default CreateAccount;
