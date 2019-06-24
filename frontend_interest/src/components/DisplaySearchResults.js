import React, { Component } from "react";

class DisplaySearchResults extends Component {
  constructor() {
    super();
    this.state = {
      userResults: ""
    };
  }

  searchBarFunction = () => {
    let userSearch = this.props.userSearchInput;
    let pins = this.props.pins;
    if (pins && this.props.searchSwitch === true) {
      return pins.filter(pin => {
        debugger;
        if (userSearch.toLowerCase() === pin.title) {
          return <img src={pin.imgurl} alt="" />;
          // this.setState({
          //   userResults: pin.imgUrl
          // });
        }
      });
    }
  };
  render() {
    //have this.props.searchSwitch and default is false
    console.log(this.state.userResults, "in the displaysearchresults");
    console.log(this.props.userSearchInput, "the Single User Component");
    return <div>{this.searchBarFunction}</div>;
  }
}

export default DisplaySearchResults;
