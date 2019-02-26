import React, { Component } from "react";
// import NavBar from "./NavBar.js";
import AllPinsList from "./AllPinsList.js";
import NavBarContainer from './NavBarContainer.js'

// import {Route} from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPins();
    // this.props.emailLogin()

  }

  // displayPins = () => {
  //   this.props.pins.map(pin => {
  //     return(
  //       <div>
  //         <img src={pin.imgUrl} alt=""/>
  //       </div>
  //     )
  //   })
  // }

  render() {

    // console.log(this.props, "redux");
    // console.log(this.props.pins, "the pins")
    return (
      <div className="homepage">
        <NavBarContainer />

        <AllPinsList pins={this.props.pins} />


      </div>
    );
  }
}

export default Home;
