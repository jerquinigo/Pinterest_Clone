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
      pinDescription: "",
      pinCategory: "",
      pinurl: "",
      user_board_id: null,
      addedPin: false,
      addedBoard: false,
      pinMessage: "added a photo to website"
    };
  }

  componentDidMount() {
    this.props.getSingleUserProfile(this.props.user);
    this.props.fetchAllBoardsforOneUser(parseInt(this.props.match.params.id));
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
    let boardData = {
      user_id: this.props.match.params.id,
      title: this.state.boardTitle
    };

    this.setState({
      addedBoard: true,
      boardTitle: ""
    });
    return this.props.createBoard(boardData);
  };

  displayCreateBoardAndPin = () => {
    if (this.state.addFeature) {
      return (
        <div>
          <ul>
            <li onClick={this.createBoardOnClick}>create board</li>
            <li onClick={this.createPinOnClick}>create pin</li>
          </ul>
        </div>
      );
    }
  };

  displayOptionBoardSelectForm = () => {
    let userBoards = Object.values(this.props.allBoards);
    console.log(userBoards, "in the function")
    return userBoards.map(boards => {
      return (

          <option onChange={this.handleChange} name="user_board_id" value={boards.id}>{boards.title}</option>


      );
    });
  };

  displayCreateBoardForm = () => {
    if (this.state.addFeature && this.state.createBoard) {
      return (
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
          {this.state.addedBoard ? <h3>added a new board</h3> : null}
        </div>
      );
    }
  };

  onSubmitPinForm = event => {
    event.preventDefault();
    let pinData = {
      title: this.state.pinTitle,
      description: this.state.pinDescription,
      category: this.state.pinCategory,
      imgUrl: this.state.pinurl,
      user_board_id: this.state.user_board_id,
      user_id: this.props.match.params.id
    };

    this.setState({
      addedPin: true,
      pinTitle: "",
      pinDescription: "",
      pinCategory: "",
      pinurl: "",
      user_board_id: null
    });

    return this.props.createSinglePin(pinData);
  };

  displayCreatePinForm = () => {
    if (this.state.addFeature && this.state.createPin) {
      return (
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
              placeholder="Add Description"
            />
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.pinCategory}
              name="pinCategory"
              placeholder="Add Category"
            />

            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.pinurl}
              name="pinurl"
              placeholder="add image url"
            />

          <select>{this.displayOptionBoardSelectForm()}</select>


            <button onClick={this.onSubmitPinForm} type="submit">
              Create
            </button>
            <button type="submit">Cancel</button>
          </form>
          {this.state.addedPin ? <h3>added a photo to website</h3> : null}
        </div>
      );
    }
  };

  render() {
    console.log(this.state, "the state");
    console.log(this.props, "in props in user profile");
    console.log(this.props.allBoards, "hunting");

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
          <div className="userBoardContainer">
            <div className="parentUserBoard">

            </div>
          </div>
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

//
// <input
//   onChange={this.handleChange}
//   type="text"
//   value={this.state.user_board_id}
//   name="user_board_id"
//   placeholder="user Board id"
// />
