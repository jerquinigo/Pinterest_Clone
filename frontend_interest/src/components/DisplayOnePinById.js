import React, { Component } from "react";
import NavBarContainer from "./NavBarContainer.js";
import "../css/DisplayOnePinById.css";

class DisplayOnePinById extends Component {
  componentDidMount() {
    this.props.fetchOnePin(this.props.match.params.id);
  }

  render() {
    // console.log(this.props.match.params.id, "the id")
    // console.log(this.props, "the pin id");
    if (!this.props.pin) return null;
    return (
      <div className="displayOnePinPage">
        <NavBarContainer />
        <div className="grandparentMainImageDiv">
          <div className="mainImageDiv">
            <div className="imageContainer">
              <img className="onePinImage" src={this.props.pin.imgurl} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayOnePinById;
