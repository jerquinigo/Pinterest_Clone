import React, { Component } from "react";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";

class UserAuth extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    // buttonClicked: false;
    // }
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
console.log(this.props, "check")
    return (
      <div>
      <div className="parentLogInImageDiv">{this.displayPins()}</div>

        {!this.props.toggle ?
          <div>
            <button onClick={this.props.toggleForm}>Sign up test</button>
        <CreateAccount />
        </div>
        :
        <div>
          <button onClick={this.props.toggleForm}>Log in test</button>
        <Login />
        </div>
        }


      </div>
    );
  }
}

export default UserAuth;

// <CreateAccount toggleForm={this.props.toggleForm} />
