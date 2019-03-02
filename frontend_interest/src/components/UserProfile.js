import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "./NavBarContainer.js";
import addButton from "../frontendResources/addIcon.jpg";
import "../css/UserProfile.css";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      addFeature: false,
      createBoard: false,
      createPin: false,
      boardTitle: "",
      pinTitle: "",
      pinDescription:"",
      pinCategory: "",
      pinurl:""


    };
  }

  componentDidMount() {
    this.props.getSingleUserProfile(this.props.user);
  }

  displayEmailAsUserName = () => {
    return window.localStorage.token.substring(
      0,
      window.localStorage.token.lastIndexOf("@")
    );
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCrossImageClick = () => {
    this.setState({
      addFeature: !this.state.addFeature
    });
  };

  createBoardOnClick = event => {
    event.preventDefault();
    this.setState({
      createBoard: !this.state.createBoard
    });
  };

  createPinOnClick = event => {
    event.preventDefault();
    this.setState({
      createPin: !this.state.createPin
    });
  };

  submitCreateBoardForm = event => {
    event.preventDefault();
  };

  displayCreateBoardAndPin = () => {
    if(this.state.addFeature){
      return(
        <div>
            <ul>
              <li onClick={this.createBoardOnClick}>create board</li>
              <li onClick={this.createPinOnClick}>create pin</li>
            </ul>
        </div>
      )
  }
}

displayCreateBoardForm = () => {
  if(this.state.addFeature && this.state.createBoard){
    return(
      <div>
          <form>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.boardTitle}
              name="boardTitle"
            />
            <button onClick={this.submitCreateBoardForm} type="submit">
              Create
            </button>
            <button type="submit">Cancel</button>
          </form>

      </div>
    )
  }
}

displayCreatePinForm = () => {
  if(this.state.addFeature && this.state.createPin){
    return(
      <div>
        <form>

            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.pinTitle}
              name="pinTitle"
              placeholder="Add A Title"
            />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.pinDescription}
            name="pinDescription"
            placeholder="Add Description"/>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.pinCategory}
            name="pinCategory"
            placeholder="Add Category"/>

          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.pinurl}
            name="pinurl"
            placeholder="add image url"/>

            <button onClick={this.submitCreateBoardForm} type="submit">
              Create
            </button>
            <button type="submit">Cancel</button>
          </form>
      </div>
    )
  }
}

  render() {
    console.log(this.state, "the state")

    // console.log("PROFILE PROPS", this.props);
    return (
      <div className="userProfilePage">
        <NavBarContainer />
        user profile page
        <br />
        <div className="editButtonsPinBoards">
          <img
            onClick={this.onCrossImageClick}
            className="addButton"
            src={addButton}
            alt=""
          />
        </div>
        <div className="displayUserName">
          {this.displayEmailAsUserName()}
          {this.displayCreateBoardAndPin()}
          {this.displayCreateBoardForm()}
          {this.displayCreatePinForm()}

        </div>
      </div>
    );
  }
}


export default withRouter(UserProfile);


// {this.state.addFeature ? (
//   <ul>
//     <li onClick={this.createBoardOnClick}>create board</li>
//     <li onClick={this.createPinOnClick}>create pin</li>
//   </ul>
// ) : null}
//
// {this.state.createBoard ? (
//   <form>
//     <input
//       onChange={this.handleChange}
//       type="text"
//       value={this.state.boardTitle}
//       name="boardTitle"
//     />
//     <button onClick={this.submitCreateBoardForm} type="submit">
//       Create
//     </button>
//     <button type="submit">Cancel</button>
//   </form>
// ) : null}
// {this.state.createPin ? <h1>hello 2</h1> : null}
