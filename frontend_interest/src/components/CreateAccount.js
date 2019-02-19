import React, { Component } from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/CreateAccount.css";

class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="createAccountPage">
        <div className="marginPage">
          <div className="formStyleDiv">
            <div className="logoDiv">
              <img className="logo" src={logo} alt="" />
            </div>
            <h3 className="signUpText">Sign up to see more</h3>
            <h3 className="signUpDescription">
              Access Interest photos and ideas
            </h3>
            <div className="formContainer">
              <div className="formDiv">
                <form>
                  <button>Sign up</button>
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
    );
  }
}

export default CreateAccount;
