import React from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/NavBar.css";
import {withRouter} from 'react-router-dom';
import magnifyingGlass from '../frontendResources/magnifying_glass.png'


class NavBar extends React.Component{

  // componentDidMount(){
  //       // this.props.loginUser()
  //       this.displayUserWithoutEmail()
  // }




  handleLogout = (event) => {
    event.preventDefault()
    this.props.logoutUser()
  }

//   displayUserWithoutEmail = () => {
// return this.props.currentUser.substring(0, this.props.currentUser.lastIndexOf("@"))
//
// //     var email = this.props.currentUser
// // var name = email.substring(0, email.lastIndexOf("@"));
// // console.log(name, "the name<3")
// //   return name;
//
//   }

displayCurrentUser = () => {
  if(this.props.currentUser){
    return(

    <li className="list">{this.props.currentUser.email}</li>
    )
  }else{
    return null
  }
}


render(){

  // console.log(this.props.currentUser, "navbar");
  // if(this.props.currentUser){
  return (
    <div className="navBarPage">
      <div className="logoAndSearch">
        <img className="logo" src={logo} alt="" />
        <div className="searchBoxAndMagnifyingStyling">
        <img className="logo" src={magnifyingGlass} alt="" />
        <input className="searchBox" type="text" placeholder="search" />
        </div>
        <div className="listItems">
          <ul>
            <li className="list">Home</li>
            {this.displayCurrentUser()}
            <li className="list"><button onClick={this.handleLogout}>log out</button></li>

          </ul>
        </div>
      </div>
    </div>
  );

  }
};

// } else{
//   return null
// }

export default withRouter(NavBar);
