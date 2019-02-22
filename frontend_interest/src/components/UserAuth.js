import React, { Component } from "react";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import "../css/userAuth.css"

class UserAuth extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllPins()
  }

  displayPins = () => {
    return this.props.pins.map(pin => {
      return (
        <div key={pin.id} className="loginImageDiv">
          <img className="loginImages" src={pin.imgurl} alt="" />
        </div>
      );
    });
  };



  render() {
// console.log(this.props, "check")
    return (
      <div>
      <div className="parentLogInImageDiv">{this.displayPins()}</div>

        {!this.props.toggle ?
          <div>
            <button onClick={this.props.toggleForm} className="authToggleButton">Log in</button>
        <CreateAccount newUser={this.props.newUser} loginUser={this.props.loginUser}/>
        </div>
        :
        <div>
          <button onClick={this.props.toggleForm}
            className="authToggleButton">Sign up</button>
        <Login loginUser={this.props.loginUser}/>
        </div>
        }


      </div>
    );
  }
}

export default UserAuth;
