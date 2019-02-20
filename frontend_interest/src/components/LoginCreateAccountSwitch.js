import React, { Component } from "react";
import { connect } from "react-redux";
import CreateAccount from "./CreateAccount.js";
import { toggleFormStatus } from "../actions/loginCreateButtonAction.js";
import Login from "./Login.js";

class LoginCreateAccountSwitch extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //   buttonClicked: false;
  //   }
  // }

  render() {
    debugger;
    return (
      <div>
        <CreateAccount toggleForm={this.props.toggleForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.toggle
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleForm: () => dispatch(toggleFormStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCreateAccountSwitch);
