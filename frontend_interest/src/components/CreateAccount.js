import React, { Component } from "react";
import "../css/CreateAccount.css";

class CreateAccount extends Component {
  constructor() {
    super()
  

  }

  render() {
    return (
      <div className="createAccountPage">
        <div className="formStyleDiv">
          <div className="formDiv">
            <form>
              <button>Sign up</button>
              <input type="text" placeholder="Email" />
              <br />
              <input type="text" placeholder="Name" />
              <br />
              <input type="text" placeholder="Create password" />
              <br />
              <button>Continue</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
