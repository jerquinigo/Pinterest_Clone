import React, { Component } from "react";
// import NavBar from "./NavBar.js";
import {AllPinsList} from "./AllPinsList.js";
import NavBarContainer from './NavBarContainer.js'
// import {Route} from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    // this.props.fetchAllPins();
  }

  render() {
    console.log(this.props, "redux");
    console.log(this.props.pins, "the pins")
    return (
      <div className="homepage">
        <NavBarContainer />

        <AllPinsList pins={this.props.pins} />
      </div>
    );
  }
}

export default Home;
