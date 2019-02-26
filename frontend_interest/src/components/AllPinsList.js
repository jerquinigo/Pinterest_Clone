import React, { Component } from "react";
import {Route,Link } from 'react-router-dom';
import DisplayOnePinById from './DisplayOnePinById.js'

import "../css/AllPinsList.css";

class AllPinsList extends Component {
  // constructor() {
  //   super();
  // }



  displayPins = () => {
    let pins = this.props.pins;
    return pins.map(pin => {
      return (

        <div key={pin.id} className="homeMapImageDiv">
        <Link to={`/pins/${pin.id}`}> <img className="HomeImages" src={pin.imgurl} alt="" /></Link>
        </div>
      );
    });
  };
  // <DisplayOnePinById id={pin.id} pinurl={pin.imgUrl} />

  // redirectPin = () => {
  //   let pins = this.props.pins;
  //   return pins.map(pin => {
  //     return (
  //       <div key={pin.id} className="homeMapImageDiv">
  //           <Route to={`/pins/${pin.id}`} component={DisplayOnePinById} />
  //
  //       </div>
  //     );
  //   });
  //
  // }

  render() {
    console.log(this.props,"to check")
    return(
      <div className="parentImageDiv">
        {this.displayPins()}


          <Route path={"/pins/1"} component={DisplayOnePinById} />

      </div>
    )
  }
}

export default AllPinsList;
