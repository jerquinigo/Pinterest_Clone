import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import DisplayOnePinById from "./DisplayOnePinById.js";
// import SearchBar from "./Components/SearchBar.js";
import "../css/AllPinsList.css";

class AllPinsList extends Component {
  // constructor() {
  //   super();
  // }

  searchBarResults = () => {};

  displayPins = () => {
    let pins = this.props.pins;
    if (pins) {
      return pins.map(pin => {
        return (
          <div key={pin.id} className="homeMapImageDiv">
            <Link to={`/pins/${pin.id}`}>
              {" "}
              <img className="HomeImages" src={pin.imgurl} alt="" />
            </Link>
          </div>
        );
      });
    }
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
    console.log(this.props.pins, "the pins at justworks site ");
    return <div className="parentImageDiv">{this.displayPins()}</div>;
  }
}

// <Route path={"/pins/:id"} component={DisplayOnePinById} />

export default AllPinsList;
