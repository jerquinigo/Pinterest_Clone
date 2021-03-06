import React from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/NavBar.css";
import AllPinsList from "./AllPinsList.js";
import DisplaySearchResults from "./DisplaySearchResults.js";
import { withRouter, Link } from "react-router-dom";
import magnifyingGlass from "../frontendResources/magnifying_glass.png";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearchInput: "",
      searchSwitch: false
    };
  }
  // componentDidMount(){
  //       // this.props.loginUser()
  //       this.displayUserWithoutEmail()
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.props.fetchSingleUser(this.props.id);
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logoutUser();
  };

  displayUserWithoutEmail = () => {
    // return window.localStorage.token.substring(0, window.localStorage.token.lastIndexOf("@"))
    if (window.localStorage.token) {
      return window.localStorage.token;
      // return this.props.currentUser.email
      // return this.props.currentUser.substring(0, this.props.currentUser.lastIndexOf("@"))
    }
  };

  // SearchBarFunction = () => {
  //   let userSearch = this.state.userSearchInput;
  //   let pins = this.props.pins;
  //   if (pins) {
  //     return pins.filter(pin => {
  //       if (userSearch.toLowerCase() === pin.title) {
  //         this.setState({
  //           userResults: pin.imgUrl
  //         });
  //       }
  //     });
  //   }
  // };

  render() {
    console.log(this.props.pins, "the navBar pin");
    console.log(this.state.userResults, "the input");
    console.log(this.state.searchSwitch, "searchSwitch");
    // console.log(this.props.currentUser, "NAVBAR!!");
    // if(this.props.currentUser){
    // if(!currentUser) return null
    return (
      <div className="navBarPage">
        <div className="logoNavDiv">
          <Link to={"/Home"}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navSearchParentDiv">
          <div
            onClick={() =>
              this.setState({ searchSwitch: !this.state.searchSwitch })
            }
            className="searchBoxDiv"
          >
            <img className="magnifyLogo" src={magnifyingGlass} alt="" />
            <input
              name="userSearchInput"
              onChange={this.handleChange}
              value={this.state.userSearchInput}
              className="searchBox"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="listItems">
          <div className="list">
            <Link className="naviLink" to={"/Home"}>
              {" "}
              Home
            </Link>
          </div>
          <div className="list">
            {this.props.currentUser && (
              <Link to={`/users/${this.props.currentUser.id}`}>
                {this.displayUserWithoutEmail()}
              </Link>
            )}
          </div>
          <div onClick={this.handleLogout} className="list">
            Log out
          </div>
        </div>
        <DisplaySearchResults
          userSearchInput={this.state.userSearchInput}
          pins={this.props.pins}
          searchSwitch={this.state.searchSwitch}
        />
      </div>
    );
  }
}

//on line 61 i need to use this.props.currentuser.id to get the user path id, but it doesnt work all the time and i am not sure why it does not work
// } else{
//   return null
// }

export default withRouter(NavBar);
