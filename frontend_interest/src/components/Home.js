import React, { Component } from "react";
import NavBar from "./NavBar.js";
import AllPinsList from "./AllPinsList.js";
// import axios from 'axios'

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    console.log(this.props, "redux");

    return (
      <div className="homepage">
        <NavBar />
        <AllPinsList pins={this.props.pins} />
      </div>
    );
  }
}

export default Home;
