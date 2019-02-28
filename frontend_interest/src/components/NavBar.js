import React from "react";
import logo from "../frontendResources/InterestHeartlogo.png";
import "../css/NavBar.css";
import {withRouter, Link} from 'react-router-dom';
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

  displayUserWithoutEmail = () => {
return window.localStorage.token.substring(0, window.localStorage.token.lastIndexOf("@"))

//     var email = this.props.currentUser
// var name = email.substring(0, email.lastIndexOf("@"));
// console.log(name, "the name<3")
//   return name;

  }
//
// displayCurrentUser = () => {
//   if(this.props.currentUser){
//     return(
//
//     <li className="list">{this.props.currentUser.email}</li>
//     )
//   }else{
//     return null
//   }
// }


render(){
  debugger;
  // let {currentUser} = this.props;
  console.log(this.props, "navbar");
  // if(this.props.currentUser){
  // if(!currentUser) return null
  return (
    <div className="navBarPage">
      <div className="logoAndSearch">
        <Link className="logoHome" to={"/Home"}><img className="logo" src={logo} alt="" /></Link>
        <div className="searchBoxAndMagnifyingStyling">
        <img className="logo" src={magnifyingGlass} alt="" />
        <input className="searchBox" type="text" placeholder="search" />
        </div>
        <div className="listItems">
          <ul>
            <li className="list"> <Link className="naviLink"to={"/Home"}> Home</Link></li>
            <li className="list"><Link to={`/users/${this.props.currentUser.id}`}>{this.displayUserWithoutEmail()}</Link></li>
            <li onClick={this.handleLogout } className="list" >log out</li>

          </ul>
        </div>
      </div>
    </div>
  );

  }
};

//on line 61 i need to use this.props.currentuser.id to get the user path id, but it doesnt work all the time and i am not sure why it does not work
// } else{
//   return null
// }

export default withRouter(NavBar);
