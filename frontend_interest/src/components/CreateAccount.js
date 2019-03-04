import React, { Component } from "react";
import logo from "../frontendResources/InterestHeartlogo.png";

import "../css/CreateAccount.css";

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password_digest: ""
    };
  }

componentDidMount(){
  // this.onSubmit()
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.newUser(this.state).then(() => {

      this.props.loginUser({
        email: this.state.email,
        password_digest: this.state.password_digest
      }) //pass an object that is going to be the user
    })

  };

  render() {

    return (
      <div className="createAccountPage">
        <div className="transparentPage">

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
                      name="password_digest"
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
    );
  }
}

export default CreateAccount;
