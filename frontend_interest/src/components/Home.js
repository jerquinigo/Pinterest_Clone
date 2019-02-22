import React, { Component } from "react";
import NavBar from "./NavBar.js";
import {AllPinsList} from "./AllPinsList.js";
// import {Route} from 'react-router-dom'
// import axios from 'axios'

class Home extends Component {
  componentDidMount() {
    // this.props.fetchAllPins();
  }

  render() {
    console.log(this.props, "redux");
    console.log(this.props.pins, "the pins")
    return (
      <div className="homepage">
        <NavBar />

        <AllPinsList pins={this.props.pins} />
      </div>
    );
  }
}

export default Home;
